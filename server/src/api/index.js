const express = require('express');

const videos = require('./videos');

const router = express.Router();

router.get('/', (req, res) => {
  res.json({
    message: 'API - 👋🌎🌍🌏',
  });
});

router.use('/videos', videos);

module.exports = router;
