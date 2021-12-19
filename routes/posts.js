const express = require("express");
const router = express.Router();
const Post = require("../models/Post");

// get all the posts
router.get("/", async (req, res) => {
  const posts = await Post.find();
  res.send(posts);
});

// find the specific post
router.get("/:postId", async (req, res) => {
  console.log(req.params.body);
  try {
    const post = await Post.findById(req.params.postId);
    res.status(200).json(post);
  } catch (error) {
    res.status(400).json({ message: error });
  }
});

// create the post
router.post("/create", async (req, res) => {
  console.log(req.body);

  const post = new Post({
    title: req.body.title,
    description: req.body.description,
  });

  try {
    const savedPost = await post.save();
    res.status(200).json(savedPost);
  } catch (error) {
    console.log({ error });
    res.status(400).json({ message: error });
  }
});

// delete the post
router.delete("/:postId", async (req, res) => {
  try {
    const deletedPost = await Post.remove({ _id: req.params.postId });
    res.status(200).json(deletedPost);
  } catch (error) {
    res.status(400).json({ message: error });
  }
});

// update the post
router.patch("/:postId", async (req, res) => {
  try {
    const updatedPost = await Post.updateOne({
      _id: req.params.postId,
      title: "editTitled",
    });
    res.status(200).json(updatedPost);
  } catch (error) {
    res.status(400).json({ message: error });
  }
});

module.exports = router;
