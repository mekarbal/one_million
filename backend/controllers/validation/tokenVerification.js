const jwt = require("jsonwebtoken");

module.exports = function (req, res, next) {
  const token = req.header("auth-token");

  if (!token) {
    res.status(401).send("Access Denied");
  }

  try {
    const verfied = jwt.verify(token, "TokenKey");
    req.admin = verfied;
    next();
  } catch (error) {
    res.send(400).send("Invalid token");
  }
};
