
function goOut() {
  firebase.auth().signOut().then(() => {
    console.log('success');
    window.location.replace("../index.html");
  }).catch(error => {
    alert(error)
    console.log('erro', error)
  })
}





function sideBar() {
  const btnSide = document.querySelector('.btn-sideBar')
  const sideBar = document.querySelector('.sideBar')
  btnSide.addEventListener('click', function () {
    if (sideBar.classList.contains('offSide')) {
      sideBar.classList.remove('offSide')
      sideBar.classList.add('onSide')
    }
    else {
      sideBar.classList.add('offSide')
      sideBar.classList.remove('onSide')
    }
    console.log('foi')
  })


}

let idRelease = 1;
let idTemas = 1

function cloneLastRelease() {

  const lastRelease = document.querySelector('#lastRelease-1');
  const clonedElement = lastRelease.cloneNode(true);

  let newIdRelease = idRelease + 1;


  clonedElement.id = `lastRelease-${newIdRelease}`;
  clonedElement.querySelector('img').id = `imgLastRelease-${newIdRelease}`;
  clonedElement.querySelector('p').id = `tittleLastRelease-${newIdRelease}`;
  clonedElement.querySelector('#integrantesLastRelease-1').id = `integrantesLastRelease-${newIdRelease}`;
  clonedElement.querySelector('#dataLastRelease-1').id = `dataLastRelease-${newIdRelease}`;
  clonedElement.querySelector('#timeLastRelease-1').id = `timeLastRelease-${newIdRelease}`;

  const container = document.querySelector('.lastRelease-blocks');
  container.appendChild(clonedElement);

  loadImage(newIdRelease, 1);
  idRelease++
}
function cloneTemas() {

  const temas = document.querySelector('#temas-1')
  const cloneTemas = temas.cloneNode(true)

  let newIdTemas = idTemas + 1

  cloneTemas.id = `temas-${newIdTemas}`
  cloneTemas.querySelector('img').id = `imgTemas-${newIdTemas}`;
  cloneTemas.querySelector('p').id = `tittleTemas-${newIdTemas}`;

  const container = document.querySelector('.temas-blocks')
  container.appendChild(cloneTemas)

  loadImage(newIdTemas, 2)
  idTemas++
}

const addRelease = document.getElementById('addRelease');
addRelease.addEventListener('click', cloneLastRelease);
const addTemas = document.getElementById('addTemas');
addTemas.addEventListener('click', cloneTemas);

