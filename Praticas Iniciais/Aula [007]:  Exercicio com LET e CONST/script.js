// Nesta aula faremos um alguns exercicios sobre LET & Const

// [Exericio [1]]
// Temos que exibir: "Vitor Vargas Cardoso tem 18 anos, pesa 70kg e tem 1.75 de altura. Seu IMC é: 25.77554524241"

const nome = "Vitor";
const sobrenome = "Vargas Cardoso"
const idade = 18;
const peso = 70.5;
const alturaEmM = 1.76;

let indiceMassaCorporal;
let anoNascimento;

anoNascimento  = 2023 - idade;
indiceMassaCorporal = peso / (alturaEmM * alturaEmM);

// console.log(nome + " " + sobrenome + " tem " + idade +  " anos, pesa " + peso + " e tem " + alturaEmM + " de altura. \nSeu IMC é: "+indiceMassaCorporal); 
// Template String: Recomendado
console.log(`${nome} ${sobrenome} tem ${idade} anos e pesa ${peso} e tem ${alturaEmM} de altura. \nSeu IMC é: ${indiceMassaCorporal}`)