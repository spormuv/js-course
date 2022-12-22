import { imgTargets } from './variables';

const loadImg = function (entries, observer) {
  const [entry] = entries;
  if (!entry.isIntersecting) return;
  entry.target.setAttribute('src', entry.target.dataset.src);

  entry.target.addEventListener('load', function () {
    entry.target.classList.remove('lazy-img');
  });
  observer.unobserve(entry.target);
};

const imgObserver = new IntersectionObserver(loadImg, {
  root: null,
  threshold: 0,
  rootMargin: '-200px',
});

imgTargets.forEach((img) => imgObserver.observe(img));
