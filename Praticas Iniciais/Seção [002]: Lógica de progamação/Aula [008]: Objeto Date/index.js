// https://developer.mozilla.org/pt-BR/docs/Web/JavaScript/Reference/Global_Objects/Date


// Momento um \\
// const tresHoras = 60 * 60 * 3 * 1000; // Vezes mil pois JS é em milesimos de segundos
// const umDia = 60 * 60 * 24 * 1000; // Um dia em milesimos de segundos
// const data = new Date(0 + tresHoras + umDia); // Deveria ser : 01/01/1970 (Timestamp unix, epoca unix, marco zero)
// // Data no formato da maquina
// console.log(data.toString());

// Momento DOIS \\
// const data = new Date(2019, 3, 20, 15, 14, 27);// Dia 20 de abril as 15:14:27 (Sim, tres é abril pois a contagem comeca no zero) // Ano, Mes, Dia, Hora, Minuto, Segundo e miliseegundos
// const data = new Date('2019-04-20 20:20:59.100');
// console.log('Dia:',data.getDate());
// console.log('Mes:',data.getMonth() + 1); // Mes comeca do ZERO
// console.log('Ano:',data.getFullYear());
// console.log('Hora:',data.getHours());
// console.log('Minuto:',data.getMinutes());
// console.log('Segundos:',data.getSeconds());
// console.log('Milesimos de segundo:',data.getMilliseconds());
// console.log('Dia:',data.getDay()); // 0 - Domingo - 6 Sábado
// console.log(data.toString());
// // console.log(data.toDateString()); // Exibe: Mes: X + Dia + Ano

// console.log(Date.now()); // Obtem os milesimos de segundos do marco zero até hoje


// Momento TRES \\

const formataData = (data) => {
    const dia = zeroAEsquerda(data.getDate());
    const mes = zeroAEsquerda(data.getMonth()) + 1;
    const ano = zeroAEsquerda(data.getFullYear());
    const hora = zeroAEsquerda(data.getHours());
    const min = zeroAEsquerda(data.getMinutes());
    const seg = zeroAEsquerda(data.getSeconds());

    return `${dia}/${mes}/${ano} ${hora}:${min}:${seg}`;
}

const zeroAEsquerda = (num) => {
    return num >= 10 ? num : `0${num}`
}

const data = new Date();
const dataBrasil = formataData(data);
console.log(dataBrasil);