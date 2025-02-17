
// JavaScript para el carrusel 
const carouselImages = document.querySelector('.carousel-images'); 
const images = document.querySelectorAll('.carousel-images img'); 
const prevButton = document.querySelector('.carousel-button.prev'); 
const nextButton = document.querySelector('.carousel-button.next'); 
let currentIndex = 0; const updateCarousel = () => 
    {
         const imageWidth = images[0].clientWidth; 
         carouselImages.style.transform = `translateX(${-currentIndex * imageWidth}px)`; };
          prevButton.addEventListener('click', () => { currentIndex = (currentIndex > 0) ? currentIndex - 1 : images.length - 1; updateCarousel(); 
          }); 
          nextButton.addEventListener('click', () => { currentIndex = (currentIndex < images.length - 1) ? currentIndex + 1 : 0; updateCarousel(); });
           // Ajustar el carrusel al cambiar el tamaño de la ventana window.addEventListener('resize', updateCarousel);
    //FUNCION CARRITO
    let carrito = [];
           let total = 0;
           
           // Función para agregar productos al carrito
           function agregarAlCarrito(nombre, precio) {
               carrito.push({ nombre, precio });
               total += precio;
               actualizarCarrito();
           }
           
           // Función para actualizar la vista del carrito
           function actualizarCarrito() {
               let cartItems = document.getElementById('cart-items');
               let cartTotal = document.getElementById('cart-total');
           
               cartItems.innerHTML = "";
           
               carrito.forEach((item, index) => {
                   let itemElement = document.createElement('div');
                   itemElement.innerHTML = `${item.nombre} - $${item.precio}
                       <button onclick="eliminarDelCarrito(${index})">❌</button>`;
                   cartItems.appendChild(itemElement);
               });
           
               cartTotal.innerText = `Total: $${total}`;
           }
           
           // Función para eliminar un producto del carrito
           function eliminarDelCarrito(index) {
               total -= carrito[index].precio;
               carrito.splice(index, 1);
               actualizarCarrito();
           }
           
           // Función para vaciar el carrito
           function vaciarCarrito() {
               carrito = [];
               total = 0;
               actualizarCarrito();
           }
           
           // Función para enviar el carrito a WhatsApp
           function enviarWhatsApp() {
               if (carrito.length === 0) {
                   alert("Tu carrito está vacío.");
                   return;
               }
           
               let numeroWhatsApp = "523318306166"; // Reemplaza con tu número de WhatsApp
               let mensaje = "¡Hola! Quiero comprar:\n\n";
           
               carrito.forEach(item => {
                   mensaje += `- ${item.nombre} - $${item.precio}\n`;
               });
           
               mensaje += `\nTotal a pagar: $${total}`;
               let url = `https://api.whatsapp.com/send?phone=${numeroWhatsApp}&text=${encodeURIComponent(mensaje)}`;
               window.open(url, "_blank");
           }
           
           // Mostrar y ocultar el carrito al hacer clic en el botón
           document.getElementById('cart-button').addEventListener('click', function () {
               let cart = document.getElementById('cart-container');
               cart.style.display = (cart.style.display === 'block') ? 'none' : 'block';
           });
           

