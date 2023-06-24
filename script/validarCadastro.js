const form = document.getElementById("form");
const nome = document.getElementById("nome");
const email = document.getElementById("email");
const ra = document.getElementById("ra");
const senha = document.getElementById("senha");
const senhaConf = document.getElementById("senhaConf");

form.addEventListener("submit", (event) => {
    event.preventDefault();

    validarNome();
    validarEmail();
    validarRa();
    validarSenha();
    validarSenhaConf();
})

function validarNome(){
    const nomeValue = nome.value;
    
    if(nomeValue === ""){
        errorInput(nome, "Preencha o campo obrigatório!");
    }else{
        const formItem = nome.parentElement;
        formItem.className = "group-input";
    }
}

function validarEmail(){
    const emailValue = email.value;
    
    if(emailValue === ""){
        errorInput(email, "Preencha o campo obrigatório!");
    }else{
        const formItem = email.parentElement;
        formItem.className = "group-input";
    }
}

function validarRa(){
    const raValue = ra.value;
    
    if(raValue === ""){
        errorInput(ra, "Preencha o campo obrigatório!");
    }else if(raValue.length !== 13){
        errorInput(ra, "Preencha o ra corretamente!");
    }else{
        const formItem = ra.parentElement;
        formItem.className = "group-input";
    }
}

function validarSenha(){
    const senhaValue = senha.value;
    
    if(senhaValue === "" || senhaValue.length < 8){
        errorInput(senha, "Senha inválida!");
    }else{
        const formItem = senha.parentElement;
        formItem.className = "group-input";
    }
}

function validarSenhaConf(){
    const senhaValue = senha.value;
    const senhaConfValue = senhaConf.value;
    
    if(senhaConfValue === "" || senhaConfValue !== senhaValue){
        errorInput(senhaConf, "Senha inválida!");
    }else{
        const formItem = senhaConf.parentElement;
        formItem.className = "group-input";
    }
}

function errorInput(input, message){
    const formItem = input.parentElement;
    const textMessage = formItem.querySelector("a");

    textMessage.innerText = message;
    formItem.className = "group-input-error"
}