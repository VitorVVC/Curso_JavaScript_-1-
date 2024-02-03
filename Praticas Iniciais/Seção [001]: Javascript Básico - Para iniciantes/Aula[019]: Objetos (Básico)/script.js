// Leve papo sobre arrays com const. Podemos reatribuir valor dendro de arrays (Elementos), porém não o objeto array em si
// const array = [1, 2, 3];
// array.push(4);
// array[0] = 'Luiz';
// console.log(array);
// array = 'Outra'; // Errado !!

// Para evitar isso:
// const nome01 = 'Luiz';
// const sobrenome01 = 'Miranda'
// const idade01 = 25;

// const nome02 = 'Maria';
// const sobrenome02 = 'Oliveira'
// const idade02 = 52;

// const nome03 = 'Miranda';
// const sobrenome03 = 'Luiz'
// const idade03 = 34;
// Utilizaremos OBJETOS:
// const pessoa1 = {
//     nome: 'Luiz',
//     sobrenome: 'Miranda',
//     idade: 25
// };
// const pessoa2 = {
//     nome: 'Maria',
//     sobrenome: 'Oliveira',
//     idade: 52
// };
// const pessoa3 = {
//     nome: 'Miranda',
//     sobrenome: 'Luiz',
//     idade: 34
// };
// console.log(pessoa1.nome);
// console.log(pessoa1.sobrenome);
// console.log(pessoa1.idade);
// Ainda está bem extenso, vamos fazer desta forma:

// Function padrão: \\
// function criaPessoa(nome, sobrenome, idade) {
//     return { nome, sobrenome, idade }
// };

// Com Arrow Function:
// const criaPessoa = (nome, sobrenome, idade) => ({
//     nome: nome,
//     sobrenome: sobrenome,
//     idade: idade
// });
// // MUUUUUITOOOO melhor, mais facil, menos extenso e mais legivel, coerente e agradavel aos olhos !!
// const pessoa1 = criaPessoa(`Luiz`, `Miranda`, 25);
// const pessoa2 = criaPessoa(`Maria`, `Oliveira`, 52);
// const pessoa3 = criaPessoa(`Miranda`, `Luiz`, 34);

// console.log(pessoa1.nome, pessoa2.nome);

// Podemos criar objetos utilizando variavel:
const pessoa1 = {
    nome: `Luiz`,
    sobrenome: `Miranda`,
    idade: 25,

    // Simples exemplo que um objeto pode ter FUNCOES proprias, porém neste contexto faz mais sentido possuir uma function fala fora do objeto pessoal, ja que varias coisas falam
    fala() {
        console.log(`Me chamo ${this.nome} ${this.sobrenome} e tenho ${this.idade} anos`);
    },

    incrementalIdade() {
        this.idade++;
    },

    falaIdade() {
        console.log(`Tenho ${this.idade} anos`);
    }
};

pessoa1.falaIdade();
pessoa1.incrementalIdade();
pessoa1.falaIdade();
pessoa1.incrementalIdade();
pessoa1.falaIdade();
pessoa1.incrementalIdade();
pessoa1.falaIdade();
pessoa1.incrementalIdade();
pessoa1.falaIdade();