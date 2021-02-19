const mongoose = require("mongoose");

mongoose.connect("mongodb://localhost/onemillion", { useNewUrlParser: true });
const db = mongoose.connection;
module.exports = db;
