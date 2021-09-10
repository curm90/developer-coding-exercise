const router = require('express').Router();
const Token = require('../models/Token');

// Add a token to the DB
router.post('/favorites', async (req, res) => {
  const token = new Token({
    ...req.body,
  });

  const alreadyExists = await Token.findOne({ rank: req.body.rank });

  if (alreadyExists) {
    return res.status(400).json({ message: 'Token already in favorites' });
  }

  try {
    await token.save();
    res.status(200).send(token);
  } catch (error) {
    res.status(400).send(error);
  }
});

// Get all favorites from the DB
router.get('/favorites', async (req, res) => {
  const tokens = await Token.find({});

  res.status(200).send(tokens);
});

// Remove a favorite from the DB by the passed in id
router.delete('/favorites/:id', async (req, res) => {
  try {
    const token = await Token.findOneAndDelete({
      count: req.params.id,
    });

    if (!token) {
      return res.status(404).json({ message: 'Token does not exist' });
    }

    res.send(token);
  } catch (error) {
    res.status(500).send(error);
  }
});

module.exports = router;
