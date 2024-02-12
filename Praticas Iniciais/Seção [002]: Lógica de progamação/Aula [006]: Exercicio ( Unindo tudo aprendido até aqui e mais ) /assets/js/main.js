// Função principal que fará o código funcionar como um todo, e que dele se destrinchará novas funções.
const calcImc = () => {
    // Após capturar o formulário através do querySelector(#form) (Pegando pelo ID).
    const form = document.querySelector('#form')
    form.addEventListener('submit', function (e) {
        // Capturamos o evento de submit e previnimos de ele atualizar a página, também atribuimos ao inputPeso e inputAltura os valores capturamos por esse evento que busca no formulário os ids de peso e altura
        e.preventDefault();
        const inputPeso = e.target.querySelector("#peso");
        const inputAltura = e.target.querySelector('#altura');

        // Agora passamos para numbers os valores do input
        const peso = Number(inputPeso.value);
        const altura = Number(inputAltura.value);

        // Com isso, tratamos com condicionais caso seja diferente de true, no caso não seja um number
        // Tratamos passando para a função setResultado a mensagem e o estado false, que seria o estado de "gerou um erro"
        if (!peso && !altura) {
            setResultado('Peso e altura inválidos', false)
            return;
        }

        if (!peso) {
            setResultado('Peso Inválido', false);
            return;
        }

        if (!altura) {
            setResultado('Altura Inválida', false);
            return;
        }

        // Atribuimos a variaveis os valores da função de calcular o IMC e de atribuir o IMC a um "nivel"
        const imc = getImc(peso, altura);
        const nivelImc = getNivelImc(imc);

        // Enviamos para a setResultado a mensagem a seguir e que deu true "deu certo".
        const msg = `Seu IMC é ${imc} (${nivelImc}).`
        setResultado(msg, true);
    });

    // Função que recebe um IMC como parametro para "calcular" p nível de IMC do usuário
    const getNivelImc = (imc) => {
        const nivel = ['Abaixo do peso', 'Peso normal', 'Sobrepeso', 'Obesidade grau 1', 'Obesidade grau 2', 'Obesidade grau 3'];

        if (imc >= 39.9) return nivel[5];
        if (imc >= 34.9) return nivel[4];
        if (imc >= 29.9) return nivel[3];
        if (imc >= 24.9) return nivel[2];
        if (imc >= 18.5) return nivel[1];
        if (imc < 18.5) return nivel[0];
    }

    // Função que  calcula o IMC e o retorna com duas casas decimais
    const getImc = (peso, altura) => {
        const imc = peso / altura ** 2;
        return imc.toFixed(2);
    }

    // Função para criar um paragrafo
    const criaP = () => {
        const p = document.createElement('p');
        return p;
    }

    // Pequena função para exibir a mensagem. Recebe true or false para saber se "deu certo" ou não
    const setResultado = (msg, isValid) => {
        const resultado = document.querySelector('#resultado');
        resultado.innerHTML = '';
        const p = criaP();

        if (isValid) {
            p.classList.add('paragrafo-resultado')
        } else {
            p.classList.add('bad')
        }
        
        p.innerHTML = msg;
        resultado.appendChild(p);
    }
}

calcImc()