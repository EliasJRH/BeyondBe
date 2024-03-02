const express = require('express');
const http = require('http');
const socketIO = require('socket.io');
const morgan = require('morgan');

const app = express();
const server = http.createServer(app);
const io = socketIO(server);

// Define your routes and middleware here
app.use(express.static(__dirname + '/client'));
app.use(morgan(':method :url :status :response-time ms - :res[content-length]'));

app.get('/', (req, res) => {
  res.sendFile(__dirname + '/client' + '/draw.html');
});

// app.get('/about', (req, res) => {
//   res.send('About page');
// });

// app.get('/contact', (req, res) => {
//   res.send('Contact page');
// });

// Socket.io logic goes here
io.on("connection", function (socket) {
  console.log(`A user connected ${socket.id}`);

  socket.on("disconnect", function () {
    console.log(`A user disconnected ${socket.id}`);
  });

  socket.on("chat message", function (msg) {
    console.log("message: " + msg);
    io.emit("chat message", msg);
  });

  socket.on("test", function(msg) {
    console.log(`received test message from ${socket.id}`)
  })
})

const port = process.env.PORT || 3000;

server.listen(port, () => {
  console.log(`Server is running on port ${port}`);
  console.log(`http://localhost:${port}`)
});