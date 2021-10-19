//Función que se ejecuta una vez que se haya lanzado el evento de
//que el documento se encuentra cargado, es decir, se encuentran todos los
//elementos HTML presentes.
document.addEventListener("DOMContentLoaded", function (e) {
    
document.getElementById("guardar").onclick = function(e) { 
    if (document.getElementById('firstName').value && document.getElementById('firstLastName').value && document.getElementById('email').value && document.getElementById('phone').value) {
    localStorage.setItem('firstName', document.getElementById('firstName').value);
    localStorage.setItem('secondName', document.getElementById('secondName').value);
    localStorage.setItem('firstLastName', document.getElementById('firstLastName').value);
    localStorage.setItem('secondLastName', document.getElementById('secondLastName').value);
    localStorage.setItem('email', document.getElementById('email').value);
    localStorage.setItem('phone', document.getElementById('phone').value);
    validarFormulario();
    }
}

function validarFormulario() { 
    let firstNameVal = document.getElementById('firstName').value;
     if(firstNameVal.length == 0) {
      return; 
    } 
    let firstLastNameVal = document.getElementById('firstLastName').value;
     if (firstLastNameVal.length == 0) { 
     return; 
    } 
    let emailVal = document.getElementById('email').value;
     if (emailVal.length == 0) { 
     return; 
    } 
    let phoneVal = document.getElementById('phone').value;
     if (phoneVal.length == 0) { 
     return; 
    }   else swal("¡Sus cambios se han guardado con éxito! :)", {
        icon: "success",
        }
      )
      .then(function() {
        window.location.href = "my-profile.html";
        
      });    
 }
 function formReady(){
    let firstName = localStorage.getItem("firstName");
    let secondName = localStorage.getItem("secondName");
    let firstLastName = localStorage.getItem("firstLastName");
    let secondLastName = localStorage.getItem("secondLastName");
    let email = localStorage.getItem("email");
    let phone = localStorage.getItem("phone");
    if (firstName &&  firstLastName && email && phone) {
            document.getElementById('divMaster').innerHTML = `
                    <div class="row justify-content-md-center">
                     <div class="col-md-8 order-md-1">
                             <form>
                                <hr class="mb-4">
                                    <div class="row">
                                    <div class="col-md-6 mb-3" style="display: inline-block">
                                    <label for="firstName" style="display: block;"><b>Primer nombre</b></label>
                                    <p> `+ firstName+`</p>
                                    </div>
                                    <div class="col-md-6 mb-3"> 
                                    <label for="secondName" style="display: block;" id="segundo"><b>Segundo nombre</b></label>
                                    <p> `+ secondName+`</p>
                                    </div>
                                    <div class="col-md-6 mb-3" style="display: inline-block">
                                    <label for="firstLastName" style="display: block;"><b>Primer apellido</b></label>
                                    <p> `+ firstLastName+`</p>
                                    </div>
                                    <div class="col-md-6 mb-3">
                                    <label for="secondLastName" style="display: block;" id="segundoApellido"><b>Segundo apellido</b></label>
                                    <p> `+ secondLastName+`</p>
                                    </div>
                                    <div class="col-md-6 mb-3">
                                    <label for="email"><b>Email</b></label>
                                    <p> `+ email+`</p>
                                    </div>
                                    <div class="col-md-6 mb-3">
                                    <label for="phone"><b>Teléfono de contacto</b></label>
                                    <p> `+ phone+`</p>
                                    </div>
                                    </div>
                                    <hr class="mb-4">
                                    <button class="btn btn-primary btn-lg" type="submit" id="modificar">Modificar datos</button>
                                </form> 
                            </div>
                        </div>
                    </div>
                        `
                        if(!secondName) {
                            document.getElementById("segundo").innerHTML = ""
                        }
                        if(!secondLastName) {
                            document.getElementById("segundoApellido").innerHTML = ""
                        } 
    }
    
 }
            formReady()
            document.getElementById("modificar").onclick = function(e) { 
                localStorage.removeItem("firstName")
                localStorage.removeItem("secondName")
                localStorage.removeItem("firstLastName")
                localStorage.removeItem("secondLastName")
                localStorage.removeItem("email")
                localStorage.removeItem("phone")
                window.location.href = "my-profile.html"
            }
//  showValues();
//  function showValues() {
//     let firstName = localStorage.getItem("firstName");
//     let secondName = localStorage.getItem("secondName");
//     let firstLastName = localStorage.getItem("firstLastName");
//     let secondLastName = localStorage.getItem("secondLastName");
//     let email = localStorage.getItem("email");
//     let phone = localStorage.getItem("phone");
//     if (firstName) {
//     document.getElementById("firstName").value = firstName;
//     }
//     if (secondName) {
//     document.getElementById("secondName").value = secondName;
//     }
//     if (firstLastName) {
//     document.getElementById("firstLastName").value = firstLastName;
//     }
//     if (secondLastName) {
//     document.getElementById("secondLastName").value = secondLastName;
//     }
//     if (email) {
//     document.getElementById("email").value = email;
//     }
//     if (phone) {
//         document.getElementById("phone").value = phone;
//         }
//  }

});