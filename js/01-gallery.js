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
  const largeImageURL = event.target.getAttribute('data-source');
  const instance = basicLightbox.create(`
    <img src="${largeImageURL}" width="800" height="600">
  `);
  instance.show();
}



console.log(galleryItems);


/*const instance = basicLightbox.create(`
    <h1>Dynamic Content</h1>
    <p>You can set the content of the lightbox with JS.</p>
`)
console.log(instance);
instance.show()*/
