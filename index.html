const express = require("express");
const http = require("http");
const { Server } = require("socket.io");

// Create app and server
const app = express();
const server = http.createServer(app);
const io = new Server(server);

// Serve static files
app.use(express.static("public"));

// Handle socket connection
io.on("connection", (socket) => {
    console.log("A user connected");

    // Broadcast messages to everyone
    socket.on("chat message", (msg) => {
        io.emit("chat message", msg);
    });

    // Handle disconnection
    socket.on("disconnect", () => {
        console.log("A user disconnected");
    });
});

// Start server
const PORT = 3000;
server.listen(PORT, () => {
    console.log(`Server is running on http://localhost:${PORT}`);
});
