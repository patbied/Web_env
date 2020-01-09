const express = require('express');
const router = express.Router();
const Post = require('../model/Post');

//Standard get post
router.get('/', async (req, res) => {
  try {
    const posts = await Post.find().sort({ _id: -1 });
    res.json(posts);
  } catch (err) {
    res.json({ message: err });
  }
});
// Get specific post
router.get('/:postID', async (req, res) => {
  try {
    const post = await Post.findById(req.params.postID);
    res.json(post);
  } catch (err) {
    res.json({ message: err });
  }
});

router.delete('/:postID', async (req, res) => {
  try {
    const removedPost = await Post.remove({ _id: req.params.postID });
    res.json(removedPost);
  } catch (err) {
    res.json({ message: err });
  }
});
router.patch('/:postID', async (req, res) => {
  try {
    const updatedPost = await Post.updateOne(
      { _id: req.params.postID },
      { $set: { title: req.body.title } },
      { $set: { author: req.body.author } }
    );
    res.json(updatedPost);
  } catch (err) {
    res.json({ message: err });
  }
});
router.post('/', async (req, res) => {
  const post = new Post({
    title: req.body.title,
    author: req.body.author,
    // postDate: req.body.postDate,
    // tags: req.body.tags,
    content: req.body.content,
    rating: req.body.rating
  });
  try {
    const SavedPost = await post.save();
    res.json(SavedPost);
  } catch (err) {
    res.json({ message: err });
  }
});
module.exports = router;
