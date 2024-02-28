// Declaração de função (Funcion hoisting);
falaOi(); // Isto funciona por conta do hoisting.
function falaOi(){
    console.log('Oie');
}

// First class objects (Objetos de primeira classe)
const souUmDado = function(){
    console.log(`Sou um dado`);
}

souUmDado();

function executaFuncao(funcao){
    console.log(`Vou executar sua funcao abaixo`);
    funcao();
}

executaFuncao(souUmDado);

// Arrow function
const funncaoArrow = () =>{
    console.log('Sou um arrow function');

    setInterval(umaFuncao(),1000);
}

// Dentro de um objeto
const obj = {
    falar(){
        console.log("Estou falando")
    }
}
obj.falar();