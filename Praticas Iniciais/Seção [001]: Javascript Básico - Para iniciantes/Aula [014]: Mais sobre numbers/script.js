// Padrão de conta JS: IEEE 754-2008
let num1 = 1500.92193893741; // Number
let num2 = 2.5; // Number
let num3 = 10; // Number

// Conversão de num para String:
    //num1 = num1.toString() // Converte "Para sempre"
    // console.log(num1.toString() + num2);
    // console.log(typeof num1);
    // console.log(typeof num1.toString());

// Representação binária de um num:
    //console.log(num1.toString(2));

// Melhoria de exibir expressão ( Arrendodar ):
    // console.log(num1.toFixed(2)) // Para arrendodar em duas casas após virgula  
    // console.log(num1.toFixed(4)) // Para arrendodar em quatro casas após virgula  

// Retorna se é ou não um inteiro:
    // console.log(Number.isInteger(num3)); // True (Valor = 10);  
    // console.log(Number.isInteger(num1)); // False (Valor = 1500.92193893741);  

// Retorna se é ou não um NaN:
    // console.log(Number.isNaN(num3 * 'Qualquer frase generica')); // True
    // console.log(Number.isInteger(num1)); // False 


// Exemplo de imprecisão do modelo que o JS adota ( Essa imprecisão é)
    // let numTeste1 = 0.7;
    // let numTeste2 = 0.1;
    // numTeste1 += numTeste2;
    // Resultado: 0.7999999999999999
    // console.log(numTeste1.toFixed(1)); // "Resolve o problema aos nossos olhos"
    // numTeste1 = parseFloat(numTeste1.toFixed(1)); // Agora sim resolvemos o problema, pois passamos o num para existir casas decimais e quando for checkado por funcoes como "isIntenger()" retornar o valor correto
    // numTeste1 = Number(numTeste1.toFixed(1)); // Outra boa opção

    // Melhor opcão para resolução seria em final de contas fazer:
        // numTeste1 = Number(numTeste1.toFixed(2));
    // Caso queira por exemplo mostrar o valor final de um carrinho:
        // console.log(Number(Number.isInteger(numTeste1)));
// Forma de corrigir o erro acima com CONTAS:
    // let numTeste1 = 0.7;
    // let numTeste2 = 0.1;

    // numTeste1 = ((numTeste1 * 100) + (numTeste2 * 100)) / 100; // 0.8
    // numTeste1 = ((numTeste1 * 100) + (numTeste2 * 100)) / 100; // 0.9
    // numTeste1 = ((numTeste1 * 100) + (numTeste2 * 100)) / 100; // 1.0
    // console.log(numTeste1);