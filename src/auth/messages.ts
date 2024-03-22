export const authMessages = [
  {
    t: "d",
    d: {
      r: 2,
      a: "auth",
      b: {
        cred: process.env.TOKEN,
      },
    },
  },
  { t: "d", d: { r: 3, a: "q", b: { p: `/sessions/${process.env.SESSION_ID}/users`, h: "" } } },
  { t: "d", d: { r: 4, a: "q", b: { p: `/sessions/${process.env.SESSION_ID}/sessionState`, h: "" } } },
];
