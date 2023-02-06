import flatpickr from "flatpickr";
import "flatpickr/dist/flatpickr.min.css";
import Notiflix from 'notiflix';
import "notiflix/dist/notiflix-3.2.6.min.css";

const refs = {
    inputEl: document.querySelector('#datetime-picker'),
    startBtn: document.querySelector('[data-start]'),
    timerEl: document.querySelector('.timer'),
    fieldEl: document.querySelector('.field'),
    daysEl: document.querySelector('[data-days]'),
    hoursEl: document.querySelector('[data-hours]'),
    minutesEl: document.querySelector('[data-minutes]'),
    secondsEl: document.querySelector('[data-seconds]'),
};

refs.startBtn.addEventListener('click', timer);
refs.startBtn.setAttribute('disabled', '');
refs.inputEl.addEventListener('input', onInputChange);
let selectedDate = '';

const options = {
    enableTime: true,
    time_24hr: true,
    defaultDate: new Date(),
    minuteIncrement: 1,
    onClose(selectedDates) {
      if(selectedDates[0]<= options.defaultDate){
        Notiflix.Notify.failure('Please choose a date in the future');
      } else {
        refs.startBtn.removeAttribute('disabled', '');
      }   
    },
  };

const calendar = flatpickr('#datetime-picker', options);

function onInputChange(e) {
    selectedDate = new Date(e.currentTarget.value);
}

function timer() {
    setInterval(()=>{
        refs.startBtn.setAttribute('disabled', '');
        const diff = selectedDate - Date.now();
        convertMs(diff);
    }, 1000)   
};

function convertMs(diff){
    const days = addLeadingZero(Math.floor(diff / (1000 * 60 * 60 * 24)));
    const hours = addLeadingZero(Math.floor((diff / (1000 * 60 * 60)) % 24));
    const minutes = addLeadingZero(Math.floor((diff / (1000 * 60)) % 60));
    const seconds = addLeadingZero(Math.floor((diff / 1000) % 60));

    refs.daysEl.textContent = days;
    refs.hoursEl.textContent = hours;
    refs.minutesEl.textContent = minutes;
    refs.secondsEl.textContent = seconds;
}

function addLeadingZero(value) {
    return String(value).padStart(2, '0');
};

  

