const firebaseConfig = {
    apiKey: 'AIzaSyDMSTH5e32kwv82bCXFkxzztnGyYgqTGRI',
    authDomain: 'fatecast-b5ddc.firebaseapp.com',
    projectId: 'fatecast-b5ddc',
    storageBucket: 'fatecast-b5ddc.appspot.com',
    messagingSenderId: '697483630100',
    appId: '1:697483630100:web:3955c9cf4f79097ddb3901'
  }
  firebase.initializeApp(firebaseConfig)

function login(form){
    console.log('Antes')
    firebase
      .auth()
      .signInWithEmailAndPassword(
        form.email().value,
        form.senha().value
      )
      .then(response => {
        window.location.href="pages/home.html"
        console.log('success', response)
      })
      .catch(error => {
        console.log('erro', error)
      })
    console.log('Depois')
}