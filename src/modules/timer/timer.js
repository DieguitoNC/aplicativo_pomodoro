import { optionChosen } from '../button/choose-option.js'

function patterns(optionChosen) {
    if (timer25) {
        inicialTime = 25
    } else {
        
    }
}

//os minutos mudam conforme a opcao escolhida, mas a primeiro momento, vou criar uma logica global e ver se vai !


 const totalTime = 25 * 60 // isso aqui tem que variar conforme a escolha da engrenagem e definir um time especifico para tal !

// Fazer essa funcao ficar atualizando a cada segundo, como fazer isso ?
function displayTimer(params) {
    let minutes = Math.floor(totalTime / 60) //vai pegar o numero inteiro
    let seconds = totalTime % 60 // pega o resto
    document.getElementById('timer')
}
