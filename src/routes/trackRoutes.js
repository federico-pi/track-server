const express = require('express');
const mongoose = require('mongoose');
const requireAuth = require('../middlewares/requireAuth');

const Track = mongoose.model('Track');

const router = express.Router();

router.use(requireAuth);

router.get('/tracks', async (req, res) => {
  const tracks = await Track.find({ userId: req.user._id });

  res.send(tracks);
});

router.post('/tracks', async (req, res) => {
  const { name, locations, dateSaved, timeSaved, seconds, minutes } = req.body;

  if (!name || !locations) {
    return res
      .status(422)
      .send({ error: 'You must provide a name, a date, and locations' });
  }

  try {
    const track = new Track({ name, locations, dateSaved, timeSaved, seconds, minutes, userId: req.user._id });
    await track.save();
    res.send(track);
  } catch (err) {
    res.status(422).send({ error: err.message });
  }
});

router.delete('/tracks/:id', async (req, res) => { 
  const { id } = req.params;
  const track = Track.findById(id);
  if (track) {
    await track.deleteOne();
    res.status(204);
  } else { 
    res.status(404);
  }
});

module.exports = router;
