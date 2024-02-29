function funcao(a, b, c, d, e, f) {
    // Arguments servem para "capturarmos" o argumento do usuario.
    // console.log(arguments[0]);
    let total = 0;
    for (let argumento of arguments) {
        total += argumento;
    }
    console.log(total, a, b, c);
}
// JS não liga necessariamente para parametros "passados" de forma incorreta ( SOMENTE PARA FUNCTIONS!! );
funcao(1, 2, 3, 4, 5, 6, 7);

function funcaoDois(a, b) {
    // Forma mais "arcaica"
    b = b || 0;
    console.log(a + b);
}

function funcaoDoisModerna(a, b = 2, c = 4) {
    console.log(a + b + c)
}
funcaoDois(2);
// ERRO !! (Somente assume o valor de B, se passado por parametro se for undefined)
funcaoDoisModerna(2, undefined, 20);

// Desestruturacao OBJ
function melhorEscrita({ nome, sobrenome, idade }) {
    console.log(nome, sobrenome, idade);
}

melhorEscrita({ nome: 'Luiz', sobrenome: 'Otávio', idade: 20 });

// Desestruturacao de array
function desestruturaArray([valor1, valor2, valor3]) {
    console.log(valor1, valor2, valor3);
}

desestruturaArray['Luiz', 'Otávio', 20];
console.log("==============================")
// Função mais real
function conta(operador, acumulador, ...numeros) {
    for (let numero of numeros) {
        if (operador === "+") acumulador += numero;
        if (operador === "-") acumulador -= numero;
        if (operador === "/") acumulador /= numero;
        if (operador === "*") acumulador *= numero;
    }
    console.log(acumulador);
}
// Function expression 
const contaExpression = function (operador, acumulador, ...numeros) {
    for (let numero of numeros) {
        if (operador === "+") acumulador += numero;
        if (operador === "-") acumulador -= numero;
        if (operador === "/") acumulador /= numero;
        if (operador === "*") acumulador *= numero;
    }
    console.log(acumulador);
};
// Arrow Function
// Arrow function não tem arguments
const contaArrow = (operador, acumulador, ...numeros) => {
    console.log(arguments);
};
conta('+', 0, 20, 30, 40, 50);
conta('-', 0, 20, 30, 40, 50);
conta('/', 1, 20, 30, 40, 50); // 8.333333333333334e-7 (Retorna esse treco assustador);
conta('*', 1, 20, 30, 40, 50);

contaArrow('*', 1, 20, 30, 40, 50); // Retorna um node.

