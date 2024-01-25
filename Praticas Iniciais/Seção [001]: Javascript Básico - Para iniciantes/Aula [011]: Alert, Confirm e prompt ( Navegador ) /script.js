// Isto alerta o usuario com algo necessário. Caso o usuario clique no cancelar retornar um "boolean nome = false;" se clicar no ok será "boolean nome = true;" ( Porém a função em si não retorna nada )
// alert("Com a nossa mensagem")

// Esta função é como um "alert escrito", Onde nos damos ao usuario uma tela para escrever algo que será retornado em String.
// prompt("Digita ai chefe");

// Está função assim como um alert, porém ela pede ao usuario confirmar uma ação, assim retornando true ou false.
// confirm("Deseja realmente apagar?")
// const confirmar = confirm("Deseja realmente apagar?");


// EXERCICIO !! \\
// Recer dois prompts e realizar uma conta de soma para dois numeros e fazer um alert com o resultado

let num1 = prompt("Digite o primeiro numero: ") ;
let num2 = prompt("Digite o segundo numero: ");

num1 = Number(num1);
num2 = Number(num2);

alert(`O resultado de sua conta é: ${num1 + num2}`);