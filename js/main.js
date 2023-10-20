const secao = document.querySelector('.container-pokemons');
let listaPokemon = new Array;

carregaAPI()
async function carregaAPI() {;

    for(id = 1; id <= 905; id++) {
        let api = `https://pokeapi.co/api/v2/pokemon/${id}`
        try {
            let link = await fetch(api);
            var pokemon = await link.json();

            listaPokemon.push(pokemon);
        } catch {
            throw new Error(`Não foi possivel buscar o pokémon do id ${id}`)
        }       
    };
};
