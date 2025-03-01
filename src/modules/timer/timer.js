// Fazer toda a regra do cronometro !


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
            setTimeout(resolve, 1) // valor tem que ser 1000
        })

        seconds = seconds - 1
        console.log({minTimer, secondsAtTimer})
    }

    console.log("Loop Finalizado !")
}






stopwatch(minutes)




