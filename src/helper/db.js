import mongoose from "mongoose";
export const connectDb = async () => {
  try {
    const { connection } = await mongoose.connect(process.env.URI, {
      dbName: "work_manager",
    });
    console.log("successfully connected  database");


    // console.log("connected with host",connection.host);
  } catch (error) {
    console.log("failed to connect db");
    console.log(error.message,"this error occure in while creating user");
  }
};
  