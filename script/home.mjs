import { loadImage, getFirebaseImageNames } from '../data/data.mjs';

function goOut() {
  firebase.auth().signOut().then(() => {
    console.log('success');
    window.location.replace("../index.html");
  }).catch(error => {
    alert(error)
    console.log('erro', error)
  })
}
getFirebaseImageNames().then((fileNames) => {
  // Carregue as imagens para cada tipo de elemento
  loadImagesForAllElementsOfType('lastRelease', fileNames);
  loadImagesForAllElementsOfType('temas', fileNames);
  loadImagesForAllElementsOfType('ep', fileNames);
});

export function loadImagesForAllElementsOfType(elementType, fileNames) {
  const container = document.querySelector(`.${elementType}-blocks`);
  const elements = container ? container.querySelectorAll(`.${elementType}`) : [];

  elements.forEach((element, index) => {
    const newId = index + 1; // Usar o índice exclusivo como ID
    const sanitizedFileName = fileNames[newId - 1].replace(/-/, '.');
    let imgSelector;
    switch (elementType) {
      case 'lastRelease':
        imgSelector = `#imgLastRelease-${newId}`;
        break;
      case 'temas':
        imgSelector = `#imgTemas-${newId}`;
        break;
      case 'ep':
        imgSelector = `#ep-img-${newId}`;
        break;
      default:
        imgSelector = "";
        break;
    }

    if (imgSelector) {
      loadImage(sanitizedFileName, elementType, newId);
    }
  });
}


function fav() {
  const btnStarFav = document.querySelectorAll('#btn-star')
  let btnStarFavArray = Array.from(btnStarFav)

  btnStarFavArray.forEach(function (button) {
    button.addEventListener('click', function (e) {
      const starImage = e.target.parentElement.querySelector('img.starFav')
      const isFav = starImage.src.endsWith('StarFav.svg')
      if (isFav) starImage.src = '../icon/StarUnFav.svg'
      else starImage.src = '../icon/StarFav.svg'
    })
  })
}
fav()










