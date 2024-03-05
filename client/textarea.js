const notepad = document.getElementById("notepad");
const textarea = document.getElementById("notepad_text");

notepad.style.width = canvas.width;
notepad.style.height = canvas.height;

// socket.on("text update", function (data) {
//   document.getElementById("notepad_text").value = data;
//   document.getElementById("markdown_output").innerHTML = marked.parse(data);
// });

session.on(solace.SessionEventCode.MESSAGE, function (message) {
  if (message.getDestination().getName().split("/")[2] == "text") {
    let cur_pos = textarea.selectionStart;
    document.getElementById("notepad_text").value =
      message.getBinaryAttachment();
    document.getElementById("markdown_output").innerHTML = marked.parse(
      message.getBinaryAttachment(),
    );
    textarea.setSelectionRange(cur_pos, cur_pos);
  }
});
