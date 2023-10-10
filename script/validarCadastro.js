class ValidaFormulario {
    constructor() {
        this.formulario = document.querySelector('#formCadastro')
        this.eventos()
    }
    eventos() {
        this.formulario.addEventListener('submit', e => {
            this.handleSubmit(e)
        })
    }
    handleSubmit(e) {
        e.preventDefault()
        const forgot = this.formulario.querySelector('emailC')
        const fieldsValid = this.checkFields()
        const validPasswords = this.validPasswords()
        if (forgot) {
            this.validForgotPass()
        }
        if (fieldsValid && validPasswords) {
            this.formulario.submit()
            alert('Formulario enviado')
            this.register()
        }
    }

    checkFields() {
        let valid = true
        for (let errorText of this.formulario.querySelectorAll('.group-input-error')) {
            errorText.remove()
        }
        const fields = this.formulario.querySelectorAll('.validar')
        for (let field of fields) {
            const labelElement = field.previousElementSibling;
            const labelText = labelElement.previousElementSibling.innerText;
            if (!field.value) {
                this.createError(field, `Campo "${labelText}" não pode estar em branco`)
                valid = false
            } if (field.classList.contains('ra')) {
                if (!this.validarRa(field)) valid = false
            }
            if (field.classList.contains('nome')) {
                if (!this.validarNome(field)) valid = false
            }
            if (field.classList.contains('email')) {
                if (!this.validarEmail(field)) valid = false
            }
        }
        return valid
    }
    validarNome() {
        let valid = true
        const nomeValue = this.formulario.querySelector('.nome').value
        if (nomeValue === "") {
            this.createError(nome, "Preencha o campo obrigatório!");
            valid = false
        }
        return valid
    }
    validarRa() {
        let valid = true
        const raValue = this.formulario.querySelector('.ra')
        if (raValue.value === "") {
            this.createError(raValue, "Preencha o campo obrigatório!")
            valid = false
        } else if (raValue.length !== 13) {
            this.createError(raValue, "Preencha o ra corretamente!")
            valid = false
        }
        return valid
    }
    validarEmail() {
        let valid = true
        const emailValue = this.formulario.querySelector('.email');
        if (emailValue === null) {
            this.createError(email, "Preencha o campo obrigatório!");
            valid = false
        }
        return valid
    }
    validPasswords() {
        let valid = true
        const password = this.formulario.querySelector('.senha')
        const confirmPassowrd = this.formulario.querySelector(".senhaRep")
        if (password.value !== confirmPassowrd.value) {
            valid = false
            this.createError(password, 'Campos senha e repetir senha precisam ser iguais')
            this.createError(confirmPassowrd, 'Campos senha e repetir senha precisam ser iguais')
        }
        if (password.value.length < 3 || password.value.length > 8) {
            valid = false;
            this.createError(password, 'Senha precisa estar entre 3 e 8 caracteres')
        }
        return valid
    }
    validForgotPass() {
        let valid = true
        console.log("ta chegando")
        const emailValue = this.formulario.querySelector('.email');
        const emailCValue = this.formulario.querySelector('.emailC')
        if (emailValue === null) {
            this.createError(email, "Preencha o campo obrigatório!");
            valid = false
        }
        if (emailCValue === null) {
            this.createError(emailC, "Preencha o campo obrigatório!");
            valid = false
        }
        if (emailCValue !== emailValue) {
            this.createError(emailC, "Os emails devem ser iguais");
            this.createError(email, "Os emails devem ser iguais");
            valid = false
        }
        return valid
    }

    register() {
        const email = this.formulario.querySelector('.email').value
        const senha = this.formulario.querySelector('.senha').value
        firebase.auth().createUserWithEmailAndPassword(email, senha)
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
    getErrorMessage(error) {
        if (error.code == "auth/email-already-in-use") {
            return "Email já está em uso";
        }
        return error.message;
    }
    createError(field, msg) {
        const divErro = document.createElement("div")
        divErro.innerHTML = msg
        divErro.classList.add('group-input-error')
        field.insertAdjacentElement('afterend', divErro)
    }
}
const valida = new ValidaFormulario()