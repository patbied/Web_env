const express = require('express');
const router = express.Router();
const Post = require('../model/Post');

router.get('/', async (req, res) => {
  try {
    const posts = await Post.find().sort({ _id: -1 });
    res.json(posts);
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
    content: req.body.content
    //  rating: req.body.rating
  });
  try {
    const SavedPost = await post.save();
    res.json(SavedPost);
  } catch (err) {
    res.json({ message: err });
  }
});
module.exports = router;
