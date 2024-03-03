const express = require("express");
const http = require("http");
// const socketIO = require("socket.io");
const morgan = require("morgan");
const { auth } = require("express-openid-connect");
const solace = require("solclientjs");

const app = express();
const server = http.createServer(app);
// const io = socketIO(server);
// const factoryProps = new solace.SolclientFactoryProperties();
// factoryProps.profile = solace.SolclientFactoryProfiles.version10;
// const solaceFactory = solace.SolclientFactory.init(factoryProps);
// solaceFactory.setLogLevel(solace.LogLevel.WARN);

// const session = solace.SolclientFactory.createSession({
//   url: "wss://mr-connection-aw8kuvu82tr.messaging.solace.cloud:443",
//   vpnName: "beyondbe-drawdata",
//   userName: "solace-cloud-client",
//   password: "7lq5dtc8ktvp1qs9vnnikqe50n"
// });
// try {
//   session.connect();
// } catch (error) {
//   console.log(error);
// }

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

// Redirect root URL to /login
app.get("/", (req, res) => {
    res.redirect("/login");
});

app.get("/room/:roomNo", (req, res) => {
    res.sendFile(__dirname + "/client" + "/draw.html");
});

app.get('/login', (req, res) => {
    res.oidc.login({ returnTo: '/room/1' });
});

roomData = {};

// Socket.io logic goes here
// io.on("connection", function (socket) {
//   const socketUrl = socket.handshake.headers.referer;
//   const roomNo = socketUrl.split("/").pop();
//   const roomName = `room${roomNo}`;
//   console.log(`User ${socket.id} connected to room ${roomNo}`);
//   socket.join(roomName);

  if (!roomData[roomName]) {
    roomData[roomName] = {
      users: [],
      drawData: {},
      textData: "",
    };
  } else {  
    for (const user in roomData[roomName].drawData) {
      if (user !== socket.id) {
        roomData[roomName].drawData[user].forEach((data) => {
          if (data !== -1) socket.emit("draw update", data);
          else socket.emit("draw finish");
        });
      }
    }
    socket.emit("text update", roomData[roomName].textData);    
  }
  roomData[roomName].users.push(socket.id);
  roomData[roomName].drawData[socket.id] = [];

  socket.on("disconnect", function () {
    console.log(`A user disconnected ${socket.id}`);
  });

  // Draw Stroke
  socket.on("draw", function (data) {
    roomData[roomName].drawData[socket.id].push(data);
    io.to(roomName).emit("draw update", data);
  });

  // Finished Stroke
  socket.on("draw finish", function () {
    roomData[roomName].drawData[socket.id].push(-1);
    io.to(roomName).emit("draw finish");
  });

  // Text
  socket.on("text", function (data) {
    roomData[roomName].textData = data;
    io.to(roomName).emit("text update", data);
  });
});

const port = process.env.PORT || 3000;

server.listen(port, () => {
    console.log(`Server is running on port ${port}`);
    console.log(`http://localhost:${port}`);
});
