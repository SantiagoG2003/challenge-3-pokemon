import data from './data/pokemon.json' with { type: 'json' };

const POKEMON_TYPES_ICONS = {
  fire: 'bxs-hot',
  flying: 'bx-wind',
  water: 'bx-water',
  grass: 'bx-leaf',
  bug: 'bxs-bug',
  electric: 'bxs-bolt',
  poison: 'bxs-skull',
  fighting: 'bx-error-circle',
  ground: 'bx-tree-alt',
  normal: 'bx-sun',
  psychic: 'bxs-magic-wand',
  ghost: 'bx-ghost'
}

console.log(data)
// Tu código aquí
const cardsContainer = document.querySelector(".cards")

function getCardsHtml(pokemonData) {
  const icon = POKEMON_TYPES_ICONS [pokemonData.type[0]]
  const cardHtml = `
  <div class="pokemon-card ${pokemonData.type[0]}">
        <div class="pokemon-card__type-label ${pokemonData.type[0]}">
          <i class="pokemon-card__name-icon bx ${icon} ${pokemonData.type[0]}"></i>
          <span>${pokemonData.type[0]}</span>
        </div>
        <div class="pokemon-card__image">
          <img src="${pokemonData.img}" loading="lazy">
        </div>
        <div class="pokemon-card__name">
          <h4>${pokemonData.name}</h4>
        </div>
        <p class="pokemon-card__eyebrow">${pokemonData.num}</p>
      </div>
    `
  return cardHtml
}
const cardsHtml = data.pokemon.map((pokemonData) => {
  return getCardsHtml(pokemonData)
}).join("")


cardsContainer.innerHTML = cardsHtml