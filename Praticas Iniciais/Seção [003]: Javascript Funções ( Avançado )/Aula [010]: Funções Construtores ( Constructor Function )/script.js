// Funcao Construtora -> Objetos
// Funcao fabrica -> Objetos
// Na construtora, realmente construimos um objeto, enquanto no fabrica a gente somente está fabricando um objeto, já "pronto".

// Agora com letra maiuscula (Convenção).
function Pessoa(nome, sobrenome) {
    const metodoInterno = () => {
        return Math.floor(Math.random() * 11);
    }

    const ID = metodoInterno();

    this.nome = nome;
    this.sobrenome = sobrenome;

    this.metodo = () => {
        console.log(`Ola, sou um método!\nFui chamado por ${nome}`);
    }
}

// Na funcão construtora a gente TEM QUE POR O "NEW";
const p1 = new Pessoa('Vitor', 'Vargas');
const p2 = new Pessoa('Nicolle', 'Luisa');

console.log(typeof p1);
p1.metodo();
