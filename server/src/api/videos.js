const express = require('express');

const router = express.Router();
const url = 'https://www.googleapis.com/youtube/v3/playlistItems?part=snippet&playlistId=UULNgu_OupwoeESgtab33CCw&maxResults=50';

router.get('/', (req, res) => {
  fetch(`${url}&key=${process.env.GOOGLE_API_KEY}`)
    .then(response => response.json())
    .then(json => {
      res.json(json.items);
    })
});

module.exports = router;


