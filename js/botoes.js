const botoes = document.querySelectorAll('.btn-ger');

botoes.forEach(btn => {
    btn.addEventListener('click', (e) => {
        secao.innerHTML = '';
        removeImagemInicial();

        switch(e.target.textContent) {
            case '1ª Geração': 
                lista = listaPokemon.slice(0, -754);
                criarTemplate(lista);
                break
            case '2ª Geração':
                lista = listaPokemon.slice(151,-654);
                criarTemplate(lista);
                break
            case '3ª Geração':
                lista = listaPokemon.slice(251,-519);
                criarTemplate(lista);
                break
            case '4ª Geração':
                lista = listaPokemon.slice(386,-411);
                criarTemplate(lista);
                break
            case '5ª Geração':
                lista = listaPokemon.slice(494,-256);
                criarTemplate(lista);
                break
            case '6ª Geração':
                lista = listaPokemon.slice(649,-184);
                criarTemplate(lista);
                break
            case '7ª Geração':
                lista = listaPokemon.slice(721,-96);
                criarTemplate(lista);
                break
            case '8ª Geração':
                lista = listaPokemon.slice(809);
                criarTemplate(lista);
                break
        };
    });
});

function removeImagemInicial() {
    const imagem = document.querySelector('.div-img');
    imagem.innerHTML = '';
};
