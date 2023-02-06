import {Notify} from 'notiflix';
// import "notiflix/dist/notiflix-3.2.6.min.css";

const form = document.querySelector('.form');

form.addEventListener('submit', onSubmit);

function createPromise(position, delay) {
  return new Promise((resolve, reject)=>{
    const shouldResolve = Math.random() > 0.3;
    setTimeout(()=>{
    if (shouldResolve) {
      resolve({ position, delay });
    } else {
      reject({ position, delay });
    }
  }, delay);
  });
}

function onSubmit(e) {
  e.preventDefault();
  const {delay, step, amount} = e.target.elements;
  let delayInput = +delay.value;
  let stepInput = +step.value;
  let amountInput = +amount.value;

  for (let position = 1; position <= amountInput; position += 1) {
    createPromise(position, delayInput)
      .then(({ position, delay }) => {
        Notify.success(`✅ Fulfilled promise ${position} in ${delay}ms`);
      })
      .catch(({ position, delay }) => {
        Notify.failure(`❌ Rejected promise ${position} in ${delay}ms`);
      })
    delayInput += stepInput;
  }
  e.target.reset();
}





