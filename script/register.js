function onChangeEmail() {
 const email = form.email().value;
 form.emailrequirederror().style.display = email ? 'none' : 'block';

 form.emailinvaliderror().style.display = validateEmail(email) ? 'none' : 'block';
 toggleRegisterButtonDisable();
}
function onChangePassword() {
    const password = form.password().value;
    form.passwordrequirederror().style.display = password ? 'none' : 'block';
    form.passwordminlengherror().style.display = password.length >= 6 ? 'none' : 'block';
    validatePasswordsMatch();
    toggleRegisterButtonDisable();
}
function onChangeConfirmPassword() {
     validatePasswordsMatch();
     toggleRegisterButtonDisable();
}
function validatePasswordsMatch() {
      const password = form.password().value;
    const confirmpassword = form.confirmpassword().value;
    form.passworddoesntmatch().style.display = confirmpassword == password ? 'none' : 'block'
}
function toggleRegisterButtonDisable() {
    form.registerButton().disabled = !isFormValid();

}
function isFormValid() {
    const email = form.email().value;
    if (!email || !validateEmail(email)) {
        return false;
    }

    const password = form.password().value;
    if (!password || password.length < 6) {
        return false;
    }

    const confirmPassword = form.confirmpassword().value;
    if (password != confirmPassword) {
        return false;
    }

    return true;
}
function register() {
    showLoading();
    const email = form.email().value;
    const password = form.password().value;

    firebase.auth().createUserWithEmailAndPassword(email, password).then(()=>{
        hideLoading();
        window.location.href= 'home.html';
    }).catch(error => {
        hideLoading();
        alert(getErrorMessage(error));
    })
}
function getErrorMessage(error) {
    if (error.code == 'auth/email-already-in-use'){
        return "email já está em uso"
    }}
   
function login() {
    showLoading()
    setTimeout(() => window.location.href = "index.html", 500);
}
function togglePassword(button) {
    const password = form.password();
    const confirmpassword = form.confirmpassword();
    
    password.type = password.type === "password" ? "text" : "password";
    confirmpassword.type = confirmpassword.type === "password" ? "text" : "password";
    if (password.type === "text") {
        button.textContent = "Ocultar senha";
    } else {
        button.textContent = "Mostrar senha";
    }

}
const form = {
    email: () => document.getElementById('email'),
    emailinvaliderror: () => document.getElementById('email-invalid-error'),
    emailrequirederror: () => document.getElementById('email-required-error'),
    password: () => document.getElementById('password'),
    passwordrequirederror: () => document.getElementById('password-required-error'),
    passwordminlengherror: () => document.getElementById('password-min-lengh-error'),
    confirmpassword: () => document.getElementById('confirm-password'),
    passworddoesntmatch: () => document.getElementById('password-doesnt-match-error'),
    registerButton: () => document.getElementById('register-button')
}