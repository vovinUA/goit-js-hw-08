import SimpleLightbox from 'simplelightbox';
import 'simplelightbox/dist/simple-lightbox.min.css';
// Add imports above this line
import { galleryItems } from './gallery-items.js';
// Change code below this line

console.log(galleryItems);

const imagesList = galleryItems
  .map(({ preview, original, description }) => {
    return `<div class="gallery"><a class="gallery__item" href="${original}">
    <img class="gallery__image" src="${preview}" alt="${description}" />
  </a></div>`;
  })
  .join(' ');

const galleryWrapper = document.querySelector('.gallery');

galleryWrapper.innerHTML = imagesList;

const lightbox = new SimpleLightbox('.gallery a', {
  captionPosition: 'bottom',
  captionDelay: 250,
  captionsData: 'alt',
});
