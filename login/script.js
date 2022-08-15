function loginTab(){
    window.location.href = "login.html";
}
function enter(){
    window.location.href = "../index.html"
}
// Verificações de formularios
const form = document.getElementById('form');
const username = document.getElementById('username');
const email = document.getElementById('email');
const password = document.getElementById('password');

form.addEventListener('submit', (e) => {
    e.preventDefault();

    if(userCheck() == "True" && emailCheck() == "True" && passCheck() == "True"){
        enter();
    }else{

    }
})
function userCheck(){
    const usernameValue = username.value.trim();
    if(usernameValue === '') {
        setErrorFor(username, 'Preencha esse campo');
        return "False";
    } else {
        setSuccessFor(username);
        return "True";
    }
}
    
function emailCheck(){
    const emailValue = email.value.trim();
    if(emailValue === '') {
        setErrorFor(email, 'Preencha esse campo')
        return "False";
    } else if (!isEmail(emailValue)) {
        setErrorFor(email, 'Email inválido');
        return "False";
    } else {
        setSuccessFor(email);
        return "True";
    }
}
    
function passCheck(){
    const passwordValue = password.value.trim();
    if(passwordValue === '') {
        setErrorFor(password, 'Preencha esse campo');
        return "False";
    } else if(passwordValue.length < 8) { 
        setErrorFor(password, 'Senha deve ter mais que 8 caracteres');
        return "False";
    } else {
        setSuccessFor(password);
        return "True";
    }
}
function setErrorFor(input, message) {
    const formControl = input.parentElement;
    const small = formControl.querySelector('small');

    small.innerText = message

    formControl.className = 'formcontrol error';
}

function setSuccessFor(input) {
    const formControl = input.parentElement;

    formControl.className = 'formcontrol success';
}

function isEmail(email) {
    return /^(?:[a-z0-9!#$%&'*+/=?^_`{|}~-]+(?:\.[a-z0-9!#$%&'*+/=?^_`{|}~-]+)*|"(?:[\x01-\x08\x0b\x0c\x0e-\x1f\x21\x23-\x5b\x5d-\x7f]|\\[\x01-\x09\x0b\x0c\x0e-\x7f])*")@(?:(?:[a-z0-9](?:[a-z0-9-]*[a-z0-9])?\.)+[a-z0-9](?:[a-z0-9-]*[a-z0-9])?|\[(?:(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)\.){3}(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?|[a-z0-9-]*[a-z0-9]:(?:[\x01-\x08\x0b\x0c\x0e-\x1f\x21-\x5a\x53-\x7f]|\\[\x01-\x09\x0b\x0c\x0e-\x7f])+)\])/.test(email);
}