const express = require('express');
const router = express.Router();
const Pusher = require('pusher');
const mongoose = require('mongoose');

const Vote = require('../models/Vote');

var pusher = new Pusher({
    appId: '466033',
    key: '47e13e1a1ca0de27095c',
    secret: '351fc212178d3ef94df9',
    cluster: 'us2',
    encrypted: true
  });

router.get('/', (req, res) => {
    Vote.find().then(votes => res.json({success: true, votes: votes}));
});

router.post('/', (req, res) => {
    const newVote = {
        os: req.body.os,
        points: 1
    }

    new Vote(newVote).save().then(vote => {
        pusher.trigger('os-poll', 'os-vote', {
            points: parseInt(vote.points),
            os: req.body.os
          });
    
          return res.json({success : true , message : 'Thank you for voting'});
    });

});

module.exports = router;