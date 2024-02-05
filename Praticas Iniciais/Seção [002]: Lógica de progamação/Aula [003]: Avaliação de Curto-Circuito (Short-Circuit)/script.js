// Com "AND" se ele encontrar algo falso ele para e retorna o "valor mesmo"
// Em JS tudo será avaliado em true ou false. "Valores lidos em FALSE" ( falsy values ): 0, ("") String vazia, null / undefined e NaN. Oque for diferente disso será true.

// console.log('Vitor Vargas' && 0 && 'Maria'); // Retorna ZERO
// console.log('Vitor Vargas' && true && 'Maria'); // Retorna MARIA
// console.log('Vitor Vargas' && true && NaN); // Retorna NaN

// console.log(`Luiz` && `Maria`); // Rettorna o ultimo ( Maria ).

// Ele encontrará um valor false e não exibirá a funcão
// function falaOi(){
//     return `Oi`;
// }

// const vaiExecutar = false; // Passando isso não executa.
// const executa = `João`; // Passando isso, executa.

// console.log(executa && falaOi());


// Com OR:
// || --> True || False --> Vai retornar o "Valor verdadeiro." No caso o PRIMEIRO valor verdadeiro.

// console.log(0 || false || null || "Vitor Vargas"|| true); // Exibe o Vitor Vargas

// const corUsuario = null;
// const corPadrao = corUsuario || "Preto";

// console.log(corPadrao)

const a = 0;
const b = null;
const c = `false`; // Este que foi exibido ! Caso tudo seja avaliado em FALSE, será retornado o valor da ultima false.
const d = false;
const e = NaN;

console.log(a || b || c || d || e);