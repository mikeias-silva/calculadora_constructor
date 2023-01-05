function Calculadora() {
    this.inicia = () => {
        cliqueBotoes();
        pressEnter();
        pressBackSpace();
    }
    const display = document.querySelector('.display')
    function pressEnter() {
        display.addEventListener('keyup', event => {
            if (event.keyCode === 13) {
                realizaConta();
            }
        })
    }

    function pressBackSpace() {
        display.addEventListener('keydown', event => {
            if (event.keyCode === 8) {
                apagarUm();
            }
        })
    }
    function realizaConta() {
        let conta = display.value
        try {
            if (isNaN(eval(conta))) {
                alert('Numero invalido!')
                return;
            }
            display.value = eval(conta)

        } catch (error) {
            alert('Numero inválido!')
            return;
        }
    }

    function clearDisplay() {
        display.value = '';
    }

    function btnParaDisplay(valor) {
        display.value += valor
    }
    function apagarUm() {
        display.value = display.value.slice(0, -1)
    }
    function cliqueBotoes() {
        document.addEventListener('click', event => {
            const elemento = event.target;
            // console.log(elemento);
            if (elemento.classList.contains('btn-num')) {
                btnParaDisplay(elemento.innerText)
            }
            if (elemento.classList.contains('btn-equal')) {
                realizaConta();
            }
            if (elemento.classList.contains('btn-clear')) {
                clearDisplay();
            }
            if (elemento.classList.contains('btn-back')) {
                apagarUm();
            }
        })
    }
}

const calc = new Calculadora();

calc.inicia()