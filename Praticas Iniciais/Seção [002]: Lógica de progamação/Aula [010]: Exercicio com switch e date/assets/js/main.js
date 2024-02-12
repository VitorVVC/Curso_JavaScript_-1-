// Solução "CRUA" onde das tres é a "pior", pois passa de 50 linhas de código, e pode ser muito melhor feita, como veremos a seguir
const noReadingDocumentation = () => {
    const h1 = document.querySelector('.container h1');
    const data = new Date();

    function getDiaSemanaTexto(diaSemana) {
        let diaSemanaTexto;
        switch (diaSemana) {
            case 0: diaSemanaTexto = `Domingo`;
                return diaSemanaTexto;
            case 1: diaSemanaTexto = `Segunda-Feira`;
                return diaSemanaTexto;
            case 2: diaSemanaTexto = `Terça-Feira`;
                return diaSemanaTexto;
            case 3: diaSemanaTexto = `Quarta-Feira`;
                return diaSemanaTexto;
            case 4: diaSemanaTexto = `Quinta-Feira`;
                return diaSemanaTexto;
            case 5: diaSemanaTexto = `Sexta-feira`;
                return diaSemanaTexto;
            case 6: diaSemanaTexto = `Sabado`;
                return diaSemanaTexto;
            default: `Bom dia`;
        }
    }

    function getNomeMes(numMes) {
        let mesTexto;
        switch (numMes) {
            case 0: mesTexto = `Janeiro`;
                return mesTexto;
            case 1: mesTexto = `Fevereiro`;
                return mesTexto;
            case 2: mesTexto = `Março`;
                return mesTexto;
            case 3: mesTexto = `Abril`;
                return mesTexto;
            case 4: mesTexto = `Maio`;
                return mesTexto;
            case 5: mesTexto = `Junho`;
                return mesTexto;
            case 6: mesTexto = `Julho`;
                return mesTexto;
            case 7: mesTexto = `Agosto`;
                return mesTexto;
            case 8: mesTexto = `Setembro`;
                return mesTexto;
            case 9: mesTexto = `Outubro`;
                return mesTexto;
            case 10: mesTexto = `Novembro`;
                return mesTexto;
            case 11: mesTexto = `Dezembro`;
                return mesTexto;
            default: `Bom dia`;
        }
    }

    function criaData(data) {
        const diaSemana = data.getDay()
        const numeroMes = data.getMonth()

        const nomeDia = getDiaSemanaTexto(diaSemana);
        const nomeMes = getNomeMes(numeroMes);


        return (`${nomeDia}, ${zeroAEsquerda(data.getDate())} de ${nomeMes} de ${zeroAEsquerda(data.getFullYear())} ${zeroAEsquerda(data.getHours())}: ${zeroAEsquerda(data.getMinutes())}`)
    }

    const zeroAEsquerda = (num) => {
        return num >= 10 ? num : `0${num}`
    }

    h1.innerHTML = criaData(data);
}

// noReadingDocumentation();

// "Melhor" solucão, onde usamos oque a linguagem nos fornece de melhor para estarmos trabalhando e não precisarmos ter de criar soluções mais "rústicas".
const readingDocumentation = () => {
    const h1 = document.querySelector('.container h1');
    const data = new Date();

    // Na versão do professor usamos a linha abaixo. Porém timeStyle deixou de ser acessivel apartir da funcao de localeDateString, portanto fiz dessa forma. Onde concateno a data pela funcao LocaleDateString passando a dataStyle como full e depois concateno com toLocaleTimeString passando dessa vez o estilo apenas do tempo
    // h1.innerHTML = data.toLocaleDateString('pt-BR', { dateStyle: 'full', timeStyle: 'short' }); \\ 
    // h1.innerText = data.toLocaleDateString('pt-BR', { dateStyle: 'full' }) + " " + data.toLocaleTimeString('pt-BR', { timeStyle: 'short' });

    // Porém brincando um pouco mais com estas funcões descubro a funcao "substituta" para os erros acima. toLocaleString, que pede assim como as anteriores, um LOCAL e as opcões de "exibicao", que dessa vez não é "nichada" apenas para tempo ou data, oque limitava a solução anterior.
    h1.innerHTML = data.toLocaleString('pt-BR', { dateStyle: 'full', timeStyle: 'short' });
}

readingDocumentation();


// Solução encima da noReadingDocumentation, porém sem switch case, já que toma diversas linhas de código.
const noReadingDocumentationWithoutSwitch = () => {
    const h1 = document.querySelector('.container h1');
    const data = new Date();

    function getDiaSemanaTexto(diaSemana) {
        const diasSemana = ['Domingo', 'Segunda', 'Terca', 'Quarta', 'Quinta', 'Sexta', 'Sabado']
        return diasSemana[diaSemana];
    }

    function getNomeMes(numMes) {
        const meses = ['janeiro', 'fevereiro', 'marco', 'abril', 'maio', 'junho', 'julho', 'agosto', 'setembro', 'outubro', 'novembro', 'dezembro']

        return meses[numMes];
    }

    function criaData(data) {
        const diaSemana = data.getDay()
        const numeroMes = data.getMonth()

        const nomeDia = getDiaSemanaTexto(diaSemana);
        const nomeMes = getNomeMes(numeroMes);


        return (`${nomeDia}, ${zeroAEsquerda(data.getDate())} de ${nomeMes} de ${zeroAEsquerda(data.getFullYear())} ${zeroAEsquerda(data.getHours())}: ${zeroAEsquerda(data.getMinutes())}`)
    }

    const zeroAEsquerda = (num) => {
        return num >= 10 ? num : `0${num}`
    }

    h1.innerHTML = criaData(data);
}

// noReadingDocumentationWithoutSwitch()