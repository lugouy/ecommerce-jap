//Función que se ejecuta una vez que se haya lanzado el evento de
//que el documento se encuentra cargado, es decir, se encuentran todos los
//elementos HTML presentes.
document.addEventListener("DOMContentLoaded", function (e) {
    
    function setear() {
        let datos = {firstName: document.getElementById('firstName').value, secondName: document.getElementById('secondName').value, firstLastName: document.getElementById('firstLastName').value, secondLastName: document.getElementById('secondLastName').value, email: document.getElementById('email').value, phone: document.getElementById('phone').value}

        localStorage.setItem('datosJSON', JSON.stringify(datos));
        localStorage.setItem('datosDejar', JSON.stringify(datos));
        swal("¡Sus cambios se han guardado con éxito! :)", {
            icon: "success",
            }
          )
          .then(function() {
            window.location.href = "my-profile.html";
          });    
    }
    
document.getElementById("guardar").onclick = function(e) { 
    if (document.getElementById('firstName').value && document.getElementById('firstLastName').value && document.getElementById('email').value && document.getElementById('phone').value) {
        setear()
    }  
}

 function formReady(){

    let retrievedObject = JSON.parse(localStorage.getItem('datosJSON'));
    console.log(retrievedObject)
    let firstName = retrievedObject.firstName;
    let secondName = retrievedObject.secondName;
    let firstLastName = retrievedObject.firstLastName;
    let secondLastName = retrievedObject.secondLastName;
    let email = retrievedObject.email;
    let phone = retrievedObject.phone;
    if (firstName &&  firstLastName && email && phone) {    
            document.getElementById('divMaster').innerHTML = `
            <div >
                    <div class="row justify-content-md-center">
                     <div class="col-md-8 order-md-1">
                             <form>
                                <hr class="mb-4">
                                    <div class="row">
                                    <div class="col-md-6 mb-3" style="display: inline-block">
                                    <label for="firstName" style="display: block;"><b>Primer nombre</b></label>
                                    <p class="pstyle"> `+ firstName+`</p>
                                    </div>
                                    <div class="col-md-6 mb-3"> 
                                    <label for="secondName" style="display: block;" id="segundo"><b>Segundo nombre</b></label>
                                    <p class="pstyle" id="secondName"> `+ secondName+`</p>
                                    </div>
                                    <div class="col-md-6 mb-3" style="display: inline-block">
                                    <label for="firstLastName" style="display: block;"><b>Primer apellido</b></label>
                                    <p class="pstyle"> `+ firstLastName+`</p>
                                    </div>
                                    <div class="col-md-6 mb-3">
                                    <label for="secondLastName" style="display: block;" id="segundoApellido"><b>Segundo apellido</b></label>
                                    <p class="pstyle" id="secondLastName"> `+ secondLastName+`</p>
                                    </div>
                                    <div class="col-md-6 mb-3">
                                    <label for="email"><b>Email</b></label>
                                    <p class="pstyle"> `+ email+`</p>
                                    </div>
                                    <div class="col-md-6 mb-3">
                                    <label for="phone"><b>Teléfono de contacto</b></label>
                                    <p class="pstyle"> `+ phone+`</p>
                                    </div>
                                    </div>
                                    <hr class="mb-4">
                                    <button class="btn btn-primary btn-lg" type="submit" id="modificar">Modificar datos</button>
                                </form> 
                            </div>
                        </div>
                    </div>
                    </div>
                        `
                        if(!secondName) {
                            document.getElementById("segundo").innerHTML = "";
                            let element = document.getElementById("secondName");
                            element.classList.remove("pstyle");
                        }
                        if(!secondLastName) {
                            document.getElementById("segundoApellido").innerHTML = "";
                            let elements = document.getElementById("secondLastName");
                            elements.classList.remove("pstyle");
                        } 

                        
    }
    document.getElementById("modificar").onclick = function(e) { 
         localStorage.removeItem("datosJSON")
        window.location.href = "my-profile.html"
        
    }
 }
function dejarDatos(){
    let dejarDatos = JSON.parse(localStorage.getItem('datosDejar'));
    document.getElementById('firstName').value = dejarDatos.firstName
    document.getElementById('secondName').value= dejarDatos.secondName
    document.getElementById('firstLastName').value= dejarDatos.firstLastName
    document.getElementById('secondLastName').value= dejarDatos.secondLastName
    document.getElementById('email').value= dejarDatos.email
    document.getElementById('phone').value= dejarDatos.phone
}
dejarDatos()

 function formReadyShow(){
    if(localStorage.getItem('datosJSON')) {
        formReady()
    }
}
formReadyShow()
            
});