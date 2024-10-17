const express = require("express");
const router = express.Router();
const mongoose = require("mongoose");
const protectedResource = require("../middleware/protectedResource");
const PostModel = mongoose.model("PostModel");

router.get("/posts", (req, res) => {
  PostModel.find()
    .populate("author", "_id fullName")
    .then((dbPost) => {
      res.status(200).json({ post: dbPost });
    })
    .catch((error) => {
      console.log(error);
    });
});

router.get("/myposts", protectedResource, (req, res) => {
  PostModel.find({ author: req.dbUser._id })
    .populate("author", "_id fullName")
    .then((dbPost) => {
      res.status(200).json({ post: dbPost });
    })
    .catch((error) => {
      console.log(error);
    });
});

router.post("/createpost", protectedResource, (req, res) => {
  const { title, body } = req.body;
  if (!title || !body) {
    return res
      .status(400)
      .json({ error: "Одне або декілька з полів є порожнім" });
  }
  //   console.log(req.dbUser);
  //   res.send("Готово");
  req.dbUser.password = undefined;
  const post = new PostModel({ title: title, body: body, author: req.dbUser });
  post
    .save()
    .then((dbPost) => {
      res.status(201).json({ post: dbPost });
    })
    .catch((error) => {
      console.log(error);
    });
});

module.exports = router;
