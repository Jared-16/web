// Función para generar lluvia de imágenes
function generateImageRain() {
  const imageRain = document.getElementById('image-rain');

  // Lista de imágenes para la lluvia
  const images = [
    'imagenes/imagen1.jpeg',
  'imagenes/imagen2.jpeg',
  'imagenes/imagen3.jpeg',
  'imagenes/imagen4.jpg',
  'imagenes/imagen5.jpg',
  'imagenes/imagen6.jpg',
  'imagenes/imagen7.jpg',
  'imagenes/imagen8.jpg',
  'imagenes/imagen9.jpg',
  'imagenes/imagen10.jpg',
  'imagenes/imagen11.jpg',
  'imagenes/imagen12.jpg',
    // Agrega tantas imágenes como quieras
  ];

  // Crear 50 imágenes para la lluvia
  for (let i = 0; i < 50; i++) {
    let image = document.createElement('div');
    image.classList.add('image-rain');

    // Elegir una imagen aleatoria de la lista
    const randomImage = images[Math.floor(Math.random() * images.length)];
    image.style.backgroundImage = `url(${randomImage})`;

    // Posicionar aleatoriamente cada imagen en la pantalla
    const randomX = Math.random() * window.innerWidth; // Posición horizontal aleatoria
    const randomDuration = Math.random() * (8 - 4) + 4; // Duración de 1 a 2 segundos para la caída

    image.style.left = `${randomX}px`;
    image.style.animationDuration = `${randomDuration}s`;

    // Añadir la imagen al contenedor
    imageRain.appendChild(image);
  }
}

// Llamar la función para iniciar la lluvia de imágenes cuando se carga la página
window.onload = generateImageRain;

// Fecha del próximo aniversario (ajustar según tu necesidad)
const nextAnniversary = new Date("Nov 14, 2025 00:00:00").getTime();

// Actualizar la cuenta regresiva cada segundo
const countdownInterval = setInterval(function() {
  const now = new Date().getTime();
  const distance = nextAnniversary - now;

  // Cálculos de días, horas, minutos y segundos
  const days = Math.floor(distance / (1000 * 60 * 60 * 24));
  const hours = Math.floor((distance % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
  const minutes = Math.floor((distance % (1000 * 60 * 60)) / (1000 * 60));
  const seconds = Math.floor((distance % (1000 * 60)) / 1000);

  // Mostrar el resultado en los elementos correspondientes
  document.getElementById("days").textContent = days + "d";
  document.getElementById("hours").textContent = hours + "h";
  document.getElementById("minutes").textContent = minutes + "m";
  document.getElementById("seconds").textContent = seconds + "s";

  // Si la cuenta regresiva ha terminado
  if (distance < 0) {
    clearInterval(countdownInterval);
    document.getElementById("timer").innerHTML = "¡Feliz Aniversario!";
  }
}, 1000);

// JavaScript para el cambio automático de imágenes en el carrusel
let currentIndex = 0;
const images = document.querySelectorAll('.carousel-image');

function showNextImage() {
    images[currentIndex].classList.remove('active'); // Quita la clase 'active' de la imagen actual
    currentIndex = (currentIndex + 1) % images.length; // Pasa a la siguiente imagen
    images[currentIndex].classList.add('active'); // Agrega la clase 'active' a la siguiente imagen
}

// Inicializa la primera imagen como visible
images[currentIndex].classList.add('active');

// Cambia la imagen cada 3 segundos
setInterval(showNextImage, 3000);

