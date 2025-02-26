const mediumTime = document.querySelector(".time-25-5")
const longTime = document.querySelector(".time-50-10")
const customTime = document.querySelector(".time-config")


export const firstTimeOption = mediumTime.addEventListener("click", function () {
    chosenOptions("25-5")
})

export const secondTimeOption = longTime.addEventListener("click", function () {
    chosenOptions("50-10")
})


// Aqui eu teria que abrir uma nova abinha pra pessoa conseguir configurar o timer ! (Socorro!)
export const thirdTimeOption = customTime.addEventListener("click", function () {
    chosenOptions("Opcao-personalizada")
})

// Arrumar essa funcao ainda
export function chosenOptions(timeSelected) {
    if (timeSelected === "25-5") {
        console.log("Implementar configuracao do timer para 25-5!")

    } if(timeSelected === "50-10") {
        console.log("Implementar configuracao do timer para 50-10!")
    } if (timeSelected === "Opcao-personalizada") {
        console.log("Opcao-personalizada")
    }
    else {
        "Deu algum erro !"
    }
}


