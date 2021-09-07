      function showImage() {
      fetch(PRODUCT_INFO_URL)
      .then((result) => result.json())
      .then((data) => {
        let auto = data;
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
    });
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
document.addEventListener("DOMContentLoaded", function(e){
    fetch(PRODUCT_INFO_URL)
      .then((result) => result.json())
      .then((data) => {
            let auto = data;
            let precio = document.getElementById("precio");
            let vendidos = document.getElementById("vendidos");
            let description = document.getElementById("descripcion");
            let categoria = document.getElementById("categoria");

            precio.innerHTML = auto.currency + " " + auto.cost;
            vendidos.innerHTML = auto.soldCount;
            description.innerHTML = auto.description;
            categoria.innerHTML = auto.category;
      });
showImage();

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
});