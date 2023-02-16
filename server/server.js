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
    deletePlanet
} = require('./controller')

app.get('/api/planets',getPlanets);
app.get('/api/planets/mass', filterBySize);
app.get('/api/planets/diameter', filterByDiameter);
app.delete('/api/planets/:id', deletePlanet);
app.post('/api/planets/:id', createPlanet);

app.listen(4000,console.log("Server running on 4000"));