document.addEventListener("DOMContentLoaded", function () {
  // document
  //   .getElementById("register_btn")
  //   .addEventListener("click", registerUser);
  // document
  //   .getElementById("send_msg_btn")
  //   .addEventListener("click", sendMessage);
  // document.getElementById("clear_btn").addEventListener("click", clearTextArea);
  // document.addEventListener("keydown", handleKeyDown);
  // document.getElementById("test").addEventListener("click", sendTest);
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
    if (event.target.value === "") {
      return;
    }
    const message = solaceFactory.createMessage();
    message.setDestination(
      solaceFactory.createTopicDestination(`Room/${roomNo}/text`)
    );
    message.setBinaryAttachment(event.target.value);
    message.setDeliveryMode(solace.MessageDeliveryModeType.DIRECT);
    session.send(message);
  });
