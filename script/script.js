function Cadastrar(){
    validarCampos();
}

function validarCampos(){
    const nome = document.getElementById('nome').value;
    const email = document.getElementById('email').value;
    const ra = document.getElementById('ra').value;
    const senha = document.getElementById('senha').value;
    const senhaConf = document.getElementById('senhaConf').value;

    if(!nome){
        document.getElementById('nomeErro').style.display = "block";
    }else document.getElementById('nomeErro').style.display = "none";

    if(!email){
        document.getElementById('emailErro').style.display = "block";
    }else document.getElementById('emailErro').style.display = "none";

    if(!ra){
        document.getElementById('raErro').style.display = "block";
    } else document.getElementById('raErro').style.display = "none";

    if(!senha){
        document.getElementById('senhaErro').style.display = "block";
    }else document.getElementById('senhaErro').style.display = "none";

    if(!senhaConf){
        document.getElementById('senhaConfErro').style.display = "block";
    }else document.getElementById('senhaConfErro').style.display = "none";
}