const express = require('express');
const app = express();
const port = process.env.PORT || 5000;
var bodyParser = require('body-parser');
var cors = require('cors');

app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));
app.use(cors());

// log to show server is running
app.listen(port, () => console.log(`Listening on port ${port}`));

// GET route for all pokemon
app.get('/api/pokemon', (req, res) => {
    res.send(pokemonList);
});

// GET route for pokemon filtered by type
app.get('/api/pokemon/:type', (req, res) => {
    
    const reqType = req.params.type;

    let filteredPokemon = pokemonList.filter(pokemon => {
        return pokemon.type.includes(reqType);
    });

    if (!filteredPokemon) {
        res.status(404).json({ message: 'No pokemon found.' });
    }

    res.json(filteredPokemon);
});

// POST route for new pokemon
app.post('/api/pokemon', (req, res) => {
    
    const newPoke = {
        id: pokemonList.length + 1,
        name: req.body.name,
        species: req.body.species,
        type: req.body.type
    }

    console.log("pokemon name: " + req.body.name);
    console.log(JSON.stringify(newPoke));

    pokemonList.push(newPoke)

    res.json(newPoke);
    // res.end(newPoke);
});

// PUT route for editing pokemon
app.put('/api/pokemon/:id', (req, res) => {
    
    const reqID = req.params.id;

    let pokemon = pokemonList.filter(pokemon => {
        return pokemon.id == reqID;
    })[0];

    const index = pokemonList.indexOf(pokemon);

    const keys = Object.keys(req.body);

    keys.forEach(key => {
        pokemon[key] = req.body[key];
    });

    pokemonList[index] = pokemon;

    res.json(pokemonList[index]);
});

// DELETE route for deleting pokemon
app.delete('/api/pokemon/:id', (req, res) => {

    const reqID = req.params.id;

    let pokemon = pokemonList.filter(pokemon => {
        return pokemon.id == reqID;
    })[0];

    let reqName = pokemon.name;
    let reqSpecies = pokemon.species;

    const index = pokemonList.indexOf(pokemon);

    pokemonList.splice(index, 1);

    // res.json({ message: `${reqName} the ${reqSpecies} has been deleted.` });
    res.json({ id: `${reqID}` });
});

var pokemonList = [
    {
        id: 1, 
        name: "carrots", 
        species: "bulbasaur",
        type: "grass/poison"
    },
    {
        id: 2, 
        name: "tater tot", 
        species: "charmander",
        type: "fire"
    },
    {
        id: 3, 
        name: "arsenic", 
        species: "squirtle",
        type: "water"
    },
    {
        id: 4, 
        name: "captain hook", 
        species: "psyduck",
        type: "water"
    },
    {
        id: 5, 
        name: "thor", 
        species: "oddish",
        type: "grass/poison"
    },
    {
        id: 6, 
        name: "juicebox", 
        species: "pikachu",
        type: "electric"
    },
    {
        id: 7, 
        name: "minyoung", 
        species: "quagsire",
        type: "ground/water"
    },
    {
        id: 8,
        name: "aaron",
        species: "voltorb",
        type: "electric"
    }
];