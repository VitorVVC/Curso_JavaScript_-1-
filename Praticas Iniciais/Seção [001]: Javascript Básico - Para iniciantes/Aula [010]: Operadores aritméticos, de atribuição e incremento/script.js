// Anotações \\
// Operadores aritméticos --> "+" "-" "/" "*" (Mais, menos, divisão e multiplicação.)
// "+" --> Adição, concatenação e utilizando "++" você incrementará
// "-" --> Subtração e utilizando "--" você decrementará
// "/" --> Divisão
// "*" --> Multiplicação ( OBS: Se utilizarmos "**" ele fará a potenciação o numero)
// "%" --> Retorna o resto de uma divisão
// Ordem das operações --> "()","**","*" ou "/" ou "%"

// Práticas \\

// const num1 = 10;
// const num2 = 5;
// console.log(num1 % num2);

// Exemplo de incrementação
// let contador = 1;
// contador++;
// console.log(contador);

// Exemplo de uma boa utilização do "+" ( Podemos utilizar com qualquer operador antes citado.)
// let contador = 0;
// contador += 2; // Contador = contador + 2; 
// contador += 2;
// contador += 2;
// console.log(contador);

// NaN --> Not a number
const num1 = 10;
// const num2 = 'Luiz';
// const num2 = '5'; // Assim apenas concatenaria
// const num2 = parseInt('5'); //parseFloat('5'); // Forma de passar uma string para number
const num2 = Number('5'); // Melhor forma de passar os valores de String para number's.
console.log(num1 * num2);