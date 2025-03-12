from flask import Flask, request, jsonify, send_from_directory
from flask_cors import CORS
import json
import os
from flask_pymongo import PyMongo
from threading import Lock
import time

app = Flask(__name__)
lock = Lock()
CORS(app)  # Enable CORS for all routes

# Constants
KEYWORD_FILE = "keyword.json"
KEYWORD = ""  # Default keyword

# MongoDB configuration
app.config["MONGO_URI"] = "mongodb://localhost:27017/video_clips"
mongo = PyMongo(app)

def save_keywords_to_file(keywords):
    """
    Save the keywords to the JSON file.
    """
    with lock:
        with open(KEYWORD_FILE, "w") as file:
            json.dump({"keywords": keywords}, file)
            file.flush()  # Ensure data is written to disk immediately
            os.fsync(file.fileno())  # Optional: Ensure file system sync
        print(f"Keywords saved to file: {keywords}")


def load_keywords_from_file():
    """
    Load the keywords for multiple languages from the JSON file.
    """
    global KEYWORDS
    try:
        with lock:
            with open(KEYWORD_FILE, "r") as file:
                data = json.load(file)
                KEYWORDS = data.get("keywords", {})
                print(f"Keywords loaded from file: {KEYWORDS}")
    except FileNotFoundError:
        print("Keyword file not found. Using default keywords.")
    except Exception as e:
        print(f"Error reading keyword file: {e}")


def save_keywords_to_file(keywords):
    """
    Save the keywords to the JSON file.
    """
    with lock:
        with open(KEYWORD_FILE, "w") as file:
            json.dump({"keywords": keywords}, file, indent=4)
            print(f"Keywords saved to file: {keywords}")

@app.route("/set_keyword", methods=["POST"])
def set_keyword():
    """
    Set the keywords for multiple languages from the React frontend.
    """
    global KEYWORDS
    try:
        data = request.get_json()
        if not data:
            return jsonify({"error": "Request body must be JSON"}), 400
        
        keywords = data.get("keywords", {})
        if isinstance(keywords, dict):
            with lock:
                KEYWORDS = keywords
                save_keywords_to_file(KEYWORDS)
            return jsonify({"message": "Keywords updated successfully", "keywords": KEYWORDS}), 200

        return jsonify({"error": "Invalid keywords provided. Expected a dictionary."}), 400
    except Exception as e:
        return jsonify({"error": f"An error occurred: {str(e)}"}), 500
    

    
@app.route("/collect_data", methods=["GET"])
def collect_data():
    """
    Collect data from MongoDB based on the keyword.
    """
    try:
        global KEYWORD
        data = mongo.db.clips.find({"status": "valid", "name": {"$regex": KEYWORD, "$options": "i"}})
        data_list = []
        for item in data:
            item['_id'] = str(item['_id'])
            data_list.append(item)
        if data_list:
            return jsonify(data_list), 200
        else:
            return jsonify({"error": "No valid data found matching the keyword"}), 404
    except Exception as e:
        return jsonify({"error": str(e)}), 500
    
    
@app.route('/clips/<path:filename>')
def serve_clip(filename):
    return send_from_directory('C:/Users/ahlem/OneDrive/Bureau/iptvWeb/final/Valex-JS/src/assets/local/clips', filename)

if __name__ == "__main__":
    app.run(host='0.0.0.0', port=5000)
