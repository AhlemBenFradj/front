import json
import pika
import subprocess
import numpy as np
import whisper
from collections import deque
from threading import Thread, Lock
from pymongo import MongoClient
from datetime import datetime
import time
import os

# Shared data structures with thread safety
live_transcriptions = deque(maxlen=10)
keyword_results = deque(maxlen=10)
lock = Lock()
connection = None
channel = None
KEYWORDS = {}

# Constants
KEYWORD_FILE = "keyword.json"
CHUNK_SIZE = 16000 * 2 * 5  # 5 seconds of audio chunks

# MongoDB setup
client = MongoClient('localhost', 27017)
db = client['video_clips']
collection = db['clips']

def load_keywords_from_file():
    """
    Loads keywords for multiple languages from the JSON file.
    """
    global KEYWORDS
    try:
        with lock:
            with open(KEYWORD_FILE, "r") as file:
                data = json.load(file)
                KEYWORDS = data.get("keywords", {})
                print(f"Loaded keywords: {KEYWORDS}")
    except FileNotFoundError:
        print("Keyword file not found. Using default keywords.")
        KEYWORDS = {}
    except Exception as e:
        print(f"Error reading keyword file: {e}")

def monitor_keyword_file():
    """
    Monitors the JSON file periodically for keyword updates.
    """
    while True:
        load_keywords_from_file()
        time.sleep(5)

def detect_keywords_in_text(text):
    """
    Detect if any keyword from any language is present in the text.
    """
    detected_keywords = []
    with lock:
        for lang, keyword in KEYWORDS.items():
            if keyword.lower() in text.lower():
                detected_keywords.append((lang, keyword))
    return detected_keywords

def transcribe_audio(model, audio_np):
    """
    Transcribes audio data using Whisper.
    """
    try:
        result = model.transcribe(audio_np, fp16=False)
        return result['text'], result['segments']
    except Exception as e:
        print(f"Error during transcription: {e}")
        return "", []

def save_clip(channel_name, keyword, url):
    """
    Save a 1-minute video clip and store its metadata in MongoDB.
    """
    timestamp = int(time.time())
    date_str = datetime.now().strftime('%Y-%m-%d')
    time_str = datetime.now().strftime('%H-%M-%S')
    clip_filename = os.path.join("clips", f"{channel_name}_{keyword}_{time_str}_{date_str}.mp4")

    os.makedirs("clips", exist_ok=True)

    ffmpeg_command = [
        "ffmpeg", "-i", url,
        "-ss", "00:00:30",  # Start at 30 seconds
        "-t", "00:01:00",   # Duration 1 minute
        "-c:v", "libx264", "-c:a", "aac",
        clip_filename
    ]

    try:
        print("Saving video clip...")
        subprocess.run(ffmpeg_command, check=True)

        # Validate saved clip
        ffprobe_command = [
            "ffprobe", "-v", "error",
            "-show_entries", "format=duration",
            "-of", "default=noprint_wrappers=1:nokey=1",
            clip_filename
        ]
        ffprobe_output = subprocess.check_output(ffprobe_command, stderr=subprocess.DEVNULL).decode().strip()

        if not ffprobe_output or float(ffprobe_output) <= 0:
            raise ValueError("Video is corrupted or has no duration.")

        # Save metadata to MongoDB
        video_data = {
            "name": clip_filename,
            "channel_name": channel_name,
            "keyword": keyword,
            "timestamp": timestamp,
            "date": date_str,
            "time": time_str,
            "status": "valid"
        }
        collection.insert_one(video_data)
        print(f"Video metadata saved to MongoDB: {video_data}")

    except Exception as e:
        print(f"Error saving or validating clip: {e}")
        if os.path.exists(clip_filename):
            os.remove(clip_filename)
            print(f"Removed incomplete or corrupted clip: {clip_filename}")

def capture_and_transcribe_stream(ip_stream_url, channel_name):
    """
    Captures audio from an IPTV stream and transcribes it while checking for a keyword.
    """
    print("Loading Whisper model...")
    try:
        model = whisper.load_model("base")
    except Exception as e:
        print(f"Error loading Whisper model: {e}")
        return

    ffmpeg_command = [
        "ffmpeg", "-i", ip_stream_url,
        "-f", "s16le", "-ac", "1", "-ar", "16000",
        "-acodec", "pcm_s16le", "-"
    ]

    process = subprocess.Popen(ffmpeg_command, stdout=subprocess.PIPE, stderr=subprocess.DEVNULL, bufsize=10**7)
    audio_buffer = b""

    def process_audio():
        nonlocal audio_buffer
        while True:
            if audio_buffer:
                audio_np = np.frombuffer(audio_buffer, np.int16).astype(np.float32) / 32768.0
                if audio_np.size > 0:
                    text, _ = transcribe_audio(model, audio_np)
                    with lock:
                        live_transcriptions.append(text)
                    print(f"Transcription: {text}")

                    detected_keywords = detect_keywords_in_text(text)
                    if detected_keywords:
                        for lang, keyword in detected_keywords:
                            print(f"Keyword '{keyword}' detected in language '{lang}'!")
                            save_clip(channel_name, keyword, ip_stream_url)

                audio_buffer = b""

    transcription_thread = Thread(target=process_audio, daemon=True)
    transcription_thread.start()

    try:
        while True:
            audio_chunk = process.stdout.read(CHUNK_SIZE)
            if not audio_chunk:
                break
            audio_buffer += audio_chunk

    except KeyboardInterrupt:
        print("Stopping transcription...")
    finally:
        process.terminate()
        transcription_thread.join()

def start_consumer():
    """
    Start a RabbitMQ consumer to process transcription tasks.
    """
    global connection, channel

    try:
        connection = pika.BlockingConnection(pika.ConnectionParameters('localhost'))
        channel = connection.channel()
        channel.queue_declare(queue='transcription_tasks', durable=True)

        def callback(ch, method, properties, body):
            try:
                message = json.loads(body.decode('utf-8'))
                print(f"Received task: {message}")
                capture_and_transcribe_stream(message['live_url'], message['name'])
                ch.basic_ack(delivery_tag=method.delivery_tag)
            except Exception as e:
                print(f"Error processing message: {e}")

        channel.basic_qos(prefetch_count=1)
        channel.basic_consume(queue='transcription_tasks', on_message_callback=callback)

        print("Waiting for transcription tasks...")
        channel.start_consuming()

    except Exception as e:
        print(f"Error in consumer: {e}")

if __name__ == "__main__":
    print("Starting consumer...")
    Thread(target=monitor_keyword_file, daemon=True).start()
    start_consumer()
