const filterContainer = document.querySelector(`.main-navigation`);
const cardContainer = document.querySelector(`.films-list__container`);

const filterNames = [`All movies`, `Watchlist`, `History`, `Favorites`];

import makeCard from './make-card.js';
import makeFilter from './make-filter.js';

const getRandomInt = (min, max) => Math.round((Math.random() * (max - min) + min));

const renderCards = (container, fragment) => container.insertAdjacentHTML(`beforeend`, fragment);

const renderFilter = (container, nameFilter, checked) => {
  const fragment = makeFilter(nameFilter, getRandomInt(0, 20), checked);
  container.insertAdjacentHTML(`beforeend`, fragment);
};

filterNames.forEach((filterName, index) => renderFilter(filterContainer, filterName, index === 0 ? true : false));

for (let i = 0; i < 7; i++) {
  renderCards(cardContainer, makeCard);
}

filterContainer.addEventListener(`click`, () => {
  cardContainer.innerHTML = ``;
  for (let i = 0; i < getRandomInt(1, 7); i++) {
    renderCards(cardContainer, makeCard);
  }
});
