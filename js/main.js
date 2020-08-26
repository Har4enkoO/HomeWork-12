let allCharacters = document.querySelector('.characters');
let getNameFilm = document.getElementById('getFilm');

getNameFilm.addEventListener('click', function() {
  let filmPart = document.getElementById('films').value;
  if (filmPart != 'none') {
    async function getAllCharacters() {
      return await axios.get(`https://swapi.dev/api/films/${filmPart}/`);
    }
    getAllCharacters().then(characters =>
      characters.data.characters.forEach(character => {
        async function getCharacter() {
          return await axios.get(`${character}`);
        }
        let allBlocks = document.querySelectorAll('.hero');
        if (allBlocks) {
          allBlocks.forEach(block => {
            block.remove();
          });
        }
        getCharacter().then(charcterInfo => {
          let newHero = document.createElement('div');
          if (IMG[`${charcterInfo.data.name}`]) {
            newHero.insertAdjacentHTML(
              'afterbegin',
              `<img src="characters/${charcterInfo.data.name}.png" width="50" height="50" alt="img"><br />`
            );
          } else {
            newHero.insertAdjacentHTML(
              'afterbegin',
              `<img src="characters/1.png" width="50" height="50" alt="img"><br />`
            );
          }
          newHero.insertAdjacentHTML(
            'beforeend',
            `${charcterInfo.data.name}<br /> Birthday - ${charcterInfo.data.birth_year}<br /> Gender - ${charcterInfo.data.gender}<br />`
          );
          newHero.className = 'hero';
          allCharacters.append(newHero);
        });
      })
    );
  } else {
    alert('Зробіть свій вибір!');
  }
});
