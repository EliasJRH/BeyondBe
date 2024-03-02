document.addEventListener("DOMContentLoaded", function () {
  // document
  //   .getElementById("register_btn")
  //   .addEventListener("click", registerUser);

  // document
  //   .getElementById("send_msg_btn")
  //   .addEventListener("click", sendMessage);

  // document.getElementById("clear_btn").addEventListener("click", clearTextArea);
  // document.addEventListener("keydown", handleKeyDown);
  document.getElementById("test").addEventListener("click", sendTest);
});

document
  .getElementById("whiteboard_btn")
  .addEventListener("click", function () {
    document.getElementById("whiteboard").style.display = "block";
    document.getElementById("notepad").style.display = "none";
  });

document.getElementById("notepad_btn").addEventListener("click", function () {
  document.getElementById("whiteboard").style.display = "none";
  document.getElementById("notepad").style.display = "flex";
});

document
  .getElementById("notepad_text")
  .addEventListener("input", function (event) {
    console.log(event.target.value);
    document.getElementById("markdown_output").innerHTML = marked.parse(
      event.target.value,
    );
    socket.emit("text", event.target.value);
  });
