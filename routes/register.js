const express = require('express');
const router = express.Router();
const User = require('../model/User');
const {
  validate,
  userValidationRules
} = require('../validation/registerValidation');

router.get('/', async (req, res) => {
  try {
    const users = await User.find().sort({ _id: -1 });
    res.json(users);
  } catch (err) {
    res.json({ message: err });
  }
});
router.post('/', userValidationRules(), validate, async (req, res) => {
  const users = new User({
    first_name: req.body.first_name,
    last_name: req.body.last_name,
    username: req.body.username,
    email: req.body.email,
    password: req.body.password
  });
  usernameExists: async value => {
    var user = await Users.find({ username: value });
  };

  try {
    const SavedPost = await users.save();
    res.json(users);
  } catch (err) {
    res.json({ message: err });
  }
});

module.exports = router;
