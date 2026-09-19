function logout() {
    firebase.auth().signOut().then(() => {
        window.location.href = "index.html"
    }).catch(() => {
        alert('erro ao fazer logout');
    });
}
function copyEmail(texto){
    navigator.clipboard.writeText(texto);
    alert('copiado');
    
}
function copyTell(texto){
    navigator.clipboard.writeText(texto);
    alert('copiado');
}