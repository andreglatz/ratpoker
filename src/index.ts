import { authMessages } from "./auth/messages";

const URL = "wss://s-usc1b-nss-2133.firebaseio.com/.ws?v=5&ns=planningpoker-8dc40";
const socket = new WebSocket(URL);

// socket opened
socket.addEventListener("open", (event) => {
  authMessages.forEach((message) => socket.send(JSON.stringify(message)));
});

// message is received
socket.addEventListener("message", (event) => {
  const data = JSON.parse(event.data.toString());

  const isEstimation = event.data.toString().includes("estimation");
  const isHidden = event.data.toString().includes('"showEstimations":false');
  const isPermissionDenied = event.data.toString().includes("permission_denied");

  if (isEstimation) {
    const key = Object.keys(data.d.b.d)[0];
    console.log(`${data.d.b.d[key].estimation}: ${data.d.b.d[key].userName}`);
  }

  if (isHidden) {
    console.log("-----------------------------");
  }

  if (isPermissionDenied) {
    console.log("Permission denied");
  }
});
