const alertError = document.querySelector('.alert-error');

export function showAlertError() {
    alertError.classList.add('open');
}

export function hideAlertError() {
    alertError.classList.remove('open');
}
