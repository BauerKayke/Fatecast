

const form2 = document.getElementById("formCadastro");
const nome = document.getElementById("nome");
const email = document.getElementById("email");
const ra = document.getElementById("ra");
const senha = document.getElementById("senha");
const senhaConf = document.getElementById("senhaConf");
const emailValue = email.value;
const senhaValue = senha.value;

form2.addEventListener("submit", (event) => {
    event.preventDefault();
    console.log(email.value)
    validarNome();
    validarEmail();
    validarRa();
    validarSenha();
    validarSenhaConf();
    register()
})


function validarNome() {
    const nomeValue = nome.value;

    if (nomeValue === "") {
        errorInput(nome, "Preencha o campo obrigatório!");
    } else {
        const formItem = nome.parentElement;
        formItem.className = "group-input";
    }
}

function validarEmail() {
    const emailValue = email.value;

    if (emailValue === "") {
        errorInput(email, "Preencha o campo obrigatório!");
    } else {
        const formItem = email.parentElement;
        formItem.className = "group-input";
    }
}

function validarRa() {
    const raValue = ra.value;

    if (raValue === "") {
        errorInput(ra, "Preencha o campo obrigatório!");
    } else if (raValue.length !== 13) {
        errorInput(ra, "Preencha o ra corretamente!");
    } else {
        const formItem = ra.parentElement;
        formItem.className = "group-input";
    }
}

function validarSenha() {
    const senhaValue = senha.value;

    if (senhaValue === "" || senhaValue.length < 6) {
        errorInput(senha, "Senha inválida!");
    } else {
        const formItem = senha.parentElement;
        formItem.className = "group-input";
    }
}

function validarSenhaConf() {
    const senhaValue = senha.value;
    const senhaConfValue = senhaConf.value;

    if (senhaConfValue === "" || senhaConfValue !== senhaValue) {
        errorInput(senhaConf, "Senha inválida!");
    } else {
        const formItem = senhaConf.parentElement;
        formItem.className = "group-input";
    }
}

function errorInput(input, message) {
    const formItem = input.parentElement;
    const textMessage = formItem.querySelector("a");

    textMessage.innerText = message;
    formItem.className = "group-input-error"
}

function register() {
    firebase.auth().createUserWithEmailAndPassword(email.value, senha.value)
        .then((userCredential) => {
            // Novo usuário criado com sucesso
            const user = userCredential.user;
            console.log('Successfully created new user:', user.uid);
        })
        .catch((error) => {
            alert(getErrorMessage(error));
            console.log('Error creating new user:', error);
        });
}
function getErrorMessage(error) {
    if (error.code == "auth/email-already-in-use") {
        return "Email já está em uso";
    }
    return error.message;
}