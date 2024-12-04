const socket = io();

// Handle form submission
const form = document.getElementById("message-form");
const input = document.getElementById("message-input");
const messages = document.getElementById("messages");

form.addEventListener("submit", (e) => {
    e.preventDefault();

    if (input.value) {
        socket.emit("chat message", input.value); // Send message to server
        input.value = ""; // Clear input field
    }
});

// Display incoming messages
socket.on("chat message", (msg) => {
    const item = document.createElement("li");
    item.textContent = msg;
    messages.appendChild(item);
    messages.scrollTop = messages.scrollHeight; // Scroll to the bottom
});
