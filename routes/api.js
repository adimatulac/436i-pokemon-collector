const express = require('express');
const router = express.Router();
const Pokemon = require('../models/pokemon');

// GET route for all pokemon
router.get('/pokemon', (req, res, next) => {
    Pokemon.find({}).then(function(pokemon){
        res.send(pokemon);
    }).catch(next);
});

// POST route for new pokemon
router.post('/pokemon', (req, res, next) => {
    Pokemon.create(req.body).then(function(pokemon) {
        res.send(pokemon);
    }).catch(next);
});

// PUT route for editing pokemon
router.put('/pokemon/:id', (req, res, next) => {
    Pokemon.findByIdAndUpdate({_id: req.params.id}, req.body).then(function(){
        Pokemon.findOne({_id: req.params.id}).then(function(pokemon){
            res.send(pokemon);
        });
    }).catch(next);
});

// DELETE route for deleting pokemon
router.delete('/pokemon/:id', (req, res, next) => {
    Pokemon.findByIdAndRemove({
        _id: req.params.id
    }).then(function(pokemon){
        res.send(pokemon);
    }).catch(next);
});

module.exports = router;