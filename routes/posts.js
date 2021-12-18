const express = require("express");
const router = express.Router();
const Post = require("../models/Post");

// get all the posts
router.get("/", async (req, res) => {
  const posts = await Post.find();
  res.send(posts);
});

// create the post
router.post("/create", async (req, res) => {
  console.log(req.body);

  const post = new Post({
    title: "Sample Title",
    description: "Sample Description",
  });

  try {
    const savedPost = await post.save();
    res.send(200).json(savedPost);
  } catch (error) {
    res.status(500).json({ message: error });
  }
});

module.exports = router;
