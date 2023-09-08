const productID = localStorage.getItem('productID');
const BASE_API =  "https://japceibal.github.io/emercado-api/products/";
const url = BASE_API + productID + '.json';
let productData;
let commentData;

const product_container = document.getElementById('product-container');

async function getAndShowProduct(){
    try {
        const response = await fetch (url)
        if(!response.ok) {
            throw new Error('Error al cargar API');
        }
        productData = await response.json();
        console.log(productData);
        //llamada a la funcion de display:
        display(productData);

    } catch (error) {
        console.log('Error: ', error);
    }
}

getAndShowProduct();


function display(product){
    let content = '';
  
    content += `
    <div class="product-card">
        
        <div class="prod-info">
        <h3 class="title">${product.name}</h3>
        <p class="prod-description">${product.description}</p>
        <p class="prod-price">${product.currency} ${product.cost} </p>
        <p class="prod-sold">Cant. de artículos vendidos: ${product.soldCount}</p>
        </div>

        <div class="prod-images">
            <img src="${product.images[0]}" class="product-img">
            <img src="${product.images[1]}" class="product-img">
            <img src="${product.images[2]}" class="product-img">
            <img src="${product.images[3]}" class="product-img">
        </div>

    </div>

    <div class="buttons">
        <button id="addBtn">Agregar al Carrito</button>
        <button id="backBtn"><a href="products.html">Volver al Listado</a></button>
    </div>
    
    `;product_container.innerHTML+=content;
};



const comment_container = document.getElementById('comments');
const PRODUCT_COMMENTS_URL = "https://japceibal.github.io/emercado-api/products_comments/";
const COMMENTS_URL = PRODUCT_COMMENTS_URL + productID + '.json' ;

async function getComments (){
    try {
        const response = await fetch (COMMENTS_URL)
        if(!response.ok) {
            throw new Error('Error al cargar API');
        }
        commentData = await response.json();
        console.log(commentData);
        
        //llamada a la funcion de display:
        showComments(commentData);

    } catch (error) {
        console.log('Error: ', error);
    }
}

getComments();

function showComments(commentData) {
    let content = '';

    commentData.forEach(comment => {
        content += `
        
        <div class="comment-wrapper">
        <h5 class="comment-user">${comment.user} <span class="comment_date">${comment.dateTime}</span> </h5> 
        
        <p>${comment.description}</p>
        <div class="rating"> <span class="score-title">Puntuación: ${comment.score}<span>
        ${generateStarRating(comment.score)} 
        </div>
        
        
        </div>
        
        `; 
    }); comment_container.innerHTML += content;
};

function generateStarRating(score) {
    const maxStars = 5; // Se puede cambiar esto segun el número de estrellas.
    let starsHtml = '';

    for (let i = 1; i <= maxStars; i++) {
        if (i <= score) {
            starsHtml += '<span class="fa fa-star checked"></span>';
        } else {
            starsHtml += '<span class="fa fa-star"></span>';
        }
    }
    return starsHtml;
}
