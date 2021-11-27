let nome = window.document.getElementById('nome')
let email = document.querySelector('#email')
let assunto = document.querySelector('#assunto')
let nomeOk = false
let emailOk = false
let assuntoOk = false
nome.style.width='100%'
email.style.width='100%'
assunto.style.width='100%'

function validaNome(){
    let txtNome =document.querySelector("#txtnome")
    if(nome.value.length < 3){
        txtNome.innerHTML = "Nome invalido"
        txtNome.style.color='red'
    }
    else{
        txtNome.innerHTML = "Nome valido"
        txtNome.style.color='green'
        nomeOk = true
    }
}

function validaEmail(){
    let txtEmail =document.querySelector("#txtemail")
    if(email.value.indexOf("@") == -1){
        txtEmail.innerHTML = "E-mail Invalido"
        txtEmail.style.color='red'
    }
    else{
        txtEmail.innerHTML = "E-mail Valido"
        txtEmail.style.color='green'
        emailOk = true
    }
}

function validaAssunto(){
    let txtAssunto = document.querySelector("#txtassunto")
    if(assunto.value.length >= 500){
        txtAssunto.innerHTML ="Envie no máximo texto com 500 caracteres"
        txtAssunto.style.color="red"
        txtAssunto.style.display="block"
    }
    else{
        txtAssunto.style.display="none"
        assuntoOk = true
    }
}

function enviar(){
    if (nomeOk == true && emailOk==true && assuntoOk==true){
        alert("Formulario enviado com sucesso!")
    }
    else{
        alert("Preencha o formulario corretamente")
    }
}