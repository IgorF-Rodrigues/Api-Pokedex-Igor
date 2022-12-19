const form = document.querySelector('.pesquisa');

form.addEventListener('input', () => {

    const nomesPokemon = document.querySelectorAll('.nome');

    nomesPokemon.forEach(nome => {
        let pesquisa = RegExp(form.value, 'i');

        if(pesquisa.test(nome.textContent)) {
            nome.parentNode.classList.remove('remove');
        } else {
            nome.parentNode.classList.add('remove');
        };
    });
});
