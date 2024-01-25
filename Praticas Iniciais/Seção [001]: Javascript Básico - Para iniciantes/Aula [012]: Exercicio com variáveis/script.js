// Exercicio \\

let varA = 'A'; // B 
let varB = 'B'; // C 
let varC = 'C'; // A 

// Usando uma nova variavel ( Forma "antiga" )
let aux = varA;
varA = varB;
varB = varC;
varC = aux;

// Sem criar uma nova variavel
[varA,varB,varC] = [varB,varC,varA];

console.log(varA,varB,varC);

