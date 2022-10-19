// const images = ["0.jpg", "1.jpg", "2.jpg"];
const images = ["w.png"];
const chosenImage = images[Math.floor(Math.random() * images.length)];
const bgImage = document.createElement("img");

bgImage.src = `img/${chosenImage}`;
bgImage.classList.add('backgroundImg');


document.body.appendChild(bgImage);
