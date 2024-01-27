let umaString = `"Um Texto"`; // --> Melhor maneira
let umaStringFeia = "Um \"texto\""; // Barra invertida é um caracter de escape


console.log(umaStringFeia.charAt(1)); // Pegamos pelo character
console.log(umaString.concat(" do neida")); // Concatenar, porém é a "mesma coisa" do mais
console.log(umaString + ' do neida'); // Mesma coisa
console.log(`${umaString} do neida`); // Melhor forma, minha opinião.
console.log(umaString.indexOf('Texto')) // Retorna em que caracter a palavra em questão é iniciada, se não encontrada retorna -1.
console.log(umaString.lastIndexOf('o')) // Retorna em que caracter ( de trás pra frente) a palavra em questão
console.log(umaString.lastIndexOf('o,3')) // Podemos usar virgula e dizer em que caracter queremos que ele comece
console.log(umaString.match(/[a-z]/g)); // Uma expressão regular, que procura de a - z todas as letras minusculas que existem na palavra fornecida
console.log(umaString.search(/m/)); // Retorna em qual indice está a letra que passei
console.log(umaString.replace('Um', 'Outra')); // Troca um por outra
console.log(umaString.length); // Retorna o tamanho desta String
console.log(umaString.slice(3,9)); // Retorna oque há entre esses indicies
console.log(umaString.slice(-3)); // Pode ser usado desta forma, para "inverter"
console.log(umaString.split(' ')); // Retorna cada palavra no indice deste split
console.log(umaString.split(' ',1)); // Pode ser usado desta forma, para limitar a quantidade de vezes que será usada
console.log(umaString.toUpperCase()); // Deixa em maisculo
console.log(umaString.toLowerCase()); // Deixa em minusculo
