'use strict';
const galleryButtons = document.querySelectorAll('[data-image]');
const projectImage = document.querySelector('#project-image');
const caption = document.querySelector('#project-caption');
galleryButtons.forEach(button => button.addEventListener('click', () => {
  galleryButtons.forEach(item => {
    const selected = item === button;
    item.classList.toggle('selected', selected);
    item.setAttribute('aria-pressed', String(selected));
  });
  projectImage.src = `assets/${button.dataset.image}`;
  projectImage.alt = button.dataset.alt;
  caption.textContent = button.dataset.caption;
}));
const dialog = document.querySelector('#demo-dialog');
const video = dialog.querySelector('video');
document.querySelector('#watch-demo').addEventListener('click', () => dialog.showModal());
dialog.querySelector('.close-dialog').addEventListener('click', () => dialog.close());
dialog.addEventListener('click', event => { if (event.target === dialog) {
  const box = dialog.getBoundingClientRect();
  if (event.clientX < box.left || event.clientX > box.right || event.clientY < box.top || event.clientY > box.bottom) dialog.close();
}});
dialog.addEventListener('close', () => video.pause());
