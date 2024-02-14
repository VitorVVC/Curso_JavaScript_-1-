// let a = 'A'; // B
// let b = 'B'; // C
// let c = 'C'; // A

// const letras = [b, c, a];
// [a, b, c] = letras;

// console.log(a, b, c);

// const numeros = [1000, 2000, 3000, 4000, 5000, 6000, 7000, 8000, 9000];
// // Melhor do que criarmos uma const em cada linha e atribuirmos em cada linha..
// // const [primeiroNumero, segundoNumero, terceiroNum, ...resto] = numeros;
// const [primeiroNumero, segundoNumero, terceiroNum, , , sextoNum] = numeros;
// // ... --> rest operator || ... --> spread operator
// console.log(primeiroNumero, segundoNumero, terceiroNum, sextoNum);

// Útil 
const numeros = [
    [1, 2, 3], [4, 5, 6], [7, 8, 9]
];
console.log(numeros[1][2]);
// Meio medonho, mas é atribuicão e pode ser util em algum momento.
const [, [, , sextoNum]] = numeros;
// Um pouco mais fácil.
const [lista1, lista2, lista3] = numeros;
console.log(sextoNum);
console.log(lista3[2]);