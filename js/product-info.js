document.addEventListener("DOMContentLoaded", function(e){
    fetch(PRODUCT_INFO_URL)
      .then((result) => result.json())
      .then((data) => {
            let auto = data;
            let precio = document.getElementById("precio");
            let vendidos = document.getElementById("vendidos");
            let description = document.getElementById("descripcion");
            let categoria = document.getElementById("categoria");
            let images = auto.images;
            let pepito = "";
            // Esto es el Desafiate entrega 4
                pepito += `
                
                            <div class="col-lg-9 col-md-9 col-9">
                            <div class="item-list" style="border: 8px solid;
                             box-shadow: 0px 0px 0px 10px #888888; border-radius: 7px; -moz-border-radius: 7px; -webkit-border-radius: 7px;  float: left;/*added*/ width: 100%;/*added*/">
                                             <div id="carouselImages" class="carousel slide" data-interval="1500" data-ride="carousel">
                                                <ol class="carousel-indicators">
                                    <li data-target="#carouselExampleCaptions" data-slide-to="0" class="active"></li>
                                    <li data-target="#carouselExampleCaptions" data-slide-to="1"></li>
                                    <li data-target="#carouselExampleCaptions" data-slide-to="2"></li>
                                    <li data-target="#carouselExampleCaptions" data-slide-to="3"></li>
                                    <li data-target="#carouselExampleCaptions" data-slide-to="4"></li>
                                </ol>
                                <div class="carousel-inner">
                                    <div class="carousel-item active">
                                    <img src="` + images[0] + `" class="d-block w-100" alt="...">
                                    </div>
                                    <div class="carousel-item">
                                    <img src="` + images[1] + `" class="d-block w-100" alt="...">
                                    </div>
                                    <div class="carousel-item">
                                    <img src="` + images[2] + `" class="d-block w-100" alt="...">
                                    </div>
                                    <div class="carousel-item">
                                    <img src="` + images[3] + `" class="d-block w-100" alt="...">
                                    </div>
                                    <div class="carousel-item">
                                    <img src="` + images[4] + `" class="d-block w-100" alt="...">
                                    </div>
                                </div>
                                <a class="carousel-control-prev" href="#carouselImages" role="button" data-slide="prev">
                                    <span class="carousel-control-prev-icon" aria-hidden="true"></span>
                                    <span class="sr-only">Previous</span>
                                </a>
                                <a class="carousel-control-next" href="#carouselImages" role="button" data-slide="next">
                                    <span class="carousel-control-next-icon" aria-hidden="true"></span>
                                    <span class="sr-only">Next</span>
                                </a>
                                </div>
                                </div>
                                </div>

                `
                
                document.getElementById("productImages").innerHTML = pepito
            

            precio.innerHTML = auto.currency + " " + auto.cost;
            vendidos.innerHTML = auto.soldCount;
            description.innerHTML = auto.description;
            categoria.innerHTML = auto.category;
      });

fetch(PRODUCT_INFO_COMMENTS_URL)
.then((result) => result.json())
.then((data) => {
    for (let i = 0; i < data.length; i++) {
        let comment = data[i];
        let score = comment.score;
        let description = comment.description;
        let user = comment.user;
        let date = comment.dateTime;
        let stars = ""; // Como poner estrellas
        for(let estrella = 0; estrella < score; estrella++)
        stars += '<span class="fa fa-star checked" style="color: pink"/>';
        let comentarios = "";
        comentarios +=
        `
        <a class="list-group-item list-group-item-action">
        <div class="row">
            <div class="col">
                <div class="d-flex w-100 justify-content-between">
                    <h4 class="mb-1">` + stars + `</h4>
                    <small class="text-muted"><b style="color: rgb(52, 245, 197)">` + user + `</b></small>
                </div>
                <div class="d-flex w-100 justify-content-between">
                <h4 class="mb-1"> </h4>
                    <small class="text-muted"> ` + date + `</small>
                </div>
                <div class="text-muted"> <h5>` + description + `</h5></div>
            </div>
        </div>
    </a>
    `;
        document.getElementById("comentarios").innerHTML += comentarios;
      }
});
// Entrega 4
function showRelated(){
           fetch(PRODUCTS_URL)
      .then((result) => result.json())
      .then((data) => {
                for (let i = 0; i < data.length; i++) { 
                    if ((i == 1 || i == 3)) {
            rel = data [i]
            let name = rel.name;
        let images = rel.imgSrc
        console.log(images)
            
        let pepita = "";
        
            pepita += `
            <a href="product-info.html" class="list-group-item" style="color:black">
            <div class="col">
                    <div class="d-flex w-100 justify-content-center">
                        <h4 class="mb-1">` + name + `</h4>
                        </div>
                    
            <div class="d-block mb-4 h-100">
              <img height=800 width=400 class="img-fluid img-thumbnail" src="` + images + `" alt=""> 
              
              </div>                    
            </div>
        </a>
            `
            document.getElementById("relatedProducts").innerHTML += pepita;
        }
         }
        
    });
    
}
showRelated()
// Fin Entrega 4
});
// Esto es el Desafiate entrega 3
document.getElementById("sendCommentsBTN").onclick = function () {
    let texto = document.getElementById("textarea").value;
    let calif = document.getElementById("calif").value;
    let commentOculto = ""
    if (texto.length == 0 || calif == 0) { //Para el p oculto
        commentOculto = ` 
        <b>Debes dejar un comentario y seleccionar una puntuación.</b>
    `
    }
    else {
    var user =  localStorage.getItem("user");
    var today = new Date();
var date = today.getFullYear()+'-'+String(today.getMonth()+1).padStart(2, "0")+'-'+String(today.getDate()).padStart(2, "0"); //padstart es para que me rellene el string con un 0 (en este caso) si el largo es menor a 2 (en este caso)
var time = today.getHours() + ":" + today.getMinutes() + ":" + today.getSeconds();
var dateTime = date+' '+time;
    let stars = "";
    for(let estrella = 0; estrella < calif; estrella++)
        stars += '<span class="fa fa-star checked" style="color: pink"/>';
    let comentarioAgregado = "";
    comentarioAgregado += `
    <a class="list-group-item list-group-item-action">
        <div class="row">
            <div class="col">
                <div class="d-flex w-100 justify-content-between">
                    <h4 class="mb-1">` + stars + `</h4>
                    <small class="text-muted"><b style="color: rgb(52, 245, 197)">` + user + `</b></small>
                </div>
                <div class="d-flex w-100 justify-content-between">
                <h4 class="mb-1"> </h4>
                    <small class="text-muted">` + dateTime +  `</small>
                </div>
                <div class="text-muted"> <h5>` + texto + `</h5></div>
            </div>
                </div>
                </div>
    </a>
    `
    document.getElementById("comentarios").innerHTML += comentarioAgregado;
    document.getElementById("textarea").value = ""
    document.getElementById("calif").value = 0
    }
    document.getElementById("oculto").innerHTML = commentOculto;
}



