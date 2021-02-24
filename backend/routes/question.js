const router = require("express").Router();
const {
  questionAdd,
  getAllQuestions,
  getRandomQuestion,
} = require("../controllers/questionController");

router.get("/", getAllQuestions);

router.get("/random", getRandomQuestion);

router.post("/", questionAdd);

module.exports = router;
