const cat_id= localStorage.getItem('catID');
const BASE_API =  "https://japceibal.github.io/emercado-api/cats_products/";
const CAT_PRODUCTS = BASE_API + cat_id + '.json';

//selecciono el localstorage, creo una BASE_URL y a DATA_AUTOS le concateno catID y ".json"

const mostrarResultados = document.getElementById("products");
const filtrar = document.getElementById('filtrar');
const limpiar = document.getElementById('limpiar');




fetch(CAT_PRODUCTS)
    .then((response) => {
        if (!response.ok) {
            throw new Error('Error al cargar JSON');
        }
        return response.json();
    })
    .then ((data) =>{
        products = data.products;
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

        getJSONData(CAT_PRODUCTS).then(function (resultObj) {
            if (resultObj.status === "ok") {
                const categoriesProducts = resultObj.data.products;
                //console.log(categoriesProducts);

                localStorage.setItem("listado", JSON.stringify([categoriesProducts]));

            };
        });
    }) 
    .catch((error)=>{
        console.log(error);
    });

    //const arr = localStorage.getItem("listado");
    let arr = localStorage.getItem("listado");
    console.log(arr);

    document.addEventListener('DOMContentLoaded', ()=>{


    function showCategoriesList(array){
        
            let htmlContentToAppend = "";
        
            for(let i = 0; i < array.length; i++){ 
                let product = array[i];
                htmlContentToAppend += `
            
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
        };  document.getElementById("products").innerHTML = htmlContentToAppend; 

    };

    //parseInt porque es un string, y necesito un integer
    
    

    function filterRange (array){

        let a = parseInt(document.getElementById('minimo').value);//tomo el valor mínimo
        let b = parseInt(document.getElementById('maximo').value);//tomo el valor máximo

        let listaFiltrada = array.filter(producto => producto.cost >= a && producto.cost <= b);
        // arr.sort((a,b)=>a-b)
        listaFiltrada.sort((ant,sig)=>ant.cost-sig.cost);

        showCategoriesList(listaFiltrada);

        //return arr.filter(producto => (producto.cost >= a && producto.cost <= b));

        /*let listaFiltrada = array.filter(producto => (producto.cost >= a && producto.cost <= b));
        // arr.sort((a,b)=>a-b)
        listaFiltrada.sort((ant,sig)=>ant.cost-sig.cost);
      
        */
    };

    filtrar.addEventListener('click', ()=>{
        filterRange(arr);
    });





        
        
    
});

    

    

    

    


    

    
   

    

     

     

