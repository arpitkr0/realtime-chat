const express = require("express");
const http = require("http");
const socketio = require("socket.io");

const app = express();
const server = http.createServer(app);
const io = socketio(server);
const PORT = 3000;

app.use(express.static("public"));

io.on("connection", (socket) => {
  console.log("new ws connection");
});

server.listen(PORT, () => console.log("Server started at port 3000"));
