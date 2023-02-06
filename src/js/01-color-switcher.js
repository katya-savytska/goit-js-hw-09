const startBtn = document.querySelector('[data-start]');
const stopBtn = document.querySelector('[data-stop]');

startBtn.addEventListener('click', changeBackgroundColor);
stopBtn.addEventListener('click', stopChangingColor);


function changeBackgroundColor() {
   intervalId = setInterval(()=>{
    document.body.style.backgroundColor = getRandomHexColor();
   }, 1000);
   startBtn.disabled = true;
}

function getRandomHexColor() {
    return `#${Math.floor(Math.random() * 16777215).toString(16)}`;
  }

  function stopChangingColor() {
    clearInterval(intervalId);
    startBtn.disabled = false;
  }