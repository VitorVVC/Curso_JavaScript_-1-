let num1 = 9.54578;
let num1ArrendondadoParaBaixo = Math.floor(num1); // Arrendondando para baixo
let num1ArrendondadoParaCima = Math.ceil(num1); // Arrendondando para cima
let num2 = Math.round(num1); // Arrendonda perante leves calculos, se for 9.49 vai para baixo. 9.51 para cima. Em caso de 9.50 por exemplo ele arrendodará para cima também.
let maiorNumDaSequencia = Math.max(1,2,3,4,5,6,-10,-50,1000,9,3,1,2); // Pega o maior num da sequencia
let menorNumDaSequencia = Math.min(1,2,3,4,5,6,-10,-50,1000,9,3,1,2); // Pega o menor num da sequencia
let numRandom = Math.random(); // Num aleatorio 
let numRandomEntre10e5 = Math.random() * (10 - 5) + 5; // Num aleatorio entre 10 e 5
let numPi = Math.PI;
let numElevado = Math.pow(2,10); // Isto é igual a: (2 ** 10)


console.log(numPi);

// Erro grave em JS
    // console.log(100 / 0); // Retorna "true". É um dado INFINITY.