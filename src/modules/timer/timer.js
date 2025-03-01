// Fazer toda a regra do cronometro !


let minutes = 60

function transformToSeconds(number) {
    let seconds = minutes * 60
    return (seconds)
}


function stopwatch(minutes) {
    let seconds = transformToSeconds(minutes)
    let min = minutes

    while (seconds > 0) {
        let minTimer = Math.floor(seconds / 60)
        let secondsAtTimer = seconds % 60

        
        seconds = seconds - 1

        console.log(minTimer, secondsAtTimer)
    }




    return `Temos aqui ${min} minutos e ${seconds} segundos, ja no while temos que ${minTimer} e em segundos seria ${secondsAtTimer}`
}







console.log(stopwatch(minutes))




