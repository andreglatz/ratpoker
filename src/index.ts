import { authMessages } from "./auth/messages";
import { settings } from "./settings/settings";

const socket = new WebSocket(settings.baseUrl);

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
    const userName = data.d.b.d[key].userName;
    const estimation = data.d.b.d[key].estimation;

    console.log(`${userName}: ${estimation}`);
  }

  if (isHidden) {
    console.log("-----------------------------");
  }

  if (isPermissionDenied) {
    console.log("Permission denied");
  }
});
