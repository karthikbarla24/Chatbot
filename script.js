const messagesContainer = document.getElementById('chat-messages');
const messageInput = document.getElementById('message-input');

function addMessage(text, sender) {
    const message = document.createElement('div');
    message.classList.add('message', sender);
    message.innerText = text;
    messagesContainer.appendChild(message);
    messagesContainer.scrollTop = messagesContainer.scrollHeight;
    return message;
}

function addTypingIndicator() {
    const typing = document.createElement('div');
    typing.classList.add('message', 'bot', 'typing-container');
    typing.innerHTML = 'MedGuide is thinking<span class="typing">...</span>';
    messagesContainer.appendChild(typing);
    messagesContainer.scrollTop = messagesContainer.scrollHeight;
    return typing;
}

function sendMessage() {
    const text = messageInput.value.trim();
    if (!text) return;

    addMessage(text, 'user');
    messageInput.value = '';

    const typingIndicator = addTypingIndicator();

    fetch("/chat", { 
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ message: text })
    })
    .then(async res => {
        // We wait to read the data FIRST, even if it's an error
        const data = await res.json(); 
        if (!res.ok) {
            // Throw the exact Python error we sent from the backend
            throw new Error(data.error || `Server returned ${res.status}`);
        }
        return data;
    })
    .then(data => {
        typingIndicator.remove();
        if (data.reply) {
            addMessage(data.reply, 'bot');
        } else if (data.error) {
             addMessage("Error from server: " + data.error, 'error');
        }
    })
    .catch(err => {
        typingIndicator.remove();
        // This will now print the exact Python error into the chat bubble!
        addMessage("❌ Server Error: " + err.message, 'error');
        console.error("Fetch error details:", err);
    });
}

messageInput.addEventListener("keypress", (e) => {
    if (e.key === "Enter") sendMessage();
});