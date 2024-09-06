const form = document.querySelector('form');
const inputWeight = document.querySelector('#weight');
const inputHeight = document.querySelector('#height');

const modalWrapper = document.querySelector('.modal-wrapper');
const modalMessage = document.querySelector('.modal .title span');
const modalButton = document.querySelector('.modal button.close');

const alertError = document.querySelector('.alert-error');

inputWeight.oninput = () => {
    alertError.classList.remove('open');
}

inputHeight.oninput = () => {
    alertError.classList.remove('open');
}

form.onsubmit = event => {
    event.preventDefault();

    const weight = inputWeight.value;
    const height = inputHeight.value;

    const showError = notNumber(weight) || notNumber(height);

    if (showError) {
        alertError.classList.add('open');
        return;
    }

    alertError.classList.remove('open');

    const result = calculateBMI(weight, height);
    const message = `Your BMI is ${result}`;

    modalMessage.innerText = message;
    modalWrapper.classList.add('open');
}

modalButton.onclick = () => {
    modalWrapper.classList.remove('open');
}

function notNumber(value) {
    return isNaN(value) || value === '' || value === null;
}

function calculateBMI(weight, height) {
    return (weight / ((height / 100) ** 2)).toFixed(2);
}

window.addEventListener('keydown', handleKeydown);

function handleKeydown(event) {
    if (event.key === 'Escape') {
        modalWrapper.classList.remove('open');
    }
}