function criaPessoa(nome, sobrenome, altura, peso) {
    return {
        nome,
        sobrenome,
        get nomeCompleto(){
            return `${this.nome} ${this.sobrenome}`
        },
        set nomeCompleto(newNome){
            valor = newNome.split(' ');
            this.nome = valor.shift();
            this.sobrenome = valor.join(' ');
            console.log(valor);

        },
        fala: function (assunto = 'NADA') {
            return `${this.nome} está falando sobre ${assunto}`;
        },
        altura: altura,
        peso: peso,
        // Getter
        get imc() {
            const indice = this.peso / (this.altura ** 2);
            return indice.toFixed(2);
        }
        
    }
};

const p1 = criaPessoa('Vitor', 'Vargas', 1.75, 70);
p1.nomeCompleto = 'Maria Oliveira Silva';
console.log(p1.nome);
console.log(p1.sobrenome);
console.log(p1.fala())