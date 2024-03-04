// IIFE -> Immediately invoked function expression
// Função que se invoca sem nome.
(function (idade, peso, altura) {

    const sobrenome = 'Miranda';
    function criaNome(nome) {
        return nome + " " + sobrenome;
    }

    function falaNome() {
        console.log(criaNome('Luiz'))
    }

    falaNome();
    console.log(idade, peso, altura.toFixed(2));
})(30, 80, 1.80);
