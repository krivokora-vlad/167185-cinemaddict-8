import makeCard from './make-card.js';
import makeFilter from './make-filter.js';

const filterContainer = document.querySelector(`.main-navigation`);
const cardContainer = document.querySelector(`.films-list__container`);
const filterNames = [`All movies`, `Watchlist`, `History`, `Favorites`];

const getRandomInt = (min, max) => Math.round((Math.random() * (max - min) + min));

const renderCards = (fragment) => cardContainer.insertAdjacentHTML(`beforeend`, fragment);

const renderFilter = (nameFilter, checked) => {
  const fragment = makeFilter(nameFilter, getRandomInt(0, 20), checked);
  filterContainer.insertAdjacentHTML(`beforeend`, fragment);
};

filterNames.forEach((filterName, index) => renderFilter(filterName, index === 0 ? true : false));

for (let i = 0; i < 7; i++) {
  renderCards(makeCard());
}

filterContainer.addEventListener(`click`, () => {
  cardContainer.innerHTML = ``;
  for (let i = 0; i < getRandomInt(1, 7); i++) {
    renderCards(makeCard());
  }
});
