let start = document.querySelector('[data-start]')
let stop = document.querySelector('[data-stop]')
let body = document.querySelector('body')
stop.addEventListener("click", onStopClick)
start.addEventListener("click", onStartClick)

let timerId = null
let onClicked = true
stop.disabled=true
function onStopClick() {
    clearInterval(timerId)
    start.disabled = false
    stop.disabled = true
    onClicked=true
    
}
function onStartClick() {
    if (onClicked == true) {
        onClicked = false
        start.disabled = true
        stop.disabled = false
        timerId = setInterval(() => {
            let randomColor = getRandomHexColor()
            body.style.backgroundColor = `${randomColor}`
            console.log(randomColor)
        },1000)
    }
}
function getRandomHexColor() {
  return `#${Math.floor(Math.random() * 16777215).toString(16).padStart(6, 0)}`;
}