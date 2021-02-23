const router = require("express").Router();

const {
  participRegister,
  participLogin,
  participValidation,
  getParticipants,
} = require("../controllers/participantController");
const verify = require("../controllers/validation/tokenVerification");

router.post("/", participRegister);
router.patch("/valid/:id", participValidation);
router.post("/login", participLogin);
router.get("/", getParticipants);
module.exports = router;
