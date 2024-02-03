// Oque há dentro da funcão só pode ser modificado ou tratado dentro da mesma

// function saudacao(){
//     console.log('Boa tarde!');
// }

// Podemos também receber um parametro de entrada para nossa funcão

// function saudacao(nome){
//     // Maneira simples porém pode ser melhorada
//     // console.log(`Bom dia ${nome}`)
//     // return nome;

//     // Melhor maneira, porém agora ela só retorna um valor. Portanto não exibe nada se não atrelado a uma variavel 
//     return (`Bom dia ${nome}`);
// }

// const variavel = saudacao("Vitor");
// console.log(variavel); // Esta variavel é undefined por mais que esteja anteriormente sendo exibida // Para contornar-mos isso na propria funcão passamos um return, para dessa forma atribuir algo a memória

// function soma(num1, num2) { // Ao pedirmos um parametro e ele não ser oferecido, será dado o valor undefined.
//     return num1 + num2; // Ao encontrar RETURN ele "quebrará" a função para retornar algo
// }

// console.log(soma(2,2));
// console.log(soma(3,5));
// console.log(soma(10,2));

// const raiz = function (num){
//     return Math.sqrt(num,2);
// }; // Neste caso é necessário ponto e virgula


// console.log(raiz(9));
// console.log(raiz(16));
// console.log(raiz(25));

// Maneira mais moderna de criar funcoes ( Arrow Function )

const raiz = (n) => Math.sqrt(n,2);

console.log(raiz(9));
console.log(raiz(16));
console.log(raiz(25));