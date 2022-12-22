import {
  btnsOpenModal,
  btnCloseModal,
  overlay,
  modal,
  hamburgerBtn,
} from './variables';

const openModal = function (e) {
  e.preventDefault();
  modal.classList.remove('hidden');
  overlay.classList.remove('hidden');
};

const closeModal = function () {
  modal.classList.add('hidden');
  if (!hamburgerBtn.classList.contains('active')) {
    overlay.classList.add('hidden');
  }
};

btnsOpenModal.forEach((btn) => {
  btn.addEventListener('click', openModal);
});
btnCloseModal.addEventListener('click', closeModal);
overlay.addEventListener('click', closeModal);
document.addEventListener('keydown', function (e) {
  if (e.key === 'Escape' && !modal.classList.contains('hidden')) closeModal();
});
