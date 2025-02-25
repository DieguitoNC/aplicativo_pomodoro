
/*
    Fazer escolha da pre-definicao dos timers (if/else)
    Configurar botao para iniciar, pausar
*/

const timer25 = document.getElementsByClassName('time-25-5')
const timer50 = document.getElementsByClassName('time-50-10')
const customizedOption = document.getElementsByClassName('time-config')

function optionChosen(time) {
    time.addEvenListener('click')
    if (time===timer25) {
        //25-5
    } if (time=== timer50) {
        // 50-10
    } if (time=== customizedOption) {

    } else { // evento comecar no padrao 25/5

    }
}

