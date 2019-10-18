/*MODAL*/

//llamo al modal 
var modal = document.getElementById("Modal");
//llamo al boton que abre el modal
var btn = document.getElementById("boton");

//llamo al <span> que cierra al modal
var span = document.getElementsByClassName("close")[0];

//cuando el usuario clickea el modal se va a abrir
btn.onclick = function() {
    modal.style.display = "block";
}
//Cuando el usuario clickea <span> (x), cierra el modal
span.onclick = function() {
    modal.style.display = "none";
  }

//Cuando el usuario clickea fuera del modal se cierra
window.onclick = function(event) {
    if (event.target == modal) {
      modal.style.display = "none";
    }
}


function mostrarDatosModal(){
    var nombre = document.getElementById("nombre").value;
    var usuario = document.getElementById("usuario").value;
    var email = document.getElementById("email").value;
    var telefono = document.getElementById("telefono").value;
    
    document.getElementById("nombre1").innerHTML ="Nombre: " + nombre;
    document.getElementById("usuario1").innerHTML ="Usuario: " + usuario;
    document.getElementById("email1").innerHTML = "Email: "+email;
    document.getElementById("telefono1").innerHTML = "Telefono: "+telefono;
    
}
