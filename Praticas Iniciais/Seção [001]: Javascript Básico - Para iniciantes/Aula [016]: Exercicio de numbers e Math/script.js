const inputNumero = prompt(`Digite um numero: `);
const numTitulo = document.getElementById(`numero-titulo`);
const divTexto = document.getElementById(`texto`);

const numero = parseFloat(inputNumero);

if (isNaN(numero)) {
    const titulo = document.getElementById(`titulo`);
    titulo.innerHTML = "Deixa de ser abestado";
} else {
    numTitulo.innerHTML = Number(numero);

    const raiz = Math.sqrt(numero); // numero ** 0.5
    const isInteger = Number.isInteger(numero);
    const isNan = Number.isNaN(numero);
    const arrendodadoPraCima = Math.ceil(numero);
    const arrendodadoPraBaixo = Math.floor(numero);
    const comDuasCasasDecimais = parseFloat(numero.toFixed(2));

    divTexto.innerHTML = `<p> Raiz quadrada: ${raiz}</p><p> ${numero} é inteiro? ${isInteger}</p><p> É NaN? ${isNan}</p><p> Arrendondando para baixo: ${arrendodadoPraBaixo}</p><p> Arrendondando para cima: ${arrendodadoPraCima}</p><p> Com duas casas decimais: ${comDuasCasasDecimais}</p>`;
}
