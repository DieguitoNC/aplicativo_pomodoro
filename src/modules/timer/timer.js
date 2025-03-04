// Fazer toda a regra do cronometro !

const pickMinutes = document.querySelector(".minutes")
const pickSeconds = document.querySelector(".seconds")

const audio = new  Audio("../../assets/bedside-clock-alarm-95792.mp3")
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

    while (seconds >= 0) {
        let minTimer = Math.floor(seconds / 60)
        let secondsAtTimer = seconds % 60

        await new Promise((resolve) => {
            setTimeout(resolve, 100) // valor tem que ser 1000

            pickMinutes.innerHTML = minTimer < 10 ? "0" + minTimer:minTimer
            pickSeconds.innerHTML = secondsAtTimer < 10 ? "0" + secondsAtTimer:secondsAtTimer
        })
        seconds = seconds - 1
    }
    audio.play()
    console.log("Loop Finalizado !")
}






stopwatch(minutes)




