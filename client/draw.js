const canvas = document.getElementById("drawing-board");
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

// toolbar.addEventListener("click", (e) => {
//   if (e.target.id === "clear") {
//     ctx.clearRect(0, 0, canvas.width, canvas.height);
//   }
// });

// toolbar.addEventListener("change", (e) => {
//   if (e.target.id === "stroke") {
//     ctx.strokeStyle = e.target.value;
//   }

//   if (e.target.id === "lineWidth") {
//     lineWidth = e.target.value;
//   }
// });

socket.on("draw update", function (data) {
  let coords = JSON.parse(data);

  ctx.lineWidth = lineWidth;
  ctx.lineCap = "round";

  ctx.lineTo(coords.x, coords.y);
  ctx.stroke();
});

socket.on("draw finish", function () {
  ctx.stroke();
  ctx.beginPath();
});

const draw = (e) => {
  if (!isDrawing) {
    return;
  }

  ctx.lineWidth = lineWidth;
  ctx.lineCap = "round";

  ctx.lineTo(e.clientX - canvasOffsetX, e.clientY);
  ctx.stroke();

  let coords = { x: e.clientX - canvasOffsetX, y: e.clientY };

  socket.emit("draw", JSON.stringify(coords));
};

canvas.addEventListener("mousedown", (e) => {
  isDrawing = true;
  startX = e.clientX;
  startY = e.clientY;
});

canvas.addEventListener("mouseup", (e) => {
  isDrawing = false;
  ctx.stroke();
  ctx.beginPath();

  socket.emit("draw finish");
});

canvas.addEventListener("mousemove", draw);
