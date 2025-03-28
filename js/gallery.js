// require("basiclightbox");

const images = [
  {
    preview: "https://i.imgur.com/D4Khsti.png",
    original: "https://i.imgur.com/DZkNfcm.jpeg",
    description: "",
  },
  {
    preview: "https://i.imgur.com/9PgOr31.png",
    original: "https://i.imgur.com/Wj9J24O.jpeg",
    description: "",
  },
  {
    preview: "https://i.imgur.com/isk4Ate.png",
    original: "https://i.imgur.com/XUw9Bzy.jpeg",
    description: "",
  },
  {
    preview: "https://i.imgur.com/j1Oy9SY.png",
    original: "https://i.imgur.com/iEdiX61.jpeg",
    description: "",
  },
  {
    preview: "https://i.imgur.com/0qj4oKT.png",
    original: "https://i.imgur.com/UQSXAgT.jpeg",
    description: "",
  },
  {
    preview: "https://i.imgur.com/ZlluQSj.png",
    original: "https://i.imgur.com/TOGYNQA.jpeg",
    description: "",
  },
  {
    preview: "https://i.imgur.com/Nt6r8QR.png",
    original: "https://i.imgur.com/hhI2WUZ.jpeg",
    description: "",
  },
  {
    preview: "https://i.imgur.com/2RuxUFe.png",
    original: "https://i.imgur.com/d2qq6r3.jpeg",
    description: "",
  },
];

const gallery = document.querySelector(".gallery");

// Створюємо розмітку
const galleryMarkup = images
  .map(({ preview, original, description }) => {
    return `
    <li class="gallery-item">
        <img src="${preview}" alt="${description}" data-original=${original} />
    </li>
  `;
  })
  .join("");

// Додаємо в HTML
gallery.innerHTML = galleryMarkup;

const createInstanse = (link) =>
  basicLightbox.create(`
      <div class="modal">
      <img src=${link} alt="food">
      </div>
  `);

gallery.addEventListener("click", (e) => {
  if (e.target.hasAttribute("data-original")) {
    const instance = createInstanse(e.target.dataset.original);
    instance.show();
  }
});
