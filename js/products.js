const cat_id= localStorage.getItem('catID');
const BASE_API =  "https://japceibal.github.io/emercado-api/cats_products/";
const CAT_PRODUCTS = BASE_API + cat_id + '.json';

//selecciono el localstorage, creo una BASE_URL y a DATA_AUTOS le concateno catID y ".json"

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



});






























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










   

    



   