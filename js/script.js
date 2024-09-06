import { notNumber, calculateBMI } from './utils.js';
import { openModal, closeModal, handleKeydown } from './modal.js';
import { showAlertError, hideAlertError } from './alert-error.js';

const form = document.querySelector('form');
const inputWeight = document.querySelector('#weight');
const inputHeight = document.querySelector('#height');

inputWeight.oninput = hideAlertError;
inputHeight.oninput = hideAlertError;

form.onsubmit = event => {
    event.preventDefault();

    const weight = inputWeight.value;
    const height = inputHeight.value;

    const showError = notNumber(weight) || notNumber(height);

    if (showError) {
        showAlertError();
        return;
    }

    hideAlertError();

    const result = calculateBMI(weight, height);
    const message = `Your BMI is ${result}`;

    openModal(message);
};

window.addEventListener('keydown', handleKeydown);
