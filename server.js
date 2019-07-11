const express = require('express');
const routes = require('./routes/api');
const mongoose = require('mongoose');
const path = require("path");
require("dotenv").config();

const app = express();

const connectionString = process.env.MONGODB_URI || 'mongodb+srv://admin:gClpi5pSWxXgUTVx@pokemon-5vy4r.mongodb.net/test?retryWrites=true&w=majority';

// connect to mongodb
mongoose.connect(connectionString, { useNewUrlParser: true });
mongoose.Promise = global.Promise;

const bodyParser = require('body-parser');
const cors = require('cors');

const port = process.env.PORT || 5000;

app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));
app.use(cors());

app.use('/api', routes);

app.use(express.static(path.join(__dirname, "client", "build")));

// error handling
app.use(function(err, req, res, next){
    res.status(422).send({ error: err.message });
});

// server react app
app.get("*", (req, res) => {
    res.sendFile(path.join(__dirname, "client", "build", "index.html"));
});

// log to show server is running
app.listen(port, () => console.log(`listening on port ${port}`));