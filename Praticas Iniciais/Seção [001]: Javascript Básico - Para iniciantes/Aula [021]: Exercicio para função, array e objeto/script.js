const meuEscopo = () => {
    const form = document.querySelector('.form');
    const resultado = document.querySelector(`.resultado`);

    const pessoas = [];
    // form.onsubmit = function (event) {
    //     // Neste trecho de código a gente pede ao navegador que previna um evento padrão. No caso não atualizar a página ao enviar o formulario
    //     event.preventDefault();
    // };

    // let contador = 1;
    function recebeEventoForm(evento) {
        // console.log(`Form não foi enviado ${contador}`)
        // contador++;

        evento.preventDefault();
        const nome = form.querySelector('.nome');
        const sobrenome = form.querySelector(`.sobrenome`);
        const peso = form.querySelector(`.peso`);
        const altura = form.querySelector(`.altura`);

        pessoas.push({
            nome: nome.value,
            sobrenome: sobrenome.value,
            peso: peso.value,
            altura: altura.value,

        })
        resultado.innerHTML += `<p>Nome: ${nome.value} ${sobrenome.value} Peso: ${peso.value} Altura: ${altura.value}</p>`;
        console.log(pessoas);
    }
    // Adicionar um espião de eventos dentro da página
    form.addEventListener('submit', recebeEventoForm);
};

meuEscopo();