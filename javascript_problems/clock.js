//creating a (HH:MM:SS) clock
function clock_time(){
    let time = new Date()
    let hours = time.getHours()
    let minutes = time.getMinutes()
    let seconds = time.getSeconds()
    console.log(`${hours}:${minutes}:${seconds}`)
}
setInterval(clock_time, 1000)