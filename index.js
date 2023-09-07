
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

const form1 = document.querySelector('form')

function login() {
  validarEmail()
  validarSenha()

  firebase
    .auth()
    .signInWithEmailAndPassword(
      form1.email.value,
      form1.senha.value
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
function errorInput(input, message) {
  const formItem = input.parentElement;
  const textMessage = formItem.querySelector("a");

  textMessage.innerText = message;
  formItem.className = "group-input-error"
}




