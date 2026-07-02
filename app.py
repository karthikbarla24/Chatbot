import os
from flask import Flask, request, jsonify
from flask_cors import CORS
from dotenv import load_dotenv
from groq import Groq  

# Load environment variables
load_dotenv()

app = Flask(__name__, static_folder="static")

# Robust CORS configuration
CORS(app, resources={r"/chat": {"origins": "*"}})

# Ensure GROQ_API_KEY is set
api_key = os.getenv("GROQ_API_KEY")
if not api_key:
    raise RuntimeError("❌ GROQ_API_KEY environment variable is not set!")

# Initialize Groq client
client = Groq(api_key=api_key)

@app.route("/")
def home():
    return app.send_static_file("index.html")

@app.route("/chat", methods=["POST"])
def chat():
    try:
        data = request.get_json()
        if not data or "message" not in data:
            return jsonify({"error": "Message missing"}), 400

        user_message = data["message"].strip()

        # Groq chat completion
        chat_completion = client.chat.completions.create(
            messages=[
                {
                    "role": "system",
                    "content": "You are Karthi's MedGuide, a helpful medical assistant. Keep your answers clear and professional."
                },
                {
                    "role": "user",
                    "content": user_message
                }
            ],
            model="openai/gpt-oss-120b"  # Updated supported model
        )

        # Extract reply
        reply = chat_completion.choices[0].message.content.strip()
        return jsonify({"reply": reply})

    except Exception as e:
        return jsonify({"error": str(e)}), 500

if __name__ == "__main__":
    port = int(os.environ.get("PORT", 5000))
    # Added debug=True so the server auto-restarts when you save this file
    app.run(host="0.0.0.0", port=port, debug=True)
