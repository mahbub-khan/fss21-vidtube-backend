import dotenv from "dotenv";
import { app } from "./app.js";
import connectDB from "./db/index.js";

dotenv.config({
  path: "./.env",
});

const PORT = process.env.PORT || 5000;

connectDB()
  .then(() => {
    app.listen(PORT, () => {
      console.log(`\nServer is running on port: ${PORT}`);
    });
  })
  .catch((error) => {
    console.log("MongoDB Connection error in src: ", error);
  });
