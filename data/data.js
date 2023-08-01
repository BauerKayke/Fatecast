let n = 6
loadImage()
function loadImage(newId = 1, type = 0) {
  const newImgTemas = document.querySelector(`#imgTemas-${newId}`)
  const newImgRelease = document.querySelector(`#imgLastRelease-${newId}`);
  const storage = firebase.storage();
  const storageRef = storage.ref();
  const newImgRef = storageRef.child(`Imagens podcast/Rectangle ${n}.jpg`);


  newImgRef.getDownloadURL()
    .then((url) => {
      if (type == 1 || type == 0) newImgRelease.src = url;
      if (type == 2 || type == 0) newImgTemas.src = url;
      console.log(n, type)

    })
    .catch((error) => {
      console.log(error);
    });
  n++
}


