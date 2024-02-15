// For clássico pois muitas linguagens adotam desta forma.
// Variavel de controle; Quando parar; Iterador{} 
// i = index 

// for (let i = 0; i <= 10; i++) {
//     const par = i % 2 === 0 ? `par` : `impar`;
//     console.log(i, par);
// }

const frutas = ['Maça', 'Pera', 'Uva', 'Laranja', 'Banana'];

for (let i = 0; i < frutas.length; i++) {
    console.log(`Indice ${i}:`, frutas[i]);
}