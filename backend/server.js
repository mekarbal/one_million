const express = require("express");
require("dotenv").config({ path: "./config/config.env" });
const app = express();

app.listen(process.env.PORT, () => console.log("connected to server"));
