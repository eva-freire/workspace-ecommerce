const cat_id= localStorage.getItem('catID');
const BASE_API =  "https://japceibal.github.io/emercado-api/cats_products/";
const url = BASE_API + cat_id + '.json';
const productContainer = document.getElementById('products');
let jsonData;

async function getAndShowData () {
    try {
        const response = await fetch(url);
        if(!response.ok) {
            throw new Error('Error al cargar API');
        }
        jsonData = await response.json();
        console.log(jsonData);
        //ordena por precio de mayor a menor antes de mostrar productos
        jsonData.products.sort((a, b) => parseFloat(b.cost) - parseFloat(a.cost)); 

        //Muestra nombre de la categoria arriba del buscador
        const categoryName=document.getElementById('categoryName'); 
        categoryName.innerText += ` ${jsonData.catName.toLowerCase()}`;
   
        //llama a la función que mostrará los productos en la página
        displayProducts(jsonData.products);
        
    } catch (error) {
        console.log(error);
        
    }
}

getAndShowData();

function displayProducts(products) {
    let content = '';
    products.forEach(product => {
        content += `
        <div onclick="setProdId(${product.id})" class="product">
            <div class="product-div-img">
            <img class="product-img" src="${product.image}" alt="${product.name}">
            </div>
            
            <div class="product-details">
                <h2 class="product-name">${product.name}</h2>
                <small class="text-muted">` + product.soldCount + ` artículos vendidos</small>
                <p class="product-description">${product.description}</p>
                <p class="product-cost">Precio: ${product.currency} ${product.cost}</p>
            </div>
        </div>
    `;
    }); productContainer.innerHTML = content;

}

function setProdId (id){
    localStorage.setItem('productID',id);
    window.location  = "product-info.html"
    
}




/*
htmlContentToAppend += `
            <div onclick="setCatID(${category.id})" class="list-group-item list-group-item-action cursor-active">
                <div class="row">
                    <div class="col-3">
                        <img src="${category.imgSrc}" alt="${category.description}" class="img-thumbnail">
                    </div>
                    <div class="col">
                        <div class="d-flex w-100 justify-content-between">
                            <h4 class="mb-1">${category.name}</h4>
                            <small class="text-muted">${category.productCount} artículos</small>
                        </div>
                        <p class="mb-1">${category.description}</p>
                    </div>
                </div>
            </div>
            `




*/



/*//selecciono el localstorage, creo una BASE_URL y a DATA_AUTOS le concateno catID y ".json"

const mostrarResultados = document.getElementById("products");

//traigo la data del JSON desde la api
async function getData(callback) {
    try {
    const response = await fetch(CAT_PRODUCTS)
    const data = await response.json();
    const products = data.products;
    
    
    callback(data);
    
    //console.log(data);
    //console.log(products);
        
    } catch (error) {
       console.log('Error en la API: ' + error); 
    };
    
};

//funcion para mostrar los productos e info
function showProductsList(data) {
    const prod = data.products;
    let content = `<h1 class="product-cat">${data.catName} </h1>`;
    prod.forEach((product) => {
        content += `
        <div class="container">
            <img src="${product.image}"> </img> 
            <h2>${product.name}</h2>
            <p>${product.description}</p>
            <p>Precio: USD$ ${product.cost}</p>
        </div>
        `;
    });
    mostrarResultados.innerHTML = content;

};

getData(showProductsList);

//funcion para filtrar 

function filterRange (data,min,max) {
    return data.products.filter(product => {
        const productCost = parseInt(product.cost);

        if( isNaN (min) && isNaN (max)){
        alert ('Ingrese un monto valido');
        return false

        } if (min && max) {
        return productCost >= min && productCost <= max;
        }  
        if(min){
        return productCost >= min;
        }  
        if(max){
        return productCost <= max;
        }  {
        return true;
        };

    });
};



// evento al boton filtrar
const filterButton = document.getElementById('filtrar');
filterButton.addEventListener('click', ()=>{
    const minInput = parseInt(document.getElementById('minimo').value);
    const maxInput = parseInt(document.getElementById('maximo').value);
    
    // como el fetch es una operacion async, getData se ejecuta toda y luego vuelve para ejecutar la funcion anonima con data (la que trajo de la api,ahora parametro) y pasarla a su bloque interno apra ser usada.
    getData(function (data){
        const listaFiltrada = filterRange(data,minInput,maxInput);
        console.log(listaFiltrada);
    });



});*/







/*fetch(CAT_PRODUCTS)
    .then((response) => {
        if (!response.ok) {
            throw new Error('Error al cargar JSON');
        }
        return response.json();
    })
    .then ((data) =>{

        let content = `<h1 class="product-cat">${data.catName} </h1>`;
        const products = data.products; // data products es el array que trae el objeto
        console.log(products); //para ver el array de productos
        
        //console.log(products[3].cost) // array se recorrre con indices

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
    });*/