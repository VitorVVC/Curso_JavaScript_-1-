function mostraHora() {
    let data = new Date();

    return data.toLocaleString('pt-BR', {
        hour12: false
    })
}

// Vai setar um intervalo de tempo para a funcão ser executada
const timer = setInterval(function () {
    console.log(mostraHora());
}, 1000); // Passa a funcão, e 1s em MILISEGUNDOS

setTimeout(function () {
    clearInterval(timer);
}, 10000);

setTimeout(function () {
    clearInterval(timer);
}, 3000)
setTimeout(function () {
    console.log('Olá mundo');
}, 5000)