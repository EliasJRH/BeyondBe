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

const draw = (e) => {
  if (!isDrawing) {
    return;
  }

  if (e.targetTouches && e.targetTouches[0].force == 0){
    return;
  }

  console.log(e)

  let coords = {
    x: (e.clientX || e.touches[0].clientX) - canvasOffsetX,
    y: e.clientY || e.touches[0].clientY,
  };

  const message = solaceFactory.createMessage();
  message.setDestination(
    solaceFactory.createTopicDestination(`Room/${roomNo}/draw`),
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

canvas.addEventListener("mousemove", draw);

canvas.addEventListener("mouseup", (e) => {
  isDrawing = false;
  const message = solaceFactory.createMessage();
  message.setDestination(
    solaceFactory.createTopicDestination(`Room/${roomNo}/drawfinish`),
  );
  message.setBinaryAttachment("finish");
  message.setDeliveryMode(solace.MessageDeliveryModeType.DIRECT);
  session.send(message);
});

canvas.addEventListener("touchstart", (e) => {
  isDrawing = true;
  startX = e.clientX;
  startY = e.clientY;
});

canvas.addEventListener("touchmove", draw);

canvas.addEventListener("touchend", (e) => {
  isDrawing = false;
  const message = solaceFactory.createMessage();
  message.setDestination(
    solaceFactory.createTopicDestination(`Room/${roomNo}/drawfinish`),
  );
  message.setBinaryAttachment("finish");
  message.setDeliveryMode(solace.MessageDeliveryModeType.DIRECT);
  session.send(message);
});
