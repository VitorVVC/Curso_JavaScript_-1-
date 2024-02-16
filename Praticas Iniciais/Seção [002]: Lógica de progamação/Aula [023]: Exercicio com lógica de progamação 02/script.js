// Escrever uma função chamada ePaisagem que recebe dois argumentos --> Largura e altura de uma imagem (number). 
// Retornar true se a imagem estiver no modo paisagem

// Minha solução:
const ePaisagem = (largura, altura) => largura > altura ? true : false;

// Solução professor:
const ePaisagemProfessor = (largura, altura) => largura >= altura;

console.log(ePaisagem(1920, 1080));
console.log(ePaisagem(1080, 1920));
console.log(`========================`)
console.log(ePaisagemProfessor(1920, 1080));
console.log(ePaisagemProfessor(1080, 1920));