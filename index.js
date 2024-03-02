const express = require("express");
const http = require("http");
const socketIO = require("socket.io");
const morgan = require("morgan");
const { auth } = require("express-openid-connect");

const app = express();
const server = http.createServer(app);
const io = socketIO(server);

// Auth0 Configuration
const config = {
  authRequired: false,
  auth0Logout: true,
  secret: 'rFgRn0v9KQIRpj9a6v4Urfnc7jjA6PcJRr7LVyzFHRBLhlM8m7fN7MlomoTopt3B',
  baseURL: 'http://localhost:3000',
  clientID: '5eqCZzqXygj0QD8gHf3HcQfq33KQpyfM',
  issuerBaseURL: 'https://dev-628rmf4fk1o6ahth.us.auth0.com'
};

// Auth router attaches /login, /logout, and /callback routes to the baseURL
app.use(auth(config));

// Define your routes and middleware here
app.use(express.static(__dirname + "/client"));
app.use(
  morgan(":method :url :status :response-time ms - :res[content-length]"),
);

// app.get("/", (req, res) => {
//   res.sendFile(__dirname + "/client" + "/draw.html");
// });

app.get("/room/:roomNo", (req, res) => {
  res.sendFile(__dirname + "/client" + "/draw.html");
})

app.get('/login', (req, res) => {
  res.oidc.login({ returnTo: '/login' });
});

// Socket.io logic goes here
io.on("connection", function (socket) {
  console.log(`A user connected ${socket.id}`);

  socket.on("disconnect", function () {
    console.log(`A user disconnected ${socket.id}`);
  });

  // socket.on("chat message", function (msg) {
  //   console.log("message: " + msg);
  //   io.emit("chat message", msg);
  // });

  // socket.on("test", function (msg) {
  //   console.log(`received test message from ${socket.id}`);
  // });

  socket.on("draw", function (data) {
    // console.log(data);
    io.emit("draw update", data);
  });

  socket.on("draw finish", function () {
    io.emit("draw finish");
  });

  socket.on("text", function (data) {
    io.emit("text update", data);
  });
});

const port = process.env.PORT || 3000;

server.listen(port, () => {
  console.log(`Server is running on port ${port}`);
  console.log(`http://localhost:${port}`);
});