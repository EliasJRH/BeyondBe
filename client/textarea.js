const notepad = document.getElementById("notepad");

notepad.style.width = canvas.width;
notepad.style.height = canvas.height;

socket.on("text update", function (data) {
  document.getElementById("notepad_text").value = data;
  document.getElementById("markdown_output").innerHTML = marked.parse(data);
});
