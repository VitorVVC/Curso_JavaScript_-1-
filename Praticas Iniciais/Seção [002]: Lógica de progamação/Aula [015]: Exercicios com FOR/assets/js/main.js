const elementos = [
    { tag: 'p', texto: 'Sou um PARAGRAFO' },
    { tag: 'div', texto: 'Sou uma DIV' },
    { tag: 'footer', texto: 'Sou um FOOTER' },
    { tag: 'section', texto: 'Sou uma SECTION' },
];

function main() {
    const section = document.querySelector('.container');
    const resposta = document.createElement('div');

    for (let i = 0; i < elementos.length; i++) {
        const { tag, texto } = elementos[i];
        const elemento = document.createElement(tag);
        elemento.innerText = texto;
        resposta.appendChild(elemento);
    }
    section.appendChild(resposta);
}

main();