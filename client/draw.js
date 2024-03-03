const canvas = document.getElementById("whiteboard");
// const toolbar = document.getElementById("toolbar");
const ctx = canvas.getContext("2d");

const canvasOffsetX = canvas.offsetLeft;
const canvasOffsetY = canvas.offsetTop;

canvas.width = window.innerWidth - canvasOffsetX;
canvas.height = window.innerHeight - canvasOffsetY;

let isDrawing = false;
let lineWidth = 5;
let startX;
let startY;

// socket.on("draw update", function (data) {
//   let coords = JSON.parse(data);

//   ctx.lineWidth = lineWidth;
//   ctx.lineCap = "round";

//   ctx.lineTo(coords.x, coords.y);
//   ctx.stroke();
// });

session.on(solace.SessionEventCode.MESSAGE, function (message) {
  if (message.getDestination().getName().split("/")[2] == "draw") {
    let coords = JSON.parse(message.getBinaryAttachment());
    ctx.lineWidth = lineWidth;
    ctx.lineCap = "round";

    ctx.lineTo(coords.x, coords.y);
    ctx.stroke();
  } else if (message.getDestination().getName().split("/")[2] == "drawfinish") {
    ctx.stroke();
    ctx.beginPath();
  }
});

// socket.on("draw finish", function () {
//   ctx.stroke();
//   ctx.beginPath();
// });

const draw = (e) => {
  if (!isDrawing) {
    return;
  }

  // ctx.lineWidth = lineWidth;
  // ctx.lineCap = "round";

  // ctx.lineTo(e.clientX - canvasOffsetX, e.clientY);
  // ctx.stroke();

  let coords = { x: e.clientX - canvasOffsetX, y: e.clientY };

  // socket.emit("draw", JSON.stringify(coords));
  const message = solaceFactory.createMessage();
  message.setDestination(
    solaceFactory.createTopicDestination(`Room/${roomNo}/draw`)
  );
  message.setBinaryAttachment(JSON.stringify(coords));
  message.setDeliveryMode(solace.MessageDeliveryModeType.DIRECT);
  session.send(message);
};

canvas.addEventListener("mousedown", (e) => {
  isDrawing = true;
  startX = e.clientX;
  startY = e.clientY;
});

canvas.addEventListener("mouseup", (e) => {
  isDrawing = false;
  // ctx.stroke();
  // ctx.beginPath();

  // socket.emit("draw finish");
  const message = solaceFactory.createMessage();
  message.setDestination(
    solaceFactory.createTopicDestination(`Room/${roomNo}/drawfinish`)
  );
  message.setBinaryAttachment("finish");
  message.setDeliveryMode(solace.MessageDeliveryModeType.DIRECT);
  session.send(message);
});

canvas.addEventListener("mousemove", draw);
