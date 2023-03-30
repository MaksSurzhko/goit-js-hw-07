import { galleryItems } from './gallery-items.js';
// Change code below this line


const photo = document.querySelector('.gallery')

const markup = galleryItems.map(({ preview, original, description }) => {
  return `<li class="gallery__item">
    <a class="gallery__link"
    href="${original}">
      <img class="gallery__image"
      src="${preview}" 
      data-source="${original}" 
      alt="${description}" />
    </a>
  </li>`;
})

photo.insertAdjacentHTML("beforeend", markup.join(''));
photo.addEventListener('click', onClick);

function onClick(event) {
  event.preventDefault();
  if (event.target.nodeName !== 'IMG') {
    return;
  }
  const image = event.target.getAttribute('data-source');
  const instance = basicLightbox.create(`
    <img src="${image}">
  `);
  instance.show();
}

console.log(galleryItems);