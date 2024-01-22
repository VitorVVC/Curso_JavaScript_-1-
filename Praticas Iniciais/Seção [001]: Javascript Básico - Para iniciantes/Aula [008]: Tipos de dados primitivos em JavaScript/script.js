// Tipos de dados primitivos --> String, number, undefined, null e boolean. ("symbol?")

const nome = 'Luiz'; // String
const nome1 = 'Luiz'; // String
const nome2 = 'Luiz'; // String

const num1 = 10; // Number
const num2 = 10.52; // Number
let nomeAluno; // undefined = Não aponta para nenhum local na memória
let sobrenomeAluno = null; // Nulo = Não aponta para nenhum local na memória

// Null != Undefined:
    // Null nós utilizamos como progamadores, em N momento do código. Enquanto undefined é o padrão do JS
    // Exemplo: No seu site voce tem 3 cores: Branco, Preto ou nenhuma. Ou seja: cor = branco; || cor = black; || cor = null;

const boolean = false; // Boolean = Variavel que só pode ser TRUE ou FALSE;
    // Exemplo: No sistema escolar temos a variavel boolean aprovado, que é true ou false referente a outros calculos de nota.

console.log(typeof "Qualquer coisa para poder ler sua variavel");

// Exemplo que difere dos dados por referencia, nesse caso os dados primitivos atuam desta forma.
let a = 2;
const b = a;
console.log(a,b); // 2 , 2

a = 3;
console.log(a,b); // 3 , 2


// Dados por referencia != Dados primitivos

// Leve spoiler do que é dados por referencia !!
// const a = [1,2];
// const b = a;

// console.log(a,b);

// b.push(3)
// console.log(a,b);
