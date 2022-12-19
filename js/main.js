const secao = document.querySelector('.container-pokemons');
let geracao = 0;
let id = 1;

async function carregaAPI(id, geracao) {
    for(id; id <= geracao; id++) {
        let api = `https://pokeapi.co/api/v2/pokemon/${id}`
        try {
            let link = await fetch(api);
            var pokemon = await link.json();

            criarTemplate(pokemon);
        } catch {
            throw new Error(`Não foi possivel buscar o pokémon do id ${id}`)
        }
        
    };
};