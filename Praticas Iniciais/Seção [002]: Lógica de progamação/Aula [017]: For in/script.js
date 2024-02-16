const frutas = ['Pera', 'Maçã', 'Uva', ''];

// Com for clássico
// for (let i = 0; i < frutas.length; i++) {
//     console.log(frutas[i]);
// }

// Com for-in (Ele le o indice do array ou chaves do objeto)
// for(let indice in frutas){
//     console.log(frutas[indice]);
// }

// For in com OBJETO
const pessoa = {
    nome: 'Vitor',
    sobrenome: 'Vargas',
    idade: '19',
};

for(let i in pessoa){
    // console.log(pessoa['nome']); // Assim retornamos o nome da pessoa
    console.log(i, pessoa[i]); // Exibe por exemplo: `Nome Vitor` ... 
}
