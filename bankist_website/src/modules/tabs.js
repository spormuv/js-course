import { tabs, tabsContent, tabsContainer } from './variables';

function tabToggle(e) {
  const clicked = e.target.closest('.operations__tab');
  if (!clicked) return;

  tabs.forEach((t) => t.classList.remove('operations__tab--active'));
  tabsContent.forEach((c) => c.classList.remove('operations__content--active'));

  clicked.classList.add('operations__tab--active');
  document
    .querySelector(`.operations__content--${clicked.dataset.tab}`)
    .classList.add('operations__content--active');
}

tabsContainer.addEventListener('click', tabToggle);
