const DATA_AUTOS =  "https://japceibal.github.io/emercado-api/cats_products/101.json";

const mostrarResultados = document.getElementById("autos");

fetch(DATA_AUTOS)
    .then((response) => {
        if (!response.ok) {
            throw new Error('Error al cargar JSON');
        }
        return response.json();
    })
    .then ((data) =>{
        const products = data.products;
        let content = '';

        products.forEach((product) => {
            content += `
            
            <div class="container-products">
            
            <div class="product-div-img">
            <img src="${product.image}" class="product-img">
            </div>

            <div class="product-info">
            <h2 class="product-name">${product.name}</h2>
            <p class="product-descr">${product.description}</p>
            <p class="product-price"> Precio: ${product.currency} ${product.cost}  </p>
            <small class="text-muted">Vendidos: ${product.soldCount}</small>
            </div>
            
            </div>
            
            `;
        });
        mostrarResultados.innerHTML = content;
    })
    .catch((error)=>{
        console.log(error);
    });