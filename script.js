const numOfPokemon = 9;
const pokemonSelectContainer = document.getElementById('player-option')
let venasaur;
let charizard;
let blastoise;



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


   

    //Can do the four icons surrounding (like grass/fire) or water's background.
    //Super easy, but it took me two hours of messing around to make it work. Will simplify
    //Code to make it all one if statement soon.
    
        if(pokemon.type == "grass"){
            pokemonEl.style.border = "10px solid transparent";
            pokemonEl.style.borderImage = "url(pictures/leaf.jpg)";
            } 
        else if(pokemon.type == "fire"){
            pokemonEl.style.border = "10px solid transparent";
            pokemonEl.style.borderImage = "url(pictures/fire.jpg)";
            } 
        
        else if(pokemon.type == "water"){
            pokemonEl.style.border = "10px solid transparent";
            pokemonEl.style.borderImage = "url(pictures/water.jpg) 30";
            } 





        }
    




fetchPokemon();













