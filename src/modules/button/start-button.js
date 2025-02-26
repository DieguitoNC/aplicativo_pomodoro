// Fazer algo quando alguem clicar no botao start


//Seleciona a classe do botao iniciar 
const startButton = document.querySelector(".start-button")

// Aqui 
export const clickStart = startButton.addEventListener("click", function () {
    console.log("Botao de Comecar foi acionaddo !")
})