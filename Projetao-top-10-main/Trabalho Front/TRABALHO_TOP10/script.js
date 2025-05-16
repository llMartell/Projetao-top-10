function toggleClasse(element) {
    const cards = document.querySelectorAll('.card');

    cards.forEach(card => {
        if (card !== element) {
            card.classList.remove('card-obra-select');
            card.classList.add('card-obra');

            const conteudo = card.querySelector('.conteudo');
            if (conteudo) {
                conteudo.classList.remove('visivel');
                conteudo.classList.add('escondido');
            }
        }
    });


    element.classList.toggle('card-obra');
    element.classList.toggle('card-obra-select');

    const conteudoInterno = element.querySelector('.conteudo');
    if (conteudoInterno) {
        const isVisivel = conteudoInterno.classList.contains('visivel');

        if (isVisivel) {
            conteudoInterno.classList.remove('visivel');
            conteudoInterno.classList.add('escondido');
        } else {
            conteudoInterno.classList.remove('escondido');
            conteudoInterno.classList.add('visivel');
        }
    }
}