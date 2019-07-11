const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const PokemonSchema = new Schema({
    name: {
        type: String,
        required: [true, 'name field is required']
    },
    species: {
        type: String,
        required: [true, 'species field is required']
    },
    type: {
        type: String,
        required: [true, 'type field is required']
    }
});

const Pokemon = mongoose.model('pokemon', PokemonSchema);

module.exports = Pokemon;