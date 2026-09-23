import Notiflix from 'notiflix';
import flatpickr from "flatpickr";
import "flatpickr/dist/flatpickr.min.css";
let days = document.querySelector("[data-days]")
let hours = document.querySelector('[data-hours]')
let minutes = document.querySelector('[data-minutes]')
let seconds = document.querySelector('[data-seconds]')
let start = document.querySelector('[data-start]')

function convertMs(ms) {
  // Number of milliseconds per unit of time
  const second = 1000;
  const minute = second * 60;
  const hour = minute * 60;
  const day = hour * 24;

  // Remaining days
  const days = Math.floor(ms / day);
  // Remaining hours
  const hours = Math.floor((ms % day) / hour);
  // Remaining minutes
  const minutes = Math.floor(((ms % day) % hour) / minute);
  // Remaining seconds
  const seconds = Math.floor((((ms % day) % hour) % minute) / second);

  return { days, hours, minutes, seconds };
}
let dateNow = new Date().getTime()
console.log(dateNow)
let dataUser = null
let timerId = null
const options = {
  enableTime: true,
  time_24hr: true,
  defaultDate: new Date(),
  minuteIncrement: 1,
    onClose(selectedDates) {
        dataUser = selectedDates[0].getTime();

        if (dataUser < dateNow) {
            Notiflix.Notify.failure('Please choose a date in the future');
            // window.alert("Please choose a date in the future");
            return;
        }
    start.disabled = false;
  },
};
const calendars = flatpickr("#datetime-picker", options);
start.addEventListener('click',onStartClick)
function onStartClick() {
  timerId = setInterval(updateInterface, 1000)
start.disabled=true
}
function updateInterface() {
  dateNow = new Date().getTime()
  if (dataUser - dateNow <= 0) {
    clearInterval(timerId)
    return
  }
  const Times = convertMs(dataUser - dateNow)
  days.textContent = Times.days
  minutes.textContent = Times.minutes
  hours.textContent = Times.hours
  seconds.textContent = Times.seconds
  
}


function pad(value) {
    return String(value).padStart(2, '0');
}
fetch("https://jsonplaceholder.typicode.co/users").then(responce => {
  if (!responce.ok) {
    throw new Error(responce.status)
  }
  console.log(responce.json)
  return responce.json
})