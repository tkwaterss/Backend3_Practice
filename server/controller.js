let planetData = require('./db.json');


module.exports = {
    getPlanets: (req,res) => {
        res.status(200).send(planetData);
    },
    filterBySize: (req,res) => {

    },
    filterByDiameter: (req,res) => {

    },
    createPlanet: (req,res) => {

    },
    deletePlanet: (req,res) => {
        
    }
}