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
            for (let i = 0; i < images.length; i++) { 
                let image = images[i];
                pepito += `
                <div class="col-lg-3 col-md-4 col-6">
                    <div class="d-block mb-4 h-100">
                        <img id="imagenes" style="cursor: zoom-in" height=800 width=400 class="img-fluid img-thumbnail" src="` + image + `" alt="">
                    </div>
                </div>
                `
                document.getElementById("productImages").innerHTML = pepito
            }

            precio.innerHTML = auto.currency + " " + auto.cost;
            vendidos.innerHTML = auto.soldCount;
            description.innerHTML = auto.description;
            categoria.innerHTML = auto.category;
      });
    //   document.getElementById("productImages").onclick = function () {
    //   imgAg= document.getElementById("images");
    //   imgAg.style.transform = 'scale(1.9)'
    //   }

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
                    <small class="text-muted"><b>` + description + `</b></small>
                </div>
                <div class="d-flex w-100 justify-content-between">
                <h4 class="mb-1"> </h4>
                    <small class="text-muted"> ` + date + `</small>
                </div>
                <div class="text-muted"> <h5 style="color: rgb(52, 245, 197)">` + user + `</h5></div>
            </div>
        </div>
    </a>
    `;
        document.getElementById("comentarios").innerHTML += comentarios;
      }
});
// Hasta aca va todo bien
// Para agregar los comentarios se me ocurre agarrar el value del textarea y de la calificacion y agregar un onclick al boton para que se agregue al id comentarios con un innerhtml
});
// Esto es el Desafiate
document.getElementById("sendCommentsBTN").onclick = function () {
    let texto = document.getElementById("textarea").value;
    let calif = document.getElementById("calif").value;
    let commentOculto = ""
    if (texto.length == 0 || calif == 0) {
        commentOculto = ` 
        <b>Debes dejar un comentario y seleccionar una puntuación.</b>
    `
    }
    else {
    var user =  sessionStorage.getItem("user");
    var today = new Date();
var date = today.getFullYear()+'-'+String(today.getMonth()+1).padStart(2, "0")+'-'+String(today.getDate()).padStart(2, "0");
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
                    <small class="text-muted"><b>` + texto + `</b></small>
                </div>
                <div class="d-flex w-100 justify-content-between">
                <h4 class="mb-1"> </h4>
                    <small class="text-muted">` + dateTime +  `</small>
                </div>
                <div class="text-muted"> <h5 style="color: rgb(52, 245, 197)">` + user + `</h5></div>
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



// function zoomIn() {
//     var GFG = document.getElementById("imagenes");
//     var currWidth = GFG.clientWidth;
//     GFG.style.width = (currWidth + 100) + "px";
// }
  
// function zoomOut() {
//     var GFG = document.getElementById("imagenes");
//     var currWidth = GFG.clientWidth;
//     GFG.style.width = (currWidth - 100) + "px";
// }



// function showRelated(){
//     fetch(PRODUCT_INFO_URL)
//       .then((result) => result.json())
//       .then((data) => {
//         let auto = data;
//         let related = auto.relatedProducts;
//         let pepita = "";
//         for (let i = 0; i < related.length; i++) { 
//             let relacionado = related[i];
//             pepita += `
//             <div class="col-lg-3 col-md-4 col-6">
//                 <div class="d-block mb-4 h-100">
//                     <img height=800 width=400 class="img-fluid img-thumbnail" src="` + relacionado + `" alt="">
//                 </div>
//             </div>
//             `
//             document.getElementById("productImages").innerHTML = pepita;
//         }
//     });
// }
