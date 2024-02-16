const paragrafos = document.querySelector('.paragrafos');
const ps = paragrafos.querySelectorAll('p');

const estilosBody = getComputedStyle(document.body); // Capturando estilos do navegador
const backgroundoColorBody = estilosBody.backgroundColor;
console.log(backgroundoColorBody);


for (let p of ps) {
    p.style.backgroundColor = backgroundoColorBody;
    p.style.color = '#fff';
}