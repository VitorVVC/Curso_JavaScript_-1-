// For of é mais utilizado com arrays e qualquer coisa que tenha indices, para podermos iterar pelo seus produtos

// FOR CLÁSSICO = Geralmente com iteráveis (Arrays, Strings)
// FOR IN = Retorna o INDICE ou CHAVE (Strings, Arrays ou Objetos)
// FOR OF = Retorna o VALOR em si (Itéraveis: Arrays, Strings)


const nome = 'Vitor Vargas Cardoso';
const nomes = ['Vitor', 'Vargas', 'Cardoso']
const pessoa = {
    nome: 'Vitor',
    sobrenome: 'Vargas'
};

// For clássico
// for (let i = 0; i < nome.length; i++) {
//     console.log(nome[i]);
// }

// For in
// for (let i in nome) {
//     console.log(nome[i]);
// }

// For of 
// for (let valor of nomes) {
//     console.log(valor); // Ao inves de retornar o indice, retorna o valor.
// }

// For each
// nomes.forEach(function (elemento, indice, array) {
//     console.log(elemento, indice, array);
// });

// ERRO !! Objeto pessoa não é ITERAVEL, pois nn tem indice
for (let valor of pessoa) {
    console.log(valor, pessoa[valor]);
}