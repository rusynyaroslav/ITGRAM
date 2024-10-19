const jwt = require("jsonwebtoken");
const { JWT_SECRET } = require("../config");
const UserModel = require("../models/user_model");

module.exports = (req, res, next) => {
  const { authorization } = req.headers;
  if (!authorization) {
    return res.status(401).json({ error: "Користувач не увійшов" });
  }
  const token = authorization.replace("Bearer ", "");
  jwt.verify(token, JWT_SECRET, (error, payload) => {
    if (error) {
      return res.status(401).json({ error: "Користувач не увійшов" });
    }
    const { _id } = payload;
    UserModel.findById(_id)
      .then((dbUser) => {
        req.dbUser = dbUser;
        next(); // викликаємо наступний middleware після успішної верифікації
      })
      .catch((error) => {
        return res.status(500).json({ error: "Серверна помилка" });
      });
  });
};
