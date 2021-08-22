document.addEventListener("DOMContentLoaded", function(e){
    fetch(PRODUCTS_URL)
         .then(result => result.json())
         .then(data => {
            for(let i = 0; i < data.length; i++){
                let auto = data[i];                
            let description = auto.description;
            let cost = auto.cost;
            let currency = auto.currency;
            let name = auto.name;
            let image = auto.imgSrc;
            console.log(data);
            let product = "";
            product += `
            <div class="list-group-item list-group-item-action">
            <div class="row">
                <div class="col-3">
                    <img src="` + image + `" alt="` + description + `" class="img-thumbnail">
                </div>
                <div class="col">
                    <div class="d-flex w-100 justify-content-between">
                        <h4 class="mb-1">`+ name +`</h4>
                        <small class="text-muted">` + currency + ' ' + cost + `</small>
                    </div>
                
                    <div class="text-muted"> <h5>` + description + `</h5></div>
                </div>
                
            </div>
        </div>
        `
            document.getElementById("cat-list-container").innerHTML += product;
            };
     });
});
