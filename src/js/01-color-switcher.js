const startBtn = document.querySelector('[data-start]');
const stopBtn = document.querySelector('[data-stop]');

startBtn.addEventListener('click', changeBackgroundColor);
stopBtn.addEventListener('click', stopChangingColor);
let intervalId = null;

function changeBackgroundColor(){
   intervalId = setInterval(getRandomHexColor, 1000);
   startBtn.disabled = true;
}

function getRandomHexColor(){
   body.style.backgroundColor= `#${Math.floor(Math.random() * 16777215).toString(16)}`;
  }

  function stopChangingColor(){
    clearInterval(intervalId);
    startBtn.disabled = false;
  }