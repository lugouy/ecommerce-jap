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
  else swal("¡Se ha realizado la compra con éxito! :)", {
      icon: "success",
      }
    )
    .then(function() {
      window.location.href = "./index2.html";
      
    });  
}

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
                  validarCarrito(e);  
                }
});