 function onChangeEmail() {
        toggleButtonsDisable();
        toggleEmailErrors();
    }
function onChangePassword() {
        togglePasswordError();
        toggleButtonsDisable();
}
function isEmailValid() {
        const email = form.email().value;

        if (!email) {
            return false;
        }

        return validateEmail(email);
    }


 function isPasswordValid() {
        const password = form.password().value;

        if (!password) {
            return false;
        }

        return true;
    }
function toggleEmailErrors(){
    const email = form.email().value
    form.emailrequired().style.display = email ? 'none' : 'block';

    form.emailinvalid().style.display = validateEmail(email) ? 'none' : 'block';
    
    }
function togglePasswordError() {
        const password = form.password().value;
        form.passerror().style.display = password ? 'none' : 'block';
    }

function toggleButtonsDisable() {
          const emailValid = isEmailValid();
        const passwordValid = isPasswordValid();

        form.recover().disabled = !emailValid;
       form.login().disabled = !emailValid || !passwordValid;
    }
    const form = {
        email: () => document.getElementById('email'),
        password: () => document.getElementById('password'),
        login: () => document.getElementById('login-button'),
        recover: () => document.getElementById('revocer-password-button'),
        passerror: () => document.getElementById('password-required-error'),
        emailinvalid: () => document.getElementById('email-invalid-error'),
        emailrequired: () => document.getElementById('email-required-error'),

    }
    function login() {
        showLoading();
  firebase.auth().signInWithEmailAndPassword(form.email().value, form.password().value).then(Response => { hideLoading();
    console.log( window.location.href = "home.html");
  }).catch(error => { hideLoading();
    alert(getErrorMessage(error));
  });
    }

    function getErrorMessage(error) {
    if (error.code === "auth/invalid-credential") {
        return "E-mail ou senha inválidos";
    }
    

    

    return error.message;
}
    function register() {
        window.location.href = "register.html"
    }
    function recoverPassword() {
    showLoading();
    firebase.auth().sendPasswordResetEmail(form.email().value).then(() => {
        hideLoading();
        alert('Se o email for cadastrado, você receberá um email... verifique sua caixa de spam.');
    });
}
