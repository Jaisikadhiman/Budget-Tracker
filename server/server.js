const express = require("express");
require("dotenv").config();
require("./config/dbConnect");
const usersRoute = require("./routes/users/usersRoute");
const accountsRoute = require("./routes/accounts/accountsRoute");
const transactionsRoute = require("./routes/transactions/transactionsRoute");
const globalErrHandler = require("./middlewares/globalErrHandler");
const cors = require("cors");

const app = express();
const BASE_URL = process.env.BASE_URL;

//---------------------------------------
// MIDDLEWARES
//---------------------------------------

app.use(express.json()); //parse incoming data

app.use(
    cors({
      origin: ["https://budget-tracker-plum-theta.vercel.app", "*"], // Update with your Vercel frontend URL
      methods: "GET,POST,PUT,DELETE",
      credentials: true, // Allow cookies if needed
    })
  );
  

//---------------------------------------
// ROUTES
//---------------------------------------

//---  Users route  ---
// app.use(path, Route)

app.get("/", (req, res) => {
    res.send("Budget Tracker API is running successfully!");
  });
  
app.use("/api/v1/users", usersRoute);

//---  Accounts route ---
app.use("/api/v1/accounts", accountsRoute);

//---  Transaction Route  ---
app.use("/api/v1/transactions", transactionsRoute);

//---------------------------------------
// ERROR HANDLERS
//---------------------------------------

app.use(globalErrHandler);

//---------------------------------------
// LISTEN TO SERVER
//---------------------------------------

const PORT = process.env.PORT || 9000;

app.listen(PORT, console.log(`Server is up and running on port ${PORT}`));
