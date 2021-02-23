const QuestionToken = require("../models/question_token");
const Round = require("../models/round");
const Group = require("../models/group_members");
const Question = require("../models/question");
const Participant = require("../models/participant");

exports.addQuestionToken = async (req, res) => {
  var id_question = req.body.id_question;
  var id_participant = req.body.id_participant;
  var participant_answer = req.body.participant_answer;

  console.log(id_participant);

  const questionExist = await Round.findOne({
    id_question: id_question,
    is_answered: true,
  });
  if (questionExist) return res.status(400).send("Too late");

  const group_members = await Group.findOne({ id_participant: id_participant });
  const grp_code = group_members.group_code;
  const question = await Question.findById(id_question);
  const participant = await Participant.findById(id_participant);
  const roundsCount = await getRoundsCount(grp_code);

  if (roundsCount == 2) {
    await Round.updateMany({ $set: { is_answered: false } });
    res.send("Game over");
  } else {
    if (question.answer == participant_answer) {
      participant.score = participant.score + question.points;
      await participant.save();
    }

    const questionToken = new QuestionToken({
      id_question: id_question,
      id_participant: id_participant,
      participant_answer: participant_answer,
    });

    try {
      const savedQuestionToken = await questionToken.save();
      const round = new Round({
        id_group_members: group_members._id,
        id_question: id_question,
        id_question_token: savedQuestionToken._id,
        is_answered: true,
      });
      try {
        const savedRound = await round.save();
        res.status(200).json([savedRound, savedQuestionToken]);
      } catch (error) {
        res.status(500).send({ message: error.message });
      }
    } catch (error) {
      res.status(500).send({ message: error.message });
    }
  }
};

exports.getRoundsCount = async (group_code) => {
  var i = 0;
  const rounds = await Round.aggregate([
    {
      $lookup: {
        from: "groupmembers",
        localField: "id_group_members",
        foreignField: "_id",
        as: "group_members",
      },
    },
  ]);

  rounds.map((group) => {
    if (group.group_members[0].group_code == group_code) i++;
  });

  return i;
};
