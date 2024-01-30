
const nome = prompt("Digite seu nome completo: ");


// Não chegamos a ver expressões lógicas em JS mas eu gostaria de tentar aplica-las

if (nome !== null && nome !== "") {
    const nomeSemEspacos = nome.replace(/\s/g, ''); // Usamos replace passando de argumento / para delimitar expressões regulares, \s pois é um caractere de espaco em branco e o modificador G para atingir globalmente esta substituicao e não apenas na primeira, '' é a String vazia que será substituida
    const quantidadeLetras = nomeSemEspacos.length; // Após 
    const segundaLetra = nomeSemEspacos.charAt(1);
    // const segundaLetra = nomeSemEspacos[1]; // Da na mesma do código acima
    const indicePrimeiroA = nomeSemEspacos.toLowerCase().indexOf('a');
    const indiceUltimoA = nomeSemEspacos.toLowerCase().lastIndexOf('a');
    const ultimasTresLetras = nomeSemEspacos.slice(-3);
    const arrayDePalavras = nome.split(' ');
    const nomeMaiusculo = nome.toUpperCase();
    const nomeMinusculo = nome.toLowerCase();

    
    document.body.innerHTML = `O nome do usuario é: <strong>${nome}</strong><br>`;
    document.body.innerHTML += `Seu nome tem  <strong>${quantidadeLetras}</strong> letras<br>`;
    document.body.innerHTML += `A segunda letra do seu nome é: <strong>${segundaLetra}</strong><br>`
    document.body.innerHTML += `Qual o primeiro indice da letra do "A" em seu nome: <strong>${indicePrimeiroA}<strong><br>`;
    document.body.innerHTML += `Qual o ultimo indice da letra "a" em seu nome: <strong>${indiceUltimoA}</strong> <br>`;
    document.body.innerHTML += `As últimas tres letras de seu nome são: <strong>${ultimasTresLetras}</strong><br>`;
    document.body.innerHTML += `As palavras do seu nome são: <strong>${arrayDePalavras}</strong><br>`;
    document.body.innerHTML += `Seu nome com letras maiúsculas: <strong>${nomeMaiusculo}</strong><br>`;
    document.body.innerHTML += `Seu nome com letras minúsculas: <strong>${nomeMinusculo}</strong><br>`;
    
    
} else{
    document.body.innerHTML = `Você não forneceu um nome.`;
}
// document.write(`O nome é : ${nome}`) // Document é parte do objeto WINDOW ( Não existente no node).
// window.document.write("Alguma coisa") 

