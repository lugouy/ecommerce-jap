//Función que se ejecuta una vez que se haya lanzado el evento de
//que el documento se encuentra cargado, es decir, se encuentran todos los
//elementos HTML presentes.

function validarCarrito() { 
    var calle = document.getElementById('calle').value;
   if(calle.length == 0) {
           return;
    } 
    
  var numero = document.getElementById('numero').value;
   if (numero.length == 0) { 
   return; 
  } 
  var esquina = document.getElementById('esquina').value;
   if(esquina.length == 0) {
    return; 
  } 
  var paisVal = document.getElementById('pais').value
  if(paisVal == 0) {
    return;
  }
  
  else swal("¡Se ha realizado la compra con éxito! :)", {
      icon: "success",
      }
    )
    .then(function() {
      window.location.href = "./index2.html";
      
    });  
}

// function validarTc() {
//   // document.getElementById("tcForm").onsubmit = function (e){
//   var tc = document.getElementById("tcNumber").value;
//   if(tc.length == 0) {
//     return;
//   }
//   else 
//   window.location.href = "./index2.html";
// // }

// }

document.addEventListener("DOMContentLoaded", function(e){
        showCart();
          function showCart() {
              fetch(CART_INFO_URL)
                .then((result) => result.json())
                .then((data) => {
    
                    cart = data
                    let name = cart.articles[0].name;
                    
                    let onlycost = cart.articles[0].unitCost;
                    let cost = cart.articles[0].currency + " " + cart.articles[0].unitCost;
                    let image = cart.articles[0].src;
                    let count = cart.articles[0].count;
                    let carts = "";
                    carts += `
                    <img height=300 width=50 class="img-fluid img-thumbnail" src="` + image + `" alt="" style= "border:0;">
                    `
                    // document.getElementById("imagen").innerHTML = carts;
                    // name.innerHTML= cart.articles[0].name;
                    // document.getElementById("costo").innerHTML= cart.articles[0].currency + " " + cart.articles[0].unitCost;
                    // document.getElementById("cantidades").defaultValue = count;
                    // cost.value = cart.articles[0].unitCost
                    setearParametros(count, name, carts, cost);
                  });
            }

              function setearParametros (count, name, carts, cost) {
                document.getElementById("imagen").innerHTML = carts;
                    document.getElementById("nombre").innerHTML = name
                    document.getElementById("costo").innerHTML= cost;
                    document.getElementById("cantidades").defaultValue = count;
              
              }


                  let unitCost = 100;
                  let productCount = 2;
                  let currency = "UYU";
                  let porcentajeEnvio = 0.05;

                function updateTotalCosts(){
                  let unitProductCost = document.getElementById("subTotal");
                  let shippingCost = document.getElementById("envio");
                  let totalCost = document.getElementById("totalCost");
                  let productCost = unitCost * productCount;
                  let unitCostToShow = currency + " " + unitCost * productCount;
                  let shippingToShow = currency + " " + Math.round(unitCost * productCount * porcentajeEnvio);
                  let totalCostToShow = currency + " " + (Math.round(unitCost * productCount * porcentajeEnvio) + productCost);

                  unitProductCost.innerHTML = unitCostToShow;
                  shippingCost.innerHTML = shippingToShow;
                  totalCost.innerHTML = totalCostToShow;
                  }
                    updateTotalCosts();
                    
                  // document.getElementById("subTotal").onchange= function(){
                  //     unitCost = this.value;
                  //     updateTotalCosts();
                  // }); Este me sirve para el desafiate
                  // console.log("b")
                  // console.log(document.getElementById("costo"))
                  document.getElementById("cantidades").onchange = function(){
                      productCount = this.value;
                      
                      updateTotalCosts();
                  };

                  document.getElementById("premiumradio").onchange= function(){
                      porcentajeEnvio = 0.15;
                      updateTotalCosts();
                  };
                  
                  document.getElementById("expressradio").onchange= function(){
                      porcentajeEnvio = 0.07;
                      updateTotalCosts();
                  };

                  document.getElementById("standardradio").onchange= function(){
                      porcentajeEnvio = 0.05;
                      updateTotalCosts();
                  };

                  

                  document.getElementById("finalizar").onclick = function(e) {
                    var paisVal = document.getElementById('pais').value
                  
                    let commentOculto = ""
                    if (paisVal == 0) {
                        commentOculto = ` 
                        <b>Debes seleccionar un país.</b>
                    `
                    }
                     var pdetc = document.getElementById('pmetodo').innerHTML;
                     let commentOcultoPago = ""
                     if (pdetc == "No has seleccionado un método" ){
                      
                      
                      commentOcultoPago = ` 
                        <b>Debes seleccionar un método de pago.</b>
                    `

                     }
                    else {
                                  validarCarrito(e); 
                    } 
                    document.getElementById("oculto").innerHTML = commentOculto;
                    document.getElementById("ocultopago").innerHTML = commentOcultoPago;

                }
            
                // document.getElementById("paymentMethodButton").onclick = function() {
                //   document.getElementById('tcNumber').disabled = true
                //   document.getElementById('mes').disabled = true
                //   document.getElementById('año').disabled = true
                //   document.getElementById('cvc').disabled = true
                //   document.getElementById("cuenta").disabled = true
                // }
  
          document.getElementById("paymentTC").onchange = function() {
            document.getElementById('tcNumber').disabled = false
              document.getElementById('mes').disabled = false
              document.getElementById('año').disabled = false
              document.getElementById('cvc').disabled = false
            if(this.value == "tc") {
              document.getElementById("pmetodo").innerHTML = `<p class="pstyle"><b>Tarjeta de crédito</b></p>`;
              
            }

          }
          document.getElementById("paymentBank").onclick = function() {
            document.getElementById('tcNumber').disabled = true
              document.getElementById('mes').disabled = true
              document.getElementById('año').disabled = true
              document.getElementById('cvc').disabled = true
              document.getElementById('tcNumber').value = ""
              document.getElementById('mes').value = ""
              document.getElementById('año').value = ""
              document.getElementById('cvc').value = ""
            validarTc()
          }

          document.getElementById("paymentTC").onclick = function() {
            document.getElementById("cuenta").disabled = true
            document.getElementById("cuenta").value = ""
            validarCb()
          }

          document.getElementById("paymentBank").onchange = function() {
            document.getElementById("cuenta").disabled = false
            if(this.value == "tb") {
              document.getElementById("pmetodo").innerHTML = `<p class="pstyle"><b>Transferencia bancaria</b></p>`;
              
              
           }
           
          }
          

          function validarTc(){ 
            var numeroTC = document.getElementById('tcNumber').value;
            var mesTC = document.getElementById('mes').value; 
            var añoTC = document.getElementById('año').value;
            var cvc = document.getElementById('cvc').value;
            
            var boton = document.getElementById('cerrarModal');
            validar = 0
            
            if (numeroTC == "") {
              
                validar++;
             } if (mesTC == "") {
              
              validar++;
              } if (añoTC == "") {
                  
                validar++;
            } if (cvc == "") {
                  
              validar++;
          } 
            if (validar == 0) {
              boton.disabled = false
            } else {
              boton.disabled = true
            }
          }
        

          function validarCb() {
            var cuenta = document.getElementById('cuenta').value;
            var boton = document.getElementById('cerrarModal');
            validar = 0
            
              if (cuenta == "") {
                    
                validar++;
            } 
            if (validar == 0) {
              boton.disabled = false
            } else {
              boton.disabled = true
            }
          }
        
           
          document.getElementById('tcNumber').onkeyup = function(){validarTc()}
          document.getElementById('mes').onkeyup = function(){validarTc()}
          document.getElementById('año').onkeyup = function(){validarTc()}
          document.getElementById('cvc').onkeyup = function(){validarTc()}
          document.getElementById('cuenta').onkeyup = function(){validarCb()}
                  

        let urlpaises = "http://vocab.nic.in/rest.php/country/json";

 function mostrarpaises() {
      fetch(urlpaises)
      .then((result) => result.json())
      .then((data) => {
        
        let arrSort = []
        
          for (let i = 0; i < (data.countries).length; i++) {
            
            let nombrePais = data.countries[i].country.country_name
            arrSort.unshift(nombrePais)
            arrSort.sort()
              
           }
           for (let i = 0; i < (arrSort).length; i++) {

            let options = `<option value=`+ arrSort[i] +`>`+ arrSort[i] + `</option>`
            document.getElementById("pais").innerHTML += options
           }
        })
 }
 mostrarpaises()


// function guardartc () {
          //   let datosTc = {
          //     numeroTC: document.getElementById('tcNumber').value, 
          //     mesTC: document.getElementById('mes').value, 
          //     añoTC: document.getElementById('año').value,
          //   }
          //   localStorage.setItem('datosTC', JSON.stringify(datosTc));
          // }

          // function mostrartc (){
          //   let datosTcJSON = JSON.parse(localStorage.getItem('datosTC'));

          //     document.getElementById('tcNumber').value = datosTcJSON.numeroTC;
          //     document.getElementById('mes').value = datosTcJSON.mesTC;
          //     document.getElementById('año').value = datosTcJSON.añoTC;
            
          // }



          // function guardartb () {
          //   let datosTb = {
          //     cuenta: document.getElementById("pepito").value,
          //   }
          //   localStorage.setItem("datosTB", JSON.stringify(datosTb))
          // }

          // function mostrartb () {
          //   let datosTbJSON = JSON.parse(localStorage.getItem('datosTB'));
          //   document.getElementById('pepito').value = datosTbJSON.cuenta;
          // }
          

              
});