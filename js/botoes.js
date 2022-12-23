const botoes = document.querySelectorAll('.btn-ger');

botoes.forEach(btn => {
    btn.addEventListener('click', (e) => {
        secao.innerHTML = '';
        removeImagemInicial();

        switch(e.target.textContent) {
            case '1ª Geração': 
                id = 1;
                geracao = 151;
                break
            case '2ª Geração':
                id = 152;
                geracao = 251;
                break
            case '3ª Geração':
                id = 252;
                geracao = 386;
                break
            case '4ª Geração':
                id = 387;
                geracao = 493;
                break
            case '5ª Geração':
                id = 494;
                geracao = 649;
                break
            case '6ª Geração':
                id = 650;
                geracao = 721;
                break
            case '7ª Geração':
                id = 722;
                geracao = 809;
                break
            case '8ª Geração':
                id = 810;
                geracao = 905;
                break
        };
        carregaAPI(id, geracao)
    });
});

function removeImagemInicial() {
    const imagem = document.querySelector('.div-img');
    imagem.innerHTML = '';
};
