const hours = document.getElementById("hours")
const minutes = document.getElementById("minutes")
const seconds = document.getElementById("seconds")

function watch(){
    try {
        const date = new Date()
        let hour = date.getHours()
        let min = date.getMinutes()
        let sec = date.getSeconds()

        hour = hour < 10 ? '0' + hour : hour 
        min = min < 10 ? '0' + min : min 
        sec = sec < 10 ? '0' + sec : sec 

        hours.textContent = hour
        minutes.textContent = min
        seconds.textContent = sec
        
    } catch (error) {
        console.log("houve um problema", error)
    }
}


setInterval(watch, 1000)