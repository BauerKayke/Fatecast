
export function getFirebaseImageNames() {
  const storage = firebase.storage()
  const storageRef = storage.ref().child('Imagens podcast')

  return storageRef.listAll()
    .then((result) => {
      const fileNames = result.items.map((item) => item.name)
      console.log(fileNames)
      return fileNames
    })
    .catch((error) => {
      console.error('Erro ao obter nomes de arquivo do Firebase:', error)
      return []
    })
}
export function loadImage(fileName, type = 0) {
  const storage = firebase.storage()
  const storageRef = storage.ref()
  const newId = type === 1 ? 2 : type === 2 ? 1 : 3 // Mapeia o tipo para o newId

  let imgSelector
  switch (type) {
    case 1:
      imgSelector = `#imgLastRelease-${newId}`
      break
    case 2:
      imgSelector = `#imgTemas-${newId}`
      break
    case 3:
      imgSelector = `#ep-img-${newId}`
      break
    default:
      imgSelector = ""
      break
  }

  const newImgRef = storageRef.child(`Imagens podcast/${fileName}`)

  newImgRef
    .getDownloadURL()
    .then((url) => {
      if (imgSelector) {
        const newImgElements = document.querySelectorAll(imgSelector);
        newImgElements.forEach((element) => {
          element.src = url;
        });
      }
    })
    .catch((error) => {
      console.log(error);
    });
}

getFirebaseImageNames().then((fileNames) => {
  fileNames.forEach((fileName, index) => {
    loadImage(fileName, index + 1)
  })
})



