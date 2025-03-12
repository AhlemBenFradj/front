import json
import pika

def clear_queue(queue_name, channel):
    """
    Clears all messages from the specified RabbitMQ queue.
    """
    try:
        # Purge the queue to remove all messages
        channel.queue_purge(queue=queue_name)
        print(f"Queue '{queue_name}' has been cleared.")
    except Exception as e:
        print(f"Error clearing queue '{queue_name}': {e}")

def send_json_objects_to_queue(json_file_path):
    """
    Reads a JSON file, clears the RabbitMQ queue, and sends its objects to the queue.
    """
    # Load the JSON file
    try:
        with open(json_file_path, 'r') as json_file:
            json_data = json.load(json_file)
    except Exception as e:
        print(f"Error loading JSON file: {e}")
        return

    # Connect to RabbitMQ
    try:
        connection = pika.BlockingConnection(pika.ConnectionParameters('localhost'))
        channel = connection.channel()
        
        # Declare a queue
        queue_name = 'transcription_tasks'
        channel.queue_declare(queue=queue_name, durable=True)
        
        # Clear the queue before adding new data
        clear_queue(queue_name, channel)
        
        # Send each JSON object as a message
        if isinstance(json_data, list):
            for item in json_data:
                message = json.dumps(item)  # Convert JSON object to string
                channel.basic_publish(
                    exchange='',
                    routing_key=queue_name,
                    body=message,
                    properties=pika.BasicProperties(delivery_mode=2)  # Make messages persistent
                )
                print(f"Sent JSON object: {message}")
        else:
            print("JSON file does not contain a list of objects.")
        
        # Close the connection
        connection.close()
        print("All messages have been sent.")
    except Exception as e:
        print(f"Error interacting with RabbitMQ: {e}")

# Specify the path to your JSON file
json_file_path = 'iptv_streams.json'

# Push JSON objects to RabbitMQ
send_json_objects_to_queue(json_file_path)
