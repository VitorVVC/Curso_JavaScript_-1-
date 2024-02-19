// Escrever uma função que recebe um numero e retorne:
// Num é divisivel por 3 = Fizz
// Num é divisivel por 5 = Buzz
// Num é divisivel por 3 e  5 = FizzBuzz
// Num não é divisivel por 3 e 5 = Retorne o proprio num
// Checar se o número é realmente um num
// Use a função com nums de 0 a 100

// Minha solução:
const main = (num) => {
    const check = () => {
        return typeof num == 'number' ? num : 0;
    }
    check(num);
    const numName = () => {
        if (num % 3 === 0 && num % 5 === 0) return 'FizzBuzz';
        if (num % 3 === 0) return 'Fizz';
        if (num % 5 === 0) return 'Buzz';
        return num;
    }
    return numName();
}
console.log('a', main('a'));
for (let i = 0; i <= 100; i++) {
    console.log(i, main(i));
}

// // Solução professor: 
// function fizzBuzz(numero) {
//     if (typeof numero !== 'number') return numero;
//     if (numero % 3 === 0 && numero % 5 === 0) return 'FizzBuzz'
//     if (numero % 3 === 0) return 'Fizz';
//     if (numero % 5 === 0) return 'Buzz';
//     return numero;
// }
// for (let i = 0; i <= 100; i++) {
//     console.log(i, fizzBuzz(i));
// }
// console.log('a', fizzBuzz('a'));