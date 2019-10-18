//llamo al modal 
var modal = document.getElementById("myModal");

//llamo al boton que abre el modal
var btn = document.getElementById("myBtn");

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
    document.getElementById("nombre") =     "TU VIEJA";
}
