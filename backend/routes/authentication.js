const express = require('express');
const router = express.Router();
const mongoose = require('mongoose');
const UserModel = mongoose.model('UserModel');
const bcrypt = require('bcryptjs');
const jwt = require('jsonwebtoken');
const { JWT_SECRET } = require('../config');

const protectedRoute = require('../middleware/protectedResource');
const protectedResource = require('../middleware/protectedResource');

router.get('/', (req, res) => {
  res.send('Привіт!');
});

router.get('/secured', protectedResource, (req, res) => {
  res.send('Привіт! Secured area');
});

router.post('/login', (req, res) => {
  const { email, password } = req.body;
  if (!email || !password) {
    return res
      .status(400)
      .json({ error: 'Одне або декілька з полів є порожнім' });
  }
  UserModel.findOne({ email: email })
    .then(dbUser => {
      if (!dbUser) {
        // Користувача не знайдено
        return res.status(400).json({ error: 'Користувача не існує' });
      }
      bcrypt.compare(password, dbUser.password).then(didMatch => {
        if (didMatch) {
          //res.status(200).json({ error: "Користувач увійшов" });
          // create and send a token
          const jwtToken = jwt.sign({ _id: dbUser._id }, JWT_SECRET);
          res.json({ token: jwtToken });
        } else {
          return res.status(400).json({ error: 'Неправильні дані' });
        }
      });
    })
    .catch(error => {
      console.log(error);
    });
});
router.post('/register', (req, res) => {
  console.log(req.body);
  const { fullName, email, password } = req.body; // Деструктуризація об'єкта
  if (!fullName || !password || !email) {
    return res
      .status(400)
      .json({ error: 'Одне або декілька з полів є порожнім' });
  }
  // Запобігання дублікатів
  UserModel.findOne({ email: email })
    .then(dbUser => {
      if (dbUser) {
        return res.status(500).json({ error: 'Користувач вже існує' });
      }
      bcrypt.hash(password, 16).then(hashedPassword => {
        user = new UserModel({
          fullName,
          email,
          password: hashedPassword,
        });
        user
          .save()
          .then(u => {
            res
              .status(201)
              .json({ result: 'Користувач зареєстрований успішно' });
          })
          .catch(error => {
            console.log(error);
          });
      });
    })
    .catch(error => {
      console.log(error);
    });
});

module.exports = router;
