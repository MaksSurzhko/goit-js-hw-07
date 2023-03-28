import { galleryItems } from './gallery-items.js';
// Change code below this line
const gallerys = document.querySelector(".gallery");

const gallery = document.querySelector('.gallery')

const markup = galleryItems.map(({ preview, original, description }) => {
  `<li class="gallery__item">
    <a class="gallery__link"
    href="${original}">
      <img class="gallery__image"
      src="${preview}" 
      data-source="${original}" 
      alt="${description}" />
    </a>
  </li>`;
})


console.log(galleryItems);


/*const instance = basicLightbox.create(`
    <h1>Dynamic Content</h1>
    <p>You can set the content of the lightbox with JS.</p>
`)
console.log(instance);
instance.show()*/
