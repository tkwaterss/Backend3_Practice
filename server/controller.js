let planetData = require('./db.json');


module.exports = {
    getPlanets: (req,res) => {
        res.status(200).send(planetData);
    }
}