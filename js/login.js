//Función que se ejecuta una vez que se haya lanzado el evento de
//que el documento se encuentra cargado, es decir, se encuentran todos los
//elementos HTML presentes.
document.addEventListener("DOMContentLoaded", function(e){
    
        document.getElementById("logButton").onclick = function(e) {
            validarFormulario (e);
            
        };   
});

function validarFormulario() { 
    var usuario = document.getElementById('user_id').value;
     if(usuario.length == 0) {
      return; 
    } 
    var password = document.getElementById('password').value;
     if (password.length == 0) { 
     return; 
    } 
    else 
    window.location.href = "./index2.html";
 }