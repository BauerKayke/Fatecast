
function sessionOn() {
  firebase.auth().onAuthStateChanged(user => {
    if (user) {
      sessionPersistence()
      window.location.replace("/pages/home.html")
    }
  })
}
function sessionPersistence() {
  firebase.auth().setPersistence(firebase.auth.Auth.Persistence.SESSION)
    .then(() => {
      return firebase.auth().signInWithEmailAndPassword(email, password);
    })
    .catch((error) => {
      let errorCode = error.code;
      let errorMessage = error.message;
      console.log(errorCode, errorMessage)
    });
}

function login() {
  firebase
    .auth()
    .signInWithEmailAndPassword(
      email.value, senha.value
    )
    .then(response => {
      sessionOn()
      console.log('success', response)
    })
    .catch(error => {
      alert(error)
      console.log('erro', error)
    })
}





