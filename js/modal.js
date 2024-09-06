const modalWrapper = document.querySelector('.modal-wrapper');
const modalMessage = document.querySelector('.modal .title span');
const modalButton = document.querySelector('.modal button.close');

export function openModal(message) {
    modalMessage.innerText = message;
    modalWrapper.classList.add('open');
}

export function closeModal() {
    modalWrapper.classList.remove('open');
}

export function handleKeydown(event) {
    if (event.key === 'Escape') {
        closeModal();
    }
}

modalButton.onclick = closeModal;
