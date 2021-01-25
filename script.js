const numOfPokemon = 9;
const pokemonSelectContainer = document.getElementById('player-option')
let venasaur;
let charizard;
let blastoise;

let grass =1, fire =2, water = 3;

// let i = 1
const fetchPokemon = async () => {
    for(let i=1; i <= numOfPokemon; i++) {
        await getPokemon(i);
    }
}

const getPokemon = async id => {
    const url = `https://pokeapi.co/api/v2/pokemon/${id}`;
    const res = await fetch(url);
    pokemon = await res.json();
    getPokemonBattleStats(pokemon[`${id}`])
}
function getPokemonBattleStats(pokemonIt) {  
    pokemonIt = new PokemonBattleStat(pokemon.name, pokemon.sprites.front_default, pokemon.types[0].type.name, pokemon.stats[0].base_stat, pokemon.stats[1].base_stat, pokemon.stats[2].base_stat);
        createPokemonCard(pokemonIt)
        console.log(pokemonIt) 
    // if(i ===3 || i === 6 || i === 9) {
    //     pokemonIt = new PokemonBattleStat(pokemon.name, pokemon.sprites.front_default, pokemon.types[0].type.name, pokemon.stats[0].base_stat, pokemon.stats[1].base_stat, pokemon.stats[2].base_stat);
    //     createPokemonCard(pokemonIt)
    //     console.log(pokemonIt)             
    // } 
}
function PokemonBattleStat(name, picture, type, hp, attack, defense) {
    this.name = name;
    this.picture = picture;
    this.type = type;
    this.hp = hp;
    this.attack= attack;
    this.defense= defense;


    //attempting to generate unique border for each card depending on type.
    //not sure what type's relationship to the current set of IDs is.
    // if(type == 1){
    //     document.getElementById('pokemon').style.borderImage = url(pictures/leaf.jpg) round;
    // }
};
function createPokemonCard(pokemon) {
    const pokemonEl = document.createElement('div');
    pokemonEl.classList.add('pokemon');
    pokemonSelectContainer.appendChild(pokemonEl);
    const namePlate = document.createElement('h1');
    namePlate.classList.add('name');
    namePlate.innerHTML = `${pokemon.name}`
    pokemonEl.appendChild(namePlate);
    const picture = document.createElement('img');
    picture.src = `${pokemon.picture}`
    picture.classList.add('picture');
    picture.innerHTML = `${pokemon.src}`
    pokemonEl.appendChild(picture);

}

//creating an "info card" that pops up over each with 
//info on that selection would be cool

fetchPokemon();













