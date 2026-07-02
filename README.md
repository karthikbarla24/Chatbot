# 🤖 AI Chatbot
AI Chatbot is an intelligent web-based application that allows users to ask questions and receive AI-generated responses in real time. It uses Large Language Models (LLMs) through the Groq API to provide fast, accurate, and user-friendly answers.
# 🌐 Live Demo
https://chatbot-1-ksw5.onrender.com/
# ✨ Features
- 🤖 AI-powered chatbot
- 💬 Real-time conversations
- ⚡ Fast responses using Groq API
- 🌍 User-friendly interface
- 📱 Responsive design
- 🔒 Secure API key management using .env
- 🖥️ Works on desktop and mobile devices
# 🛠️ Technologies Used
## Frontend
- HTML5
- CSS3
- JavaScript
## Backend
- Python
- Flask
## AI Integration
- Groq API
- openai/gpt-oss-120b  Model
## Deployment
- Render
# 📂 Project Structure
AI_Chatbot/
│
├── static/
│   ├── style.css
│   └── script.js
│
├── templates/
│   └── index.html
│
├── app.py
├── requirements.txt
├── .gitignore
├── .env
└── README.md
# ⚙️ Installation
### 1. Clone the Repository
```bash
git clone https://github.com/yourusername/AI_Chatbot.git
```
### 2. Open the Project Folder
```bash
cd AI_Chatbot
```
### 3. Install Required Packages
```bash
pip install -r requirements.txt
```
### 4. Create a `.env` File
```env
GROQ_API_KEY=YOUR_GROQ_API_KEY
```
### 5. Run the Application
```bash
python app.py
```
Open your browser:
```
http://127.0.0.1:5000
```
# 🚀 How It Works
1. User enters a message.
2. The frontend sends the message to the Flask backend.
3. Flask receives the request.
4. The backend creates a prompt.
5. The prompt is sent to the Groq API.
6. The Llama 3.3 model generates a response.
7. Flask returns the AI response.
8. The chatbot displays the response instantly.
# 🔮 Future Enhancements
- User Authentication
- Chat History
- Voice Input
- Voice Output
- Dark Mode
- Multiple AI Models
- File Upload Support
- Multi-language Support
# 👩‍💻 Developer
**Neelima Nakka**||
**Karthikeya Barla**
**GitHub:**  
https://github.com/Neelimanakka || 
https://github.com/karthikbarla24
# 📄 License
This project is developed for educational and learning purposes.
