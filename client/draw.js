const canvas = document.getElementById("whiteboard");
const ctx = canvas.getContext("2d");

const canvasOffsetX = canvas.offsetLeft - 20;
const canvasOffsetY = canvas.offsetTop - 20;

canvas.width = window.innerWidth - canvasOffsetX;
canvas.height = window.innerHeight - canvasOffsetY;

let isDrawing = false;
let lineWidth = 5;
let startX;
let startY;

const draw = (e) => {
  if (!isDrawing) return;

  ctx.lineWidth = lineWidth;
  ctx.lineCap = "round";

  ctx.lineTo(
    e.clientX - canvasOffsetX + (e.clientX - canvas.width / 2) * 0.04,
    e.clientY - canvasOffsetY + (e.clientY - canvas.height / 2) * 0.05
  );
  ctx.stroke();
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
});

canvas.addEventListener("mousemove", draw);
