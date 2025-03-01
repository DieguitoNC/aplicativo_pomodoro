// Fazer toda a regra do cronometro !

const pickMinutes = document.getElementsByClassName(".minutes")
const pickSeconds = document.getElementsByClassName(".seconds")
console.log(pickMinutes) // tirar dps
console.log(pickSeconds) // tirar dps

let minutes = 1

function transformToSeconds(number) {
    let seconds = minutes * 60
    return (seconds)
}


async function stopwatch(minutes) {
    let seconds = transformToSeconds(minutes)
    let min = minutes

    while (seconds > 0) {
        let minTimer = Math.floor(seconds / 60)
        let secondsAtTimer = seconds % 60

        await new Promise((resolve) => {
            setTimeout(resolve, 10) // valor tem que ser 1000

            pickMinutes.innerHTML = "minTimer"
            pickSeconds.innerHTML = "secondsAtTimer"
        })

        seconds = seconds - 1
        console.log({minTimer, secondsAtTimer})
    }

    console.log("Loop Finalizado !")
}






stopwatch(minutes)




