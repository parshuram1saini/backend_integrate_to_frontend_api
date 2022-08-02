import mongoose from "mongoose";

const connectDb = async (DATABASE_URL) => {
  try {
    const DB_OPTION = {
      dbName: "employeedata",
    };
    await mongoose.connect(DATABASE_URL,DB_OPTION);
    console.log("connection successfully with mongodb");
  } catch (error) {
    console.log(error.message);
  }
};
export default connectDb;
