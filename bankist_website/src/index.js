'use strict';

// import html and css
import './index.html';
import './index.scss';

// import variables
import {
  modal,
  overlay,
  btnCloseModal,
  btnsOpenModal,
  btnScrollTo,
  section1,
  tabsContainer,
  nav,
  header,
} from './modules/variables';

// import modules
import { tabToggle } from './modules/tabs';
import { handleHover } from './modules/menu';
import { headerObserver } from './modules/nav_sticky';

// modal window
const openModal = function (e) {
  e.preventDefault();
  modal.classList.remove('hidden');
  overlay.classList.remove('hidden');
};

const closeModal = function () {
  modal.classList.add('hidden');
  overlay.classList.add('hidden');
};

btnsOpenModal.forEach((btn) => {
  btn.addEventListener('click', openModal);
});
btnCloseModal.addEventListener('click', closeModal);
overlay.addEventListener('click', closeModal);
document.addEventListener('keydown', function (e) {
  if (e.key === 'Escape' && !modal.classList.contains('hidden')) closeModal();
});

// button scrolling
btnScrollTo.addEventListener('click', function () {
  section1.scrollIntoView({ behavior: 'smooth' });
});

// page navigation
document.querySelector('.nav__links').addEventListener('click', function (e) {
  e.preventDefault();
  if (
    e.target.classList.contains('nav__link') &&
    !e.target.classList.contains('nav__link--btn')
  ) {
    const id = e.target.getAttribute('href');
    document.querySelector(id).scrollIntoView({ behavior: 'smooth' });
  }
});

// tabbed component
tabsContainer.addEventListener('click', tabToggle);

//menu fade animation
nav.addEventListener('pointerover', handleHover.bind(0.5));
nav.addEventListener('pointerout', handleHover.bind(1));

// sticky navigation
headerObserver.observe(header);
