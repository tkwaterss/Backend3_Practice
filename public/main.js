const planetsContainer = document.querySelector('#planets-container');
const newPlanet = document.querySelector('#newPlanetForm');
const filterMass = document.querySelector('#filterMass');
const filterDiameter = document.querySelector('#filterDiameter');

let baseURL = 'http://localhost:4000/api/planets'

const planetCallback = ({ data: planets }) => displayPlanets(planets)
const errCallback = err => {console.log(err)}

const getPlanets = () => axios.get(baseURL).then(planetCallback).catch(errCallback);




const displayPlanets = arr => {
    dogsContainer.innerHTML = "";
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

const filterByMass = event => {

}

const filterByDiameter = event => {

}

const deletePlanet = planetObj => {

}


newPlanet.addEventListener('submit', newPlanetHandler);
filterMass.addEventListener('submit', filterByMass);
filterDiameter.addEventListener('submit', filterByDiameter);

getPlanets();