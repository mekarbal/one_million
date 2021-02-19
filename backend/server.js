const express = require("express");
require("dotenv").config();
const mongoose = require("mongoose");
const app = express();

const db =require("./config/config");
db.on("error", (err) => console.log(err));
db.once("open", () => console.log("connected to ddatabase"));
const adminRouter = require("./routes/admin");

app.use("/admin", adminRouter);

app.listen(process.env.PORT, () => console.log("connected to server 5000"));
