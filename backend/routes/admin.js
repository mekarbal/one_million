const express = require("express");
const router = express.Router();
const getAllAdmins = require("../controllers//adminController");
router.get("/", getAllAdmins.getAllAdmins);

module.exports = router;
