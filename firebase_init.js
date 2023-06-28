const firebaseConfig = {
  apiKey: 'AIzaSyDMSTH5e32kwv82bCXFkxzztnGyYgqTGRI',
  authDomain: 'fatecast-b5ddc.firebaseapp.com',
  projectId: 'fatecast-b5ddc',
  storageBucket: 'fatecast-b5ddc.appspot.com',
  messagingSenderId: '697483630100',
  appId: '1:697483630100:web:3955c9cf4f79097ddb3901'
}
firebase.initializeApp(firebaseConfig);


const form1 = document.querySelector('form')


function login() {
  validarEmail()
  validarSenha()

  console.log('Antes')
  firebase
    .auth()
    .signInWithEmailAndPassword(
      form1.email.value,
      form1.senha.value
    )
    .then(response => {
      window.location.replace("/pages/home.html")
      console.log('success', response)
    })
    .catch(error => {
      console.log('erro', error)
    })
  console.log('Depois')
}

function validarEmail() {
  if (form1.email.value === "") {
    errorInput(form1.email, "Preencha o campo obrigatório!");
  } else {
    const formItem = email.parentElement;
    formItem.className = "group-input";
  }
}
function validarSenha() {
  if (form1.senha.value === "" || form1.senha.value.length < 6) {
    errorInput(form1.senha, "Senha inválida!");
  } else {
    const formItem = senha.parentElement;
    formItem.className = "group-input";
  }
}




