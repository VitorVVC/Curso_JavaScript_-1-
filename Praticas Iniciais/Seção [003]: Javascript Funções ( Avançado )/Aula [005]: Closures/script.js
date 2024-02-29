function retornaFuncao(nome) {
    return function () {
        return nome;
    }
}

const funcao = retornaFuncao('Luiz');
const funcaoDois = retornaFuncao('João')
console.log(funcao());
console.log(funcaoDois())
