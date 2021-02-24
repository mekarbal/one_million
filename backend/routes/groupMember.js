const express = require("express");
const router = express.Router();

const {
  getAllGroups,
  addGroup,
  joinGroup,
  getGroupByCode,
} = require("../controllers/groupMembersController");

router.get("/", getAllGroups);

router.post("/", addGroup);

router.post("/join", joinGroup);

router.get("/final", getGroupByCode);

module.exports = router;
