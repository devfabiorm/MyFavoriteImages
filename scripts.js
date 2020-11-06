let favorites = JSON.parse(localStorage.getItem('favorites')) || [];

async function getExternalImage() {
  const response = await fetch('https://source.unsplash.com/random');

  document.querySelector('.image').innerHTML= `<img src="${response.url}" />`;
}

getExternalImage();

document.querySelector('button').onclick = function() {
  getExternalImage();
}

document.querySelector('.image').onclick = function() {
  const imageSource = document.querySelector('.image img').src

  favorites.push(imageSource);
  localStorage.setItem('favorites', JSON.stringify(favorites));
}