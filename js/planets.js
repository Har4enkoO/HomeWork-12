let button = document.getElementById('getPlanets');
let next = document.getElementById('getNextPlanets');
let allPlanets = document.querySelector('.planets');
button.addEventListener('click', getPlanets);
function getPlanets() {
  async function planets() {
    return await axios.get('https://swapi.dev/api/planets/');
  }
  planets().then((a) =>
    a.data.results.forEach((element) => {
      let newPlanet = document.createElement('div');
      newPlanet.insertAdjacentHTML(
        'afterbegin',
        `<img src="img/1.png" width="50" height="50" alt="img"><br />${element.name}<br />`
      );
      newPlanet.className = 'planet';
      allPlanets.append(newPlanet);
    })
  );
}
let page = 2;
next.addEventListener('click', getNextPlanets);
function getNextPlanets() {
  let allBlocks = document.querySelectorAll('.planet');
  if (allBlocks) {
    allBlocks.forEach((block) => {
      block.remove();
    });
  }
  async function planets() {
    return await axios.get(`https://swapi.dev/api/planets/?page=${page}`);
  }
  planets().then((a) =>
    a.data.results.forEach((element) => {
      let newPlanet = document.createElement('div');
      newPlanet.insertAdjacentHTML(
        'afterbegin',
        `<img src="img/1.png" width="50" height="50" alt="img"><br />${element.name}<br />`
      );
      newPlanet.className = 'planet';
      allPlanets.append(newPlanet);
    })
  );
  page += 1;
}
