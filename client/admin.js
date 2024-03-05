const factoryProps = new solace.SolclientFactoryProperties();
factoryProps.profile = solace.SolclientFactoryProfiles.version10;
const solaceFactory = solace.SolclientFactory.init(factoryProps);
solaceFactory.setLogLevel(solace.LogLevel.WARN);

const session = solaceFactory.createSession({
  url: "wss://mr-connection-aw8kuvu82tr.messaging.solace.cloud:443",
  vpnName: "beyondbe-drawdata",
  userName: "solace-cloud-client",
  password: "7lq5dtc8ktvp1qs9vnnikqe50n",
});

try {
  session.connect();
} catch (error) {
  console.log(error);
}

const roomNums = new Set();

session.on(solace.SessionEventCode.UP_NOTICE, function (sessionEvent) {
  try {
    session.subscribe(
      solace.SolclientFactory.createTopic(`Room/>`),
      true,
      `Room`,
      10000,
    );
  } catch (error) {
    console.log(error.toString());
  }
});

session.on(solace.SessionEventCode.MESSAGE, function (message) {
  roomNums.add(message.getDestination().getName().split("/")[1]);
  document.getElementById("rooms_grid").innerHTML = "";
  const sortedRoomNums = Array.from(roomNums).sort();
  sortedRoomNums.forEach((roomNum) => {
    const button = document.createElement("button");
    button.textContent = `Room ${roomNum}`;
    button.addEventListener("click", function () {
      window.open(`room/${roomNum}`, "_blank");
    });
    button.style.width = "100px";
    button.style.height = "30px";
    button.style.cursor = "pointer";
    document.getElementById("rooms_grid").appendChild(button);
  });
});
