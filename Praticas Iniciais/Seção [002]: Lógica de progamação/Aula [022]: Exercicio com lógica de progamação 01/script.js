// Escrever uma função que recebe dois números e retorna o maior deles:

// Minha solução:
function max(x, y) {
    return x > y ? x : y;
}
// Arrow function (solução do professor[1]):
const max2 = (x, y) => x > y ? x : y;

console.log(max(3, 4));