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
  const imageContainer = document.querySelector('.image');
  const imageSource = document.querySelector('.image img').src

  const index = favorites.indexOf(imageSource);
  const existsInLocalStorage = index != -1;

  if(existsInLocalStorage) {
    favorites.splice(index, 1);
    imageContainer.classList.remove('fav');
  } else {
    favorites.push(imageSource);
    imageContainer.classList.add('fav');
  }

  localStorage.setItem('favorites', JSON.stringify(favorites));
}