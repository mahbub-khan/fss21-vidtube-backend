import mongoose from "mongoose";
import { DB_NAME } from "../constants.js";

const connectDB = async () => {
  //console.log(`${process.env.MONGODB_URI}/${DB_NAME}`);
  try {
    const connectionInstance = await mongoose.connect(
      `${process.env.MONGODB_URI}/${DB_NAME}`
    );
    console.log(
      `\nMongoDB connected! DB host: ${connectionInstance.connection.host}`
    );
  } catch (error) {
    console.log("MongoDB Connection error in db: ", error);
    process.exit(1);
  }
};

export default connectDB;
