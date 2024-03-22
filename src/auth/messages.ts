import { settings } from "../settings/settings";

export const authMessages = [
  { t: "d", d: { r: 2, a: "auth", b: { cred: settings.token } } },
  { t: "d", d: { r: 3, a: "q", b: { p: `/sessions/${settings.sessionId}/users`, h: "" } } },
  { t: "d", d: { r: 4, a: "q", b: { p: `/sessions/${settings.sessionId}/sessionState`, h: "" } } },
];
