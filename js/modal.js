// Кнопка відкривання модального вікна
const openModalBtn = document.querySelector("[data-modal-open]");
// Кнопка закривання модального вікна
const closeModalBtn = document.querySelector("[data-modal-close]");
// Знаходимо модальне вікно
const modal = document.querySelector("[data-modal]");

openModalBtn.addEventListener('click', toggleModal);
closeModalBtn.addEventListener('click', toggleModal);


function toggleModal() {
    modal.classList.toggle('is-hidden');
};