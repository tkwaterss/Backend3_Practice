const express = require('express');
const cors = require('cors');

const app = express();

app.use(express.json());
app.use(cors());

const {
    getPlanets,
    filterBySize,
    filterByDiameter,
    createPlanet,
    ExplodePlanet
} = require('./controller')

app.get('/api/planets',getPlanets);







app.listen(4000,console.log("Server running on 4000"));