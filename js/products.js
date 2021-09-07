document.addEventListener("DOMContentLoaded", function (e) {
  var maximo = null;
  var minimo = null;
  
  function showCars() {
    fetch(PRODUCTS_URL)
      .then((result) => result.json())
      .then((data) => {
        for (let i = 0; i < data.length; i++) {
          let auto = data[i];
          let description = auto.description;
          let cost = auto.cost;
          let currency = auto.currency;
          let name = auto.name;
          let image = auto.imgSrc;
          let sold = auto.soldCount;
          let product = "";
          product +=
          `
          <a href="product-info.html" class="list-group-item list-group-item-action">
          <div class="row">
              <div class="col-3">
                  <img src="` + image +`" alt="` + description + `" class="img-thumbnail">
              </div>
              <div class="col">
                  <div class="d-flex w-100 justify-content-between">
                      <h4 class="mb-1">` + name + `</h4>
                      <small class="text-muted">` + currency + " " + cost + `</small>
                  </div>
                  <div class="d-flex w-100 justify-content-between">
                  <h4 class="mb-1"> </h4>
                      <small class="text-muted"> <b> Vendidos:` + " " + sold + `</b></small>
                  </div>
                  <div class="text-muted"> <h5>` + description + `</h5></div>
              </div>
          </div>
      </a>
      `;
          document.getElementById("cat-list-container").innerHTML += product;
        }
      });
  }

  function showFilterCars() {
    let productFiltrado = "";
    fetch(PRODUCTS_URL)
      .then((result) => result.json())
      .then((data) => {
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
          <a href="product-info.html" class="list-group-item list-group-item-action">
          <div class="row">
              <div class="col-3">
                  <img src="` + image +`" alt="` + description + `" class="img-thumbnail">
              </div>
              <div class="col">
                  <div class="d-flex w-100 justify-content-between">
                      <h4 class="mb-1">` + name + `</h4>
                      <small class="text-muted">` + currency + " " + cost + `</small>
                  </div>
                  <div class="d-flex w-100 justify-content-between">
                  <h4 class="mb-1"> </h4>
                      <small class="text-muted"> <b> Vendidos:` + " " + sold + `</b></small>
                  </div>
                  <div class="text-muted"> <h5>` + description + `</h5></div>
              </div>
          </div>
      </a>
      `;
            document.getElementById("cat-list-container").innerHTML =
              productFiltrado;
          }
        }
      });
  }

  function sortAscendiente() {
    let productAscendiente = "";
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
          <a href="product-info.html" class="list-group-item list-group-item-action">
          <div class="row">
              <div class="col-3">
                  <img src="` + image +`" alt="` + description + `" class="img-thumbnail">
              </div>
              <div class="col">
                  <div class="d-flex w-100 justify-content-between">
                      <h4 class="mb-1">` + name + `</h4>
                      <small class="text-muted">` + currency + " " + cost + `</small>
                  </div>
                  <div class="d-flex w-100 justify-content-between">
                  <h4 class="mb-1"> </h4>
                      <small class="text-muted"> <b> Vendidos:` + " " + sold + `</b></small>
                  </div>
                  <div class="text-muted"> <h5>` + description + `</h5></div>
              </div>
          </div>
      </a>
      `;
          document.getElementById("cat-list-container").innerHTML =
            productAscendiente;
        }
      });
  }

  function sortDescendiente() {
    let productDescendiente = "";
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
          <a href="product-info.html" class="list-group-item list-group-item-action">
          <div class="row">
              <div class="col-3">
                  <img src="` + image +`" alt="` + description + `" class="img-thumbnail">
              </div>
              <div class="col">
                  <div class="d-flex w-100 justify-content-between">
                      <h4 class="mb-1">` + name + `</h4>
                      <small class="text-muted">` + currency + " " + cost + `</small>
                  </div>
                  <div class="d-flex w-100 justify-content-between">
                  <h4 class="mb-1"> </h4>
                      <small class="text-muted"> <b> Vendidos:` + " " + sold + `</b></small>
                  </div>
                  <div class="text-muted"> <h5>` + description + `</h5></div>
              </div>
          </div>
      </a>
      `;
          document.getElementById("cat-list-container").innerHTML =
            productDescendiente;
        }
      });
  }

  function sortRelev() {
    let productRelev = "";
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
          <a href="product-info.html" class="list-group-item list-group-item-action">
          <div class="row">
              <div class="col-3">
                  <img src="` + image +`" alt="` + description + `" class="img-thumbnail">
              </div>
              <div class="col">
                  <div class="d-flex w-100 justify-content-between">
                      <h4 class="mb-1">` + name + `</h4>
                      <small class="text-muted">` + currency + " " + cost + `</small>
                  </div>
                  <div class="d-flex w-100 justify-content-between">
                  <h4 class="mb-1"> </h4>
                      <small class="text-muted"> <b> Vendidos:` + " " + sold + `</b></small>
                  </div>
                  <div class="text-muted"> <h5>` + description + `</h5></div>
              </div>
          </div>
      </a>
      `;
          document.getElementById("cat-list-container").innerHTML =
            productRelev;
        }
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
