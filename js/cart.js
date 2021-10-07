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

let productCost = 100;
let productCount = 2;
let MONEY_SYMBOL = "UYU";
let PERCENTAGE_SYMBOL = '%';
let comissionPercentage = 0;

function updateTotalCosts(){
  let unitProductCost = document.getElementById("subTotal");
  let comissionCost = document.getElementById("comission");
  let totalCost = document.getElementById("totalCost");

  let unitCost = productCost * productCount;
  let unitCostToShow = MONEY_SYMBOL + " " + productCost * productCount;
  let comissionToShow = Math.round((comissionPercentage * 100)) + PERCENTAGE_SYMBOL;
  let totalCostToShow = MONEY_SYMBOL + " " + (Math.round(productCost * productCount * comissionPercentage * 100) / 100 + unitCost);

  unitProductCost.innerHTML = unitCostToShow;
  comissionCost.innerHTML = comissionToShow;
  totalCost.innerHTML = totalCostToShow;
}

document.addEventListener("DOMContentLoaded", function(e){
     function showCart() {
        fetch(CART_INFO_URL)
          .then((result) => result.json())
          .then((data) => {
              cart = data
              let name = document.getElementById("nombre");
              let cost = document.getElementById("costo");
              let image = cart.articles[0].src;
              let carts = "";
              carts += `
              <img height=300 width=50 class="img-fluid img-thumbnail" src="` + image + `" alt="" style= "border:0;">
              `
               document.getElementById("imagen").innerHTML = carts;
               name.innerHTML= cart.articles[0].name;
               cost.innerHTML= cart.articles[0].currency + " " + cart.articles[0].unitCost;
            });
      }
    
      showCart();

      document.getElementById("cantidades").defaultValue = "2";
    
      updateTotalCosts();

    document.getElementById("subTotal").addEventListener("change", function(){
        productCost = this.value;
        updateTotalCosts();
    });
    document.getElementById("cantidades").addEventListener("change", function(){
        productCount = this.value;
        updateTotalCosts();
    });

    document.getElementById("flashradio").addEventListener("change", function(){
        comissionPercentage = 0.20;
        updateTotalCosts();
    });
    
    document.getElementById("speedyradio").addEventListener("change", function(){
        comissionPercentage = 0.10;
        updateTotalCosts();
    });

    document.getElementById("droopyradio").addEventListener("change", function(){
        comissionPercentage = 0;
        updateTotalCosts();
    });

    

document.getElementById("finalizar").onclick = function(e) {
    validarCarrito(e);  
  }
});

