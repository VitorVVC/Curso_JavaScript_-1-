// Continue: Continua para a próxima iteração
// Break: Sai do laço

const numeros = [1, 2, 3, 4, 5, 6, 7, 8, 9];

// Exemplo 'CONTINUE';
// for (let numero of numeros) {
//     if (numero === 2) {
//         console.log('Pulei o numero DOIS');
//         continue;
//     }
//     console.log(numero);
// }

// Exemplo 'BREAK';
// for (let numero of numeros) {
//     if (numero === 7) {
//         console.log('Achei o numero 7')
//         break;
//     }
//     console.log(numero);
// }

// Anotacão importante: Sempre anterior a um break ou continue (fora de for como no exemplo a seguir) lembre de atualizar a variavel de controle.

let i = 0;
do {
    let numero = numeros[i];

    if (numero === 2) {
        console.log(`Pulei o numero DOIS`);
        i++;
        continue;
    }
    console.log(numero);
    if (numero === 7) {
        console.log(`7 Encontrado, saindo...`)
        i++;
        break;
    }
    i++;
} while (i < numeros.length);