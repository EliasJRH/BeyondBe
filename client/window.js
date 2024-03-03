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
  .getElementById("save_whiteboard_btn")
  .addEventListener("click", function () {
    const canvas = document.getElementById("whiteboard");
    const dataURL = canvas.toDataURL("image/png");
    const link = document.createElement("a");
    // Set the href attribute to the data URL
    link.href = dataURL;
    // Set the download attribute to specify the filename
    link.download = "canvas_image.png";
    // Append the link to the document
    document.body.appendChild(link);
    // Trigger a click on the link to start the download
    link.click();
    // Remove the link from the document
    document.body.removeChild(link);
  });

document
  .getElementById("save_notepad_btn")
  .addEventListener("click", function () {
    const textareaContent = document.getElementById("notepad_text").value;
    // Convert the textarea content to a Blob
    const blob = new Blob([textareaContent], { type: "text/markdown" });
    // Create a link element
    const link = document.createElement("a");
    // Set the href attribute to the Blob URL
    link.href = window.URL.createObjectURL(blob);
    // Set the download attribute to specify the filename
    link.download = "textarea_content.md";
    // Append the link to the document
    document.body.appendChild(link);
    // Trigger a click on the link to start the download
    link.click();
    // Remove the link from the document
    document.body.removeChild(link);
  });

document
  .getElementById("notepad_text")
  .addEventListener("input", function (event) {
    if (event.target.value === "") {
      return;
    }
    const message = solaceFactory.createMessage();
    message.setDestination(
      solaceFactory.createTopicDestination(`Room/${roomNo}/text`),
    );
    message.setBinaryAttachment(event.target.value);
    message.setDeliveryMode(solace.MessageDeliveryModeType.DIRECT);
    session.send(message);
  });
