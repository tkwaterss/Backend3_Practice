const planetsContainer = document.querySelector('#planets-container');
const newPlanet = document.querySelector('#newPlanetForm');
const filterMass = document.querySelector('#filterMass');
const filterDiameter = document.querySelector('#filterDiameter');

let baseURL = 'http://localhost:4000/api/planets'

const planetCallback = ({ data: planets }) => displayPlanets(planets)
const errCallback = err => console.log(err)

const getPlanets = () => axios.get(baseURL).then(planetCallback).catch(errCallback);
const filterBySize = (value, type) => axios.get(`${baseURL}/?size=${value}`, {type}).then(planetCallback).catch(errCallback);
const filterByDiameter = (value, type) => axios.get(`${baseURL}/?diameter=${value}`, {type}).then(planetCallback).catch(errCallback);
const deletePlanet = (id) => axios.delete(`${baseURL}/:${id}`).then(planetCallback).catch(errCallback);
const createPlanet = (body) => axios.post(baseURL, body).then(planetCallback).catch(errCallback);

const displayPlanets = arr => {
    planetsContainer.innerHTML = "";
    for(let i = 0; i < arr.length; i++) {
        createPlanetCard(arr[i]);
    }
}

const createPlanetCard = planet => {
    const planetCard = document.createElement('div')
    planetCard.classList.add("planetCard");
    
    planetCard.innerHTML = `<h3 >${planet.name}</h3>
        <h4 >${planet.color}</h4>
        <h5 >Mass: ${planet.mass}(10^24kg)</h5>
        <h5 >Diameter: ${planet.diameter}(km)</h5>
        <button onClick="deletePlaneet(${planet.id})">Delete</button>`

    planetsContainer.appendChild(planetCard);
    
}

const newPlanetHandler = event => {

}
const massHandler = event => {
    let moreMass = document.querySelector('#moreMass');
    let lessMass = document.querySelector('#lessMass');
    let filter = document.querySelector('#massFilter');
}
const diameterHandler = event => {

}

newPlanet.addEventListener('submit', newPlanetHandler);
filterMass.addEventListener('submit', massHandler);
filterDiameter.addEventListener('submit', diameterHandler);

getPlanets();