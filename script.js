const form = document.querySelector('form');
const inputWeight = document.querySelector('#weight');
const inputHeight = document.querySelector('#height');

const modalWrapper = document.querySelector('.modal-wrapper');
const modalMessage = document.querySelector('.modal .title span');
const modalButton = document.querySelector('.modal button.close');

form.onsubmit = event => {
    event.preventDefault();

    const weight = inputWeight.value;
    const height = inputHeight.value;

    const result = calculateBMI(weight, height);
    const message = `Your BMI is ${result}`;

    modalMessage.innerText = message;
    modalWrapper.classList.add('open');
}

modalButton.onclick = () => {
    modalWrapper.classList.remove('open');
}


function calculateBMI(weight, height) {
    return (weight / ((height / 100) ** 2)).toFixed(2);
}