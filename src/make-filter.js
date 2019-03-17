export default (nameFilter, countCard, active = false) => `
<a href="#all" class="main-navigation__item ${active ? `main-navigation__item--active` : ``}">
  ${nameFilter}
  <span class="main-navigation__item-count" style="${active ? `display:none;` : ``}">${countCard}</span>
</a>`;
