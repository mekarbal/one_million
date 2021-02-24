const express = require("express");
require("dotenv").config();
const adminRouter = require("./routes/admin.js");
const participantRouter = require("./routes/participant");
const groupMember = require("./routes/groupMember");
const questionRouter = require("./routes/question");
const questionTokenRouter = require("./routes/questionToken");
const app = express();
app.use(express.json());
const db = require("./config/config");

db.on("error", (err) => console.log(err));
db.once("open", () => console.log("connected to ddatabase"));

app.use("/admin", adminRouter);
app.use("/participant", participantRouter);
app.use("/group", groupMember);
app.use("/quest", questionRouter);
app.use("/qtoken", questionTokenRouter);
app.listen(process.env.PORT, () =>
  console.log("connected to server 5000 " + process.env.PORT)
);

module.exports = app;
