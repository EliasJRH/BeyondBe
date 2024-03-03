const notepad = document.getElementById("notepad");

notepad.style.width = canvas.width;
notepad.style.height = canvas.height;

// socket.on("text update", function (data) {
//   document.getElementById("notepad_text").value = data;
//   document.getElementById("markdown_output").innerHTML = marked.parse(data);
// });

session.on(solace.SessionEventCode.MESSAGE, function (message) {
  if (message.getDestination().getName().split("/")[2] == "text") {
    document.getElementById("notepad_text").value = message.getBinaryAttachment();
    document.getElementById("markdown_output").innerHTML = marked.parse(message.getBinaryAttachment());
  }
});
