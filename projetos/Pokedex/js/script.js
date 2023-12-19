// fetch é buscar e search é procurar.

const pokemonName = document.querySelector('.pokemon_name');
const pokemonNumber = document.querySelector('.pokemon_number');
const pokemonImage = document.querySelector('.pokemon__image');
const form = document.querySelector('.form')
const input = document.querySelector('.input_search')
const buttonPrev = document.querySelector('.btn-prev')
const buttonNext = document.querySelector('.btn-next') //. ou # para economizar tempo.

    let searchPokemon = 1;
    input.focus()

const fetchPokemon = async (pokemon) => {

    const APIResponse = await fetch(`https://pokeapi.co/api/v2/pokemon/${pokemon}`); // await significa que ele vai esperar o fetch pegar o resultado antes de ir para as outras linhas.Mas para o await funcionar você precisa ter uma função asincrona(async).

    if(APIResponse.status === 200){
        const data = await APIResponse.json(); // O arquivo que está no pokeAPI
        return data;
    }
}
const renderPokemon = async (pokemon) => {

    pokemonName.innerHTML = 'Loading...';
    pokemonNumber.innerHTML = ''
    const data = await fetchPokemon(pokemon);

    if(data){
        pokemonImage.style.display = 'block';
        pokemonName.innerHTML = data.name;
        pokemonNumber.innerHTML = data.id;
        pokemonImage.src = data['sprites']['versions']['generation-v']['black-white']['animated']['front_default'];
        input.value = ''
        searchPokemon = data.id;
    }else{
        pokemonImage.style.display = 'none';
        pokemonName.innerHTML = 'Not found :C'
        pokemonNumber.innerHTML = ''
    }
}

form.addEventListener('submit', (event) => {
    event.preventDefault()
    renderPokemon(input.value.toLowerCase());// toLowerCase vai fazer o resultado ser o mesmo, mesmo que esteja escrito diferente.
});

buttonPrev.addEventListener('click', () => {
    if(searchPokemon > 1){
         searchPokemon -= 1;
    renderPokemon(searchPokemon)
    }
   
});

buttonNext.addEventListener('click', () => {
    searchPokemon += 1;
    renderPokemon(searchPokemon);
});

renderPokemon(searchPokemon);