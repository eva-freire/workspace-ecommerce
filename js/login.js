let loginButton = document.getElementById("loginBtn")
let username = document.getElementById("username")
let password = document.getElementById("password")

/*function validar(){
if (username.value==""|| password.value=="") {
     alert("Por favor, ingrese los datos necesarios");
    } else {
        window.location="index.html";
    }
}*/

document.addEventListener("DOMContentLoaded", function(){
    loginButton.addEventListener("click",function (event){
        event.preventDefault(); //Puse esto provisorio mientras no tenemos que enviar nada a servidor. Evita que el -button type "submit"- refresque la pagina.

        if (username.value == "" || password.value == "") {
            alert("Ingrese los datos correspondientes");
        } else { 
           window.location.href = "index.html";
        } 
    })
});





