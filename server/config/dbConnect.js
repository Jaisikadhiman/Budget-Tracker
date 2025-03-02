require("dotenv").config();
const mongoose = require("mongoose");

//CONNECT
const dbConnect = async () => {
  try {
    const URI = `${process.env.MONGO_URI}`;
    await mongoose.connect(URI);
    console.log("DB Connected Successfully...");
  } catch (error) {
    console.log(error.message);
    //exit the server
    process.exit(1);
  }
};

dbConnect();
