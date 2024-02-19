function relogio() {

    function criaHoraSegundos(segundos) {
        const data = new Date(segundos * 1000); // O JS recebe em MS então passamos para S multiplicando

        return data.toLocaleTimeString('pt-BR', {
            timeZone: 'UTC',
            hour12: false
        })
    }

    const relogio = document.querySelector('.timer');
    const iniciar = document.querySelector('.iniciar');
    const pausar = document.querySelector('.pausar');
    const zerar = document.querySelector('.zerar');

    let segundos = 0;
    let timer;

    function iniciaRelogio() {
        timer = setInterval(function () {
            segundos++;
            relogio.innerHTML = criaHoraSegundos(segundos);
        }, 1000)
    }

    document.addEventListener('click', function (e) {
        // console.log(e.target); // Encontra o que o usuario está clicando
        const el = e.target;
        if (el.classList.contains('iniciar')) {
            relogio.classList.remove('red');
            clearInterval(timer);
            iniciaRelogio();
        }

        if (el.classList.contains('zerar')) {
            relogio.classList.remove('red');
            clearInterval(timer);
            segundos = 0;
            relogio.innerHTML = '00:00:00';
        }
        if (el.classList.contains('pausar')) {
            relogio.classList.add('red');
            clearInterval(timer);
        }
    });
}
relogio();