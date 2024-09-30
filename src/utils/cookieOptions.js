export const cookieOptions = {
  httpOnly: true, //make cookie accessible only by the web server not by the user/client
  secure: process.env.NODE_ENV === "production", //true only when in production environment.
};
