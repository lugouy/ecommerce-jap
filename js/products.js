document.addEventListener("DOMContentLoaded", function (e) {
  var maximo = null;
  var minimo = null;
  
  function showCars() {
    fetch(PRODUCTS_URL)
      .then((result) => result.json())
      .then((data) => {
        let product =  `
        <div class="album py-5 bg-light">
          <div class="container">
            <div class="row">
        `
        document.getElementById("cat-list-container").innerHTML = product
        for (let i = 0; i < data.length; i++) {
          let auto = data[i];
          let description = auto.description;
          let cost = auto.cost;
          let currency = auto.currency;
          let name = auto.name;
          let image = auto.imgSrc;
          let sold = auto.soldCount;
          product +=
          ` 
          <div class="col-md-6" >
            <a href="product-info.html" class="card mb-4 shadow-sm custom-card">
                <img class="bd-placeholder-img card-img-top"  src="` + image +`" alt="` + description + `">
                <h3 class="m-3">` + name + `</h3>
                <small class="m-3">` + currency + " " + cost + `</small>
                <small class="m-3"> <b> Vendidos:` + " " + sold + `</b></small>
                <div class="card-body">
                <div class="card-text"> <h5>` + description + `</h5></div>
                </div>
              </a>
              </div>
      `
          document.getElementById("cat-list-container").innerHTML += product;
        }
        product +=
        `</div>
        </div>
        </div>`
        document.getElementById("cat-list-container").innerHTML = product;
      });
  }

  function showFilterCars() {
    
    fetch(PRODUCTS_URL)
      .then((result) => result.json())
      .then((data) => {
        let productFiltrado =  `
        <div class="album py-5 bg-light">
          <div class="container">
            <div class="row">
        `
        document.getElementById("cat-list-container").innerHTML = productFiltrado;
        for (let i = 0; i < data.length; i++) {
          let auto = data[i];
          let description = auto.description;
          let cost = auto.cost;
          let currency = auto.currency;
          let name = auto.name;
          let image = auto.imgSrc;
          let sold = auto.soldCount;
          if (
            (minimo == null || (minimo != null && cost >= minimo)) &&
            (maximo == null || (maximo != null && cost <= maximo))
          ) {
            productFiltrado +=
            ` 
            <div class="col-md-6" >
            <a href="product-info.html" class="card mb-4 shadow-sm custom-card">
                <img class="bd-placeholder-img card-img-top"  src="` + image +`" alt="` + description + `">
                <h3 class="m-3">` + name + `</h3>
                <small class="m-3">` + currency + " " + cost + `</small>
                <small class="m-3"> <b> Vendidos:` + " " + sold + `</b></small>
                <div class="card-body">
                <div class="card-text"> <h5>` + description + `</h5></div>
                </div>
              </a>
              </div>
      `;
            document.getElementById("cat-list-container").innerHTML =
              productFiltrado;
          }
        }
        productFiltrado +=
        `</div>
        </div>
        </div>`
        document.getElementById("cat-list-container").innerHTML = productFiltrado;
      });
  }

  function sortAscendiente() {
    let productAscendiente = `
    <div class="album py-5 bg-light">
      <div class="container">
        <div class="row">
    `
    document.getElementById("cat-list-container").innerHTML = productAscendiente;
    fetch(PRODUCTS_URL)
      .then((result) => result.json())
      .then((data) => {
        console.log(data);
        data.sort(function (a, b) {
          return a.cost - b.cost;
        });
        console.log(data);
        for (let i = 0; i < data.length; i++) {
          let auto = data[i];
          let description = auto.description;
          let cost = auto.cost;
          let currency = auto.currency;
          let name = auto.name;
          let image = auto.imgSrc;
          let sold = auto.soldCount;
          productAscendiente +=
          `
          <div class="col-md-6" >
            <a href="product-info.html" class="card mb-4 shadow-sm custom-card">
                <img class="bd-placeholder-img card-img-top"  src="` + image +`" alt="` + description + `">
                <h3 class="m-3">` + name + `</h3>
                <small class="m-3">` + currency + " " + cost + `</small>
                <small class="m-3"> <b> Vendidos:` + " " + sold + `</b></small>
                <div class="card-body">
                <div class="card-text"> <h5>` + description + `</h5></div>
                </div>
              </a>
              </div>
      `;
          document.getElementById("cat-list-container").innerHTML =
            productAscendiente;
        }
        productAscendiente +=
        `</div>
        </div>
        </div>`
        document.getElementById("cat-list-container").innerHTML = productAscendiente;
      });
  }

  function sortDescendiente() {
    let productDescendiente = `
    <div class="album py-5 bg-light">
      <div class="container">
        <div class="row">
    `;
    fetch(PRODUCTS_URL)
      .then((result) => result.json())
      .then((data) => {
        console.log(data);
        data.sort(function (a, b) {
          return b.cost - a.cost;
        });
        console.log(data);
        for (let i = 0; i < data.length; i++) {
          let auto = data[i];
          let description = auto.description;
          let cost = auto.cost;
          let currency = auto.currency;
          let name = auto.name;
          let image = auto.imgSrc;
          let sold = auto.soldCount;
          productDescendiente +=
          `
          <div class="col-md-6" >
            <a href="product-info.html" class="card mb-4 shadow-sm custom-card">
                <img class="bd-placeholder-img card-img-top"  src="` + image +`" alt="` + description + `">
                <h3 class="m-3">` + name + `</h3>
                <small class="m-3">` + currency + " " + cost + `</small>
                <small class="m-3"> <b> Vendidos:` + " " + sold + `</b></small>
                <div class="card-body">
                <div class="card-text"> <h5>` + description + `</h5></div>
                </div>
              </a>
              </div>
      `;
          document.getElementById("cat-list-container").innerHTML =
            productDescendiente;
        }
        productDescendiente +=
        `</div>
        </div>
        </div>`
        document.getElementById("cat-list-container").innerHTML = productDescendiente;
      });
  }

  function sortRelev() {
    let productRelev = `
    <div class="album py-5 bg-light">
      <div class="container">
        <div class="row">
    `;
    fetch(PRODUCTS_URL)
      .then((result) => result.json())
      .then((data) => {
        console.log(data);
        data.sort(function (a, b) {
          return b.soldCount - a.soldCount;
        });
        console.log(data);
        for (let i = 0; i < data.length; i++) {
          let auto = data[i];
          let description = auto.description;
          let cost = auto.cost;
          let currency = auto.currency;
          let name = auto.name;
          let image = auto.imgSrc;
          let sold = auto.soldCount;
          productRelev +=
          `
          <div class="col-md-6" >
            <a href="product-info.html" class="card mb-4 shadow-sm custom-card">
                <img class="bd-placeholder-img card-img-top"  src="` + image +`" alt="` + description + `">
                <h3 class="m-3">` + name + `</h3>
                <small class="m-3">` + currency + " " + cost + `</small>
                <small class="m-3"> <b> Vendidos:` + " " + sold + `</b></small>
                <div class="card-body">
                <div class="card-text"> <h5>` + description + `</h5></div>
                </div>
              </a>
              </div>
      `;
          document.getElementById("cat-list-container").innerHTML =
            productRelev;
        }
        productRelev +=
        `</div>
        </div>
        </div>`
        document.getElementById("cat-list-container").innerHTML = productRelev;
      });
  }

  showCars();
  document.getElementById("limpiar").onclick = function () {
    document.getElementById("filterMin").value = "";
    document.getElementById("filterMax").value = "";
    document.getElementById("cat-list-container").innerHTML = "";
    showCars();
  };
  document.getElementById("filtro").onclick = function () {
    minimo = document.getElementById("filterMin").value;
    maximo = document.getElementById("filterMax").value;
    showFilterCars();
  };

  document.getElementById("ascendiente").onclick = function () {
    sortAscendiente();
  };

  document.getElementById("descendiente").onclick = function () {
    sortDescendiente();
  };

  document.getElementById("cantidad").onclick = function () {
    sortRelev();
  };
});
