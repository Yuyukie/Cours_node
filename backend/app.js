const express = require("express");
const bodyParser = require("body-parser");
const mongoose = require('mongoose');

const stuffRoutes = require("./routes/stuff.js");
const userRoutes = require("./routes/users.js");

mongoose.connect("mongodb+srv://benjaminmazars:sEtPjCJwxvSK6Gj2@cluster0.dvaku3x.mongodb.net/?retryWrites=true&w=majority&appName=Cluster0")
  .then(() => console.log('Connexion à MongoDB réussie !'))
  .catch(() => console.log('Connexion à MongoDB échouée !'));
const app = express();

app.use(express.json());

app.use((req, res, next) => {
    res.setHeader('Access-Control-Allow-Origin', '*');
    res.setHeader('Access-Control-Allow-Headers', 'Origin, X-Requested-With, Content, Accept, Content-Type, Authorization');
    res.setHeader('Access-Control-Allow-Methods', 'GET, POST, PUT, DELETE, PATCH, OPTIONS');
    next();
  });

app.use(bodyParser.json());

app.use("/api/stuff", stuffRoutes)
app.use("/api/auth", userRoutes)


module.exports = app; 