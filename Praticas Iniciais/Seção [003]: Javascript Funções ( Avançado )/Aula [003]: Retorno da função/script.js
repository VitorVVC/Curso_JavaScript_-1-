function soma(a, b) {
    return a + b;
}
// A diferenca entre elas é nitida, uma retorna um valor.. a outra apenas exibe-o
function somaDois(a, b) {
    console.log(a + b);
}
// Funcao util, que não retornam valor e sim realizam alguma funcionabilidade
// document.addEventListener('click', function () {
//     document.body.style.backgroundColor = 'red';
// })

function criaPessoa(nome, sobrenome) {
    return { nome: nome, sobrenome: sobrenome }
}
// Ambas fazem a mesma coisa, porém com funcão fica "melhor";
const p1 = criaPessoa('Luiz', 'Pessoa');
const p2 = {
    nome: 'João',
    sobrenome: 'Oliveira'
};

function falaFrase(comeco) {
    function falaResto(resto) {
        return comeco + "" + resto;
    }
    return falaResto;
}

const olaMundo = falaFrase('Olá ', 'mundo')
console.log(olaMundo); // Retorna [Function: falaResto];
console.log(olaMundo('Mundo!')); // Agora retorna de forma correta

function duplica(n) {
    return n * 2;
}
