const router = require("express").Router();
const {
  questionAdd,
  getAllQuestions,
  getRandomQuestion,
} = require("../controllers/questionController");
const { getRoundsCount } = require("../controllers/questionTokenController");
router.get("/", getAllQuestions);
router.get("/random", getRandomQuestion);
router.post("/", questionAdd);
router.route("/test").get(getRoundsCount);
module.exports = router;
