
function ready() {
    let botonesEliminarItem = document.getElementsByClassName('btn-eliminar');
    for (let i = 0; i < botonesEliminarItem.length; i++) {
        let button = botonesEliminarItem[i];
        button.addEventListener('click', eliminarItemCarrito);
    }

    let botonesSumarCantidad = document.getElementsByClassName('sumar-cantidad');
    for (let i = 0; i < botonesSumarCantidad.length; i++) {
        let button = botonesSumarCantidad[i];
        button.addEventListener('click', sumarCantidad);
    }

    let botonesRestarCantidad = document.getElementsByClassName('restar-cantidad');
    for (let i = 0; i < botonesRestarCantidad.length; i++) {
        let button = botonesRestarCantidad[i];
        button.addEventListener('click', restarCantidad);
    }

    let botonesAgregarAlCarrito = document.getElementsByClassName('boton-item');
    for (let i = 0; i < botonesAgregarAlCarrito.length; i++) {
        let button = botonesAgregarAlCarrito[i];
        button.addEventListener('click', agregarAlCarritoClicked);
    }


    carritoItemsA = cargarCarritoDesdeLocalStorage();
    let itemsCarrito = document.getElementsByClassName('carrito-items')[0];


    for (let i = 0; i < carritoItemsA.length; i++) {
        let carritoItem = carritoItemsA[i];
        let item = document.createElement('div');
        item.classList.add('carrito-item');

        let itemCarritoContenido = `
            <img src="${carritoItem.imagenSrc}" width="80px" alt="">
            <div class="carrito-item-detalles">
                <span class="carrito-item-titulo">${carritoItem.titulo}</span>
                <div class="selector-cantidad">
                    <i class="fa-solid fa-minus restar-cantidad"></i>
                    <input type="text" value="${carritoItem.cantidad}" class="carrito-item-cantidad" disabled>
                    <i class="fa-solid fa-plus sumar-cantidad"></i>
                </div>
                <span class="carrito-item-precio">${carritoItem.precio}</span>
            </div>
            <button class="btn-eliminar">
                <i class="fa-solid fa-trash"></i>
            </button>
        `;

        item.innerHTML = itemCarritoContenido;
        itemsCarrito.append(item);

        let eliminarButton = item.getElementsByClassName('btn-eliminar')[0];
        eliminarButton.addEventListener('click', eliminarItemCarrito);

        let botonRestarCantidad = item.getElementsByClassName('restar-cantidad')[0];
        botonRestarCantidad.addEventListener('click', restarCantidad);

        let botonSumarCantidad = item.getElementsByClassName('sumar-cantidad')[0];
        botonSumarCantidad.addEventListener('click', sumarCantidad);
    }

    document.getElementsByClassName('btn-pagar')[0].addEventListener('click', pagarClicked);
    document.getElementsByClassName('btnClear')[0].addEventListener('click', limpiarClicked);
    actualizarTotalCarrito();
}


function pagarClicked() {
    Swal.fire({
        position: 'top',
        icon: 'success',
        title: 'El pago fue procesado.',
        showConfirmButton: false,
        timer: 1500
    })
    let carritoItems = document.getElementsByClassName('carrito-items')[0];
    while (carritoItems.hasChildNodes()) {
        carritoItems.removeChild(carritoItems.firstChild);
    }

    carritoItemsA = [];

    guardarCarritoEnLocalStorage(carritoItemsA);

    actualizarTotalCarrito();
}

function limpiarClicked() {
    let carritoItems = document.getElementsByClassName('carrito-items')[0];
    while (carritoItems.hasChildNodes()) {
        carritoItems.removeChild(carritoItems.firstChild)
    }

    carritoItemsA = [];

    guardarCarritoEnLocalStorage(carritoItemsA);
    actualizarTotalCarrito();
}

function agregarAlCarritoClicked(event) {
    let button = event.target;
    let item = button.parentElement;
    let titulo = item.getElementsByClassName('titulo-item')[0].innerText;
    let precio = item.getElementsByClassName('precio-item')[0].innerText;
    let imagenSrc = item.getElementsByClassName('img-item')[0].src;
    console.log(imagenSrc);

    agregarItemAlCarrito(titulo, precio, imagenSrc);

}

let carritoItemsA = [];


function agregarItemAlCarrito(titulo, precio, imagenSrc) {
    const Toast = Swal.mixin({
        toast: true,
        position: 'top-end',
        showConfirmButton: false,
        timer: 2000,
        didOpen: (toast) => {
            toast.addEventListener('mouseenter', Swal.stopTimer)
            toast.addEventListener('mouseleave', Swal.resumeTimer)
        }
    })
    Toast.fire({
        icon: 'success',
        title: 'Añadido al carrito'
    })
    let item = document.createElement('div');
    item.classList.add('carrito-item');

    let itemsCarrito = document.getElementsByClassName('carrito-items')[0];

    let nombresItemsCarrito = itemsCarrito.getElementsByClassName('carrito-item-titulo');
    for (let i = 0; i < nombresItemsCarrito.length; i++) {
        if (nombresItemsCarrito[i].innerText == titulo) {
            Toast.fire({
                icon: 'error',
                title: 'Oops...',
                text: 'El producto ya se encuentra en el carrito',
            })
            return;
        }
    }

    let itemCarritoContenido = `
        <img src="${imagenSrc}" width="80px" alt="">
        <div class="carrito-item-detalles">
            <span class="carrito-item-titulo">${titulo}</span>
            <div class="selector-cantidad">
                <i class="fa-solid fa-minus restar-cantidad"></i>
                <input type="text" value="1" class="carrito-item-cantidad" disabled>
                <i class="fa-solid fa-plus sumar-cantidad"></i>
            </div>
            <span class="carrito-item-precio">${precio}</span>
        </div>
        <button class="btn-eliminar">
            <i class="fa-solid fa-trash"></i>
        </button>
    `;

    item.innerHTML = itemCarritoContenido;
    itemsCarrito.append(item);

    let carritoItem = {
        titulo: titulo,
        precio: precio,
        imagenSrc: imagenSrc,
        cantidad: 1
    };

    carritoItemsA.push(carritoItem);
    console.log(carritoItemsA);
    guardarCarritoEnLocalStorage(carritoItemsA);

    item.getElementsByClassName('btn-eliminar')[0].addEventListener('click', eliminarItemCarrito);

    let botonRestarCantidad = item.getElementsByClassName('restar-cantidad')[0];
    botonRestarCantidad.addEventListener('click', restarCantidad);

    let botonSumarCantidad = item.getElementsByClassName('sumar-cantidad')[0];
    botonSumarCantidad.addEventListener('click', sumarCantidad);

    actualizarTotalCarrito();
}


function sumarCantidad(event) {
    let buttonClicked = event.target;
    let selector = buttonClicked.parentElement;
    console.log(selector.getElementsByClassName('carrito-item-cantidad')[0].value);
    let cantidadActual = selector.getElementsByClassName('carrito-item-cantidad')[0].value;
    cantidadActual++;
    selector.getElementsByClassName('carrito-item-cantidad')[0].value = cantidadActual;
    actualizarTotalCarrito();
}

function restarCantidad(event) {
    let buttonClicked = event.target;
    let selector = buttonClicked.parentElement;
    console.log(selector.getElementsByClassName('carrito-item-cantidad')[0].value);
    let cantidadActual = selector.getElementsByClassName('carrito-item-cantidad')[0].value;
    cantidadActual--;
    if (cantidadActual >= 1) {
        selector.getElementsByClassName('carrito-item-cantidad')[0].value = cantidadActual;
        actualizarTotalCarrito();
    }
}

//function eliminarItemCarrito(event) {
//    let buttonClicked = event.target;
//    buttonClicked.parentElement.parentElement.remove();
//    actualizarTotalCarrito();
//}
function eliminarItemCarrito(event) {
    let buttonClicked = event.target;
    let item = buttonClicked.parentElement;
    let titulo = item.getElementsByClassName('carrito-item-titulo')[0].innerText;

    // Eliminar el elemento visualmente
    item.remove();

    // Eliminar el elemento del array carritoItemsA
    carritoItemsA = carritoItemsA.filter(item => item.titulo !== titulo);

    // Guardar el carrito actualizado en el Local Storage
    guardarCarritoEnLocalStorage(carritoItemsA);

    // Actualizar el total del carrito
    actualizarTotalCarrito();
    console.log(carritoItemsA)
}

function actualizarTotalCarrito() {
    let carritoContenedor = document.getElementsByClassName('carrito')[0];
    let carritoItems = carritoContenedor.getElementsByClassName('carrito-item');
    let total = 0;
    for (let i = 0; i < carritoItems.length; i++) {
        let item = carritoItems[i];
        let precioElemento = item.getElementsByClassName('carrito-item-precio')[0];
        let precio = parseFloat(precioElemento.innerText.replace('$', '').replace('.', ''));
        let cantidadItem = item.getElementsByClassName('carrito-item-cantidad')[0];
        console.log(precio);
        let cantidad = cantidadItem.value;
        total = total + (precio * cantidad);
    }
    total = Math.round(total * 100) / 100;

    document.getElementsByClassName('carrito-precio-total')[0].innerText = '$' + total.toLocaleString("es") + ",00";

}
function guardarCarritoEnLocalStorage(carritoItems) {
    let carritoItemsJSON = JSON.stringify(carritoItems);
    localStorage.setItem('carrito', carritoItemsJSON);
}

function cargarCarritoDesdeLocalStorage() {
    let carritoItemsJSON = localStorage.getItem('carrito');
    return JSON.parse(carritoItemsJSON) || [];
}

function crearProducto(producto) {
    return `
      <div class="item">
        <span class="titulo-item">${producto.titulo}</span>
        <img src="${producto.imagen}" alt="" class="img-item">
        <span class="precio-item">${producto.precio}</span>
        <button class="boton-item">Agregar al Carrito</button>
      </div>
    `;
}

fetch("./Listadeproductos.json")
    .then(response => response.json())
    .then(data => {
        const productosContainer = document.getElementById('productos-container');
        data.forEach(producto => {
            const productoHTML = crearProducto(producto);
            productosContainer.innerHTML += productoHTML;
        });
        ready()
    })
    .catch(error => console.error('Error al cargar los productos:', error));
