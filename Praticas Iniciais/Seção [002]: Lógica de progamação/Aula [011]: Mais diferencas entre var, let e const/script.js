// const verdadeira = true;

// // Let tem escopo de bloco { ... bloco }.
// // Var só tem escopo de função.

// let nome = 'Vitor'; // Criando
// var nome2 = 'Vitor'; // Criando 


// if (verdadeira) {
//     let nome = 'Otavio'; // Criando 
//     var nome2 = 'Otávio'; // Redeclarada
//     console.log(nome, nome2);

//     if (verdadeira) {
//         // Se não for encontrado neste bloco vai para o próximo e assim por diante até encontrar.
//         let nome = 'Outra coisa'
//     }
// }

// console.log(nome, nome2); // Printa o primeiro let e o ultimo var, pois o var só é "criado" do zero em funcões.


// Tudo criado nesta function, fica "salvo" e seguro dentro dela. Porém podemos acessar assim:
// fala.nome();
// Podemos "pescar" var's de outros vizinhos.
// var sobrenome = 'Qualquer'

// function fala() {
//     var nome = 'Luiz';
//     console.log(nome, sobrenome);
// }

// fala();


// Gera um "ERRO". Hosting: Var's que são declaradas como neste exemplo serão elevadas ao topo do código para serem lidas e retornam "undefined". Situação a qual não ocorre com LET
// console.log(sobrenome);
// var sobrenome = 'Teste';

// AGORA SIM gera um ERRO! Oque neste caso é melhor, para escrevermos um código de forma adequada.
console.log(sobrenome);
let sobrenome = `Teste`;