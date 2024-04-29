const btnCart = document.querySelector('.container-cart-icon');
const containerCartProducts = document.querySelector(
    '.container-cart-products'
);

btnCart.addEventListener('click', () => {
	containerCartProducts.classList.toggle('hidden-cart');
});

// variables que no requiero de momento ----------------------//
const cartInfo = document.querySelector('.cart-product');
const rowProduct = document.querySelector('.row-product');

// Lista de todos los contenedores de productos
const productsList = document.querySelector('.container-items');

// Variable de arreglos de Productos


const valorTotal = document.querySelector('.total-pagar');

const countProducts = document.querySelector('#contador-productos');

const cartEmpty = document.querySelector('.cart-empty');
const cartTotal = document.querySelector('.cart-total');







const agregarCarrito = document.querySelector('.btn-agregar-carrito');
agregarCarrito.addEventListener('click', () => {
    document.getElementById('cantidad').innerHTML = `<span>${cantidadCarrito}</span>`
    const cantidadAgregarCarrito = cantidadCarrito
    document.getElementById('cantidad-producto-carrito').innerHTML = `<span>${cantidadAgregarCarrito}</span>`
    document.getElementById('titulo-producto-carrito').innerHTML = `<span>Sneakers</span>`
   
    


    let contadorProducto = 0
    if(cantidadCarrito > 0 ){
        contadorProducto++
        nuevoResultado = contadorProducto
        document.getElementById('contador-productos').innerHTML = `<span>${nuevoResultado}</span>`
    }

    
   
    
    let precioProducto = 125;
    let sumatoriaProducto =  cantidadCarrito*precioProducto;
sumatoriaProducto = document.getElementById('precio-producto-carrito').innerHTML = `<span>$${sumatoriaProducto}</span>`
totalProducto = document.getElementById('total-pagar').innerHTML = `<span>${sumatoriaProducto}</span>`


});



// Incremento en producto //


let cantidadCarrito = 0;

const incrementarCantidad = document.querySelector('.boton-mas');
const reducirCantidad = document.querySelector('.boton-menos');

incrementarCantidad.addEventListener('click', () => {
    cantidadCarrito = cantidadCarrito+1
    document.getElementById('cantidad').innerHTML = `<span>${cantidadCarrito}</span>`
    
})

reducirCantidad.addEventListener('click', () => {
    if(cantidadCarrito > 0){
        cantidadCarrito = cantidadCarrito-1
    }
    document.getElementById('cantidad').innerHTML = `${cantidadCarrito}`
    
})

// Fin de incremento producto