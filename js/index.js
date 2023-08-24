document.addEventListener("DOMContentLoaded", function(){
    document.getElementById("autos").addEventListener("click", function() {
        localStorage.setItem("catID", 101);
        window.location = "products.html"
    });
    document.getElementById("juguetes").addEventListener("click", function() {
        localStorage.setItem("catID", 102);
        window.location = "products.html"
    });
    document.getElementById("muebles").addEventListener("click", function() {
        localStorage.setItem("catID", 103);
        window.location = "products.html"
    });

    let storedUsuario = localStorage.getItem("user");
    let storedContraseña = localStorage.getItem("password");

    let nameUsuario = document.getElementById("nameUsuario");
    nameUsuario.innerText = "Hola, " + `${storedUsuario}`;

    if (!storedUsuario || !storedContraseña) {
        window.location.href="login.html";
    };
});