// SCRIPT DEL HEADER
const menu = document.querySelector('i');
const links = document.querySelector('nav');

menu.addEventListener("click", () =>{
    links.classList.toggle("mobile-menu")
});
// FIN DEL HEADER

// función: muestra mensaje en ventana emergente
let btnReproducir = document.getElementById("btnReproducir");
btnReproducir.addEventListener("click", (event) => {
    alert("JAJA PAGÁ NETFLIX");
});