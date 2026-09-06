function showLoading() {
    const div = document.createElement("div");
    div.classList.add("loading", "centralized");
    
    const label = document.createElement("label");
    label.innerText = "carregando...";

    div.appendChild(label);
    document.body.appendChild(div);
    
    
}
function hideLoading() {
   const loadings = document.getElementsByClassName("loading", "centralized");
   if (loadings.length) {
    loadings[0].remove();

   }

}