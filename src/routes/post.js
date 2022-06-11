const express = require("express");
const postSchema = require("../schema/post");

const router = express.Router();

// Make a post
router.post("/post", (req, res) => {
    const post = postSchema(req.body);
    post
        .save()
        .then((data) => res.json(data))
        .catch((error) => res.json({ message: error }));
});

// Get posts from a user
router.get("/post/:user", (req, res) => {
    const { user } = req.params;
  postSchema
    .find({ user: user })
    .then((data) => res.json(data))
    .catch((error) => res.json({ message: error }));
});

// Get posts
router.get("/post", (req, res) => {
  postSchema
    .find()
    .then((data) => res.json(data))
    .catch((error) => res.json({ message: error }));
});

module.exports = router;