require("dotenv").config();
const express = require("express");
const app = express();
const cors = require("cors");
const database = require("./config/database");
const http = require("http");
const { Server } = require("socket.io");

const PORT = process.env.PORT || 3000;
const chatRoomRoutes = require("./routes/chatRoomRoutes");
const usernameRoutes = require("./routes/usernameRoutes");

database();
app.use(cors());
app.use(express.urlencoded({ extended: false }));
app.use(express.json());

app.get("/", (req, res) => {
  res.status(200).json({ messages: "Connection to API established" });
});

app.use("/username", usernameRoutes);
app.use("/chatroom", chatRoomRoutes);

const server = http.createServer(app);

const io = new Server(server, {
  cors: {
    origin: "*",
    methods: ["GET", "POST"],
  },
});

io.on("connection", (socket) => {
  console.log(socket.id);
  socket.on("send_message", (data) => {
    socket.broadcast.emit("received_message", data);
  });
});

server.listen(PORT, (err) => {
  if (err) return console.log(err);
  return console.log(`Listening at ${process.env.SERVER_HOST}:${PORT}`);
});
