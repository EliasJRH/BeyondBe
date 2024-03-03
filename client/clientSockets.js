const roomNo = window.location.href.split("/").pop();

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

session.on(solace.SessionEventCode.UP_NOTICE, function (sessionEvent) {
  try {
    session.subscribe(
      solace.SolclientFactory.createTopic(`Room/${roomNo}/draw`),
      true,
      `Room/${roomNo}/draw`,
      10000,
    );
  } catch (error) {
    console.log(error.toString());
  }

  try {
    session.subscribe(
      solace.SolclientFactory.createTopic(`Room/${roomNo}/drawfinish`),
      true,
      `Room/${roomNo}/drawfinish`,
      10000,
    );
  } catch (error) {
    console.log(error.toString());
  }

  try {
    session.subscribe(
      solace.SolclientFactory.createTopic(`Room/${roomNo}/text`),
      true,
      `Room/${roomNo}/text`,
      10000,
    );
  } catch (error) {
    console.log(error.toString());
  }
});
