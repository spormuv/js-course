import { hamburgerBtn, navLinks, overlay } from './variables';

const toggleMenu = function () {
  hamburgerBtn.classList.toggle('active');
  navLinks.classList.toggle('nav__links_active');
  overlay.classList.toggle('hidden');
};

hamburgerBtn.addEventListener('click', toggleMenu);

navLinks.addEventListener('click', function (e) {
  if (
    e.target.classList.contains('nav__link') &&
    hamburgerBtn.classList.contains('active')
  )
    toggleMenu();
});
