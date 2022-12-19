function criarTemplate(pokemon) {  
    let nomePokemon = pokemon.species.name;
    let nomeFormatado = nomePokemon[0].toUpperCase() + nomePokemon.substring(1);
    let imgPokemon = pokemon.sprites.front_default;
    let especiePokemon1 = pokemon.types[0].type.name;
  
    if(pokemon.types.length == 2) {
        let especiePokemon2 = pokemon.types[1].type.name;

        secao.innerHTML += `
            <div class="caixa ${especiePokemon1} ${especiePokemon2}">
                <h1 class="nome">${nomeFormatado}</h1>
                <img src="${imgPokemon}" alt="imagem do pokémon ${nomePokemon}" class="imagem-pokemon">
                <p class="numeracao">n° ${pokemon.id}</p>
                <div class="classes">
                    <p class="classe">${especiePokemon1}</p>
                    <p class="classe2">${especiePokemon2}</p>
                </div>
            </div>
            `
    } else {
        secao.innerHTML += `
            <div class="caixa ${especiePokemon1}">
                <h1 class="nome">${nomeFormatado}</h1>
                <img src="${imgPokemon}" alt="imagem do pokémon ${nomePokemon}" class="imagem-pokemon">
                <p class="numeracao">n° ${pokemon.id}</p>
                <div class="classes">
                    <p class="classe">${especiePokemon1}</p>
                </div>
            </div>
            `
    };
};