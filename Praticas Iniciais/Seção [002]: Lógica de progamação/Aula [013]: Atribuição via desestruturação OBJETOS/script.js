const pessoa = {
    nome: 'Vitor',
    sobrenome: 'Vargas',
    idade: 18,
    endereco: {
        rua: 'R das dores',
        numero: 'Quatra 14'
    }
};

// Atribuição padrão
// const nome = pessoa.nome;
// console.log(nome);

// Atribuição desestruturação 
// Passando não existe caso o nome seja "undefined";
// Passando assim, pegamos a chave nome e criamos ela com nome de "teste"
const { nome: teste = 'Não existe', sobrenome, idade } = pessoa;
const { endereco: { rua, numero } } = pessoa;
const { nome, ...resto } = pessoa;
// console.log(teste, sobrenome, idade);
// console.log(rua, numero);
console.log(nome, resto);
