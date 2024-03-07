function criaCalculadora() {
    return {
        display: document.querySelector('.display'),
        btnClear: document.querySelector('.btn-clear'),

        inicia() {
            this.capturaCliques();
            this.pressionaBackSpace();
            this.pressionaEnter();
        },


        pressionaBackSpace() {
            this.display.addEventListener('keydown', e => {
              if (e.keyCode === 8) {
                e.preventDefault();
                this.clearDisplay();
              }
            });
          },

        pressionaEnter() {
            this.display.addEventListener('keyup', e => {
                if (e.keyCode === 13) {
                    this.realizaConta();
                }
            })
        },

        clearDisplay() {
            this.display.value = '';
        },

        deleteLast() {
            this.display.value = this.display.value.slice(0, -1);
        },

        realizaConta() {
            // Eval é mt merda, não usar. Devido a falhas de seguranças
            let conta = this.display.value;
            try {
                conta = eval(conta);

                if (!conta) {
                    alert('Digitou errado amigão!!');
                    return;
                }

                this.display.value = String(conta);
            } catch (e) {
                alert('Conta inválida chefia');
                return;
            }
        },

        capturaCliques() {
            document.addEventListener('click', (e) => {
                const el = e.target;
                console.log(e);

                if (el.classList.contains('btn-num')) {
                    this.btnParaDisplay(el.innerText);
                }

                if (el.classList.contains('btn-clear')) {
                    this.clearDisplay();
                }

                if (el.classList.contains('btn-del')) {
                    this.deleteLast();
                }

                if (el.classList.contains('btn-eq')) {
                    this.realizaConta();
                }
            });
        },

        btnParaDisplay(valor) {
            this.display.value += valor;
        },




    };
}

const calculadora = criaCalculadora();
calculadora.inicia();