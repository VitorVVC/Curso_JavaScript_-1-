// Com VAR não gera essa mau educação tremenda de existir duas VAR'S com mesmo nome e valores diferentes

var nome = 'Luiz';
var nome = 'Otávio';

console.log(nome);

// O interpretador entende como "var"
nome = 'Cachorro'; // NÃO FAÇA ISSO !

console.log(nome);

// Não dá certo com let [ Ponto positivo! ]
let nome = 'Luiz';
nome = 'Otávio';


