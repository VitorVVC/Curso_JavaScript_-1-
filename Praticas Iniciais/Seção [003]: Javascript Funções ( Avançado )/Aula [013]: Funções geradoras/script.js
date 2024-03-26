// Return -> "Quebra e já de cara retorna saindo da função"
// Yield


function* geradoraUm() {
    // Código qualquer
    yield 'Valor 1';
    // Código qualquer
    yield 'Valor 2';
    // Código qualquer
    yield 'Valor 3';
}

const g1 = geradoraUm();
// console.log(g1.next().value); // Entrega o primeiro yield, o 'Valor 1';
// console.log(g1.next().value); // Entrega o segundo yield, o 'Valor 2';
// console.log(g1.next());
// console.log(g1.next()); // Done retorna true quando acabar os valores a serem lidos.

// Também podemos iterar até o ultimo valor dessa função geradora.
// for (let valor of g1) {
//     console.log(valor);
// }

// Contador infinito.
function* geradoraDois() {
    let i = 0;
    while (true) {
        yield i;
        i++;
    }
}

const g2 = geradoraDois();
// console.log(g2.next().value);
// console.log(g2.next().value);
// console.log(g2.next().value);


function* geradoraTres() {
    yield 0;
    yield 1;
    yield 2;
}

function* geradoraQuatro() {
    yield* geradoraTres(); // Delegamos que a geradoraTres faca as tres primeiras yields, para "poupar tempo";
    yield 3;
    yield 4;
    yield 5;
}

const g4 = geradoraQuatro();
// for (let valor of g4) {
//     console.log(valor);
// }

function* geradoraCinco() {
    yield function () {
        console.log('Vim do yield UM');
    }

    // ...

    yield function () {
        console.log('Vim do yield DOIS');
    }
}

const g5 = geradoraCinco();
const funcUm = g5.next().value;
const funcDois = g5.next().value;

funcUm()
funcDois();