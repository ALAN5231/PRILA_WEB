// Agarramos todos los elementos que tengan la clase "reveal"
const elementos = document.querySelectorAll('.reveal');

// El observador detecta cuándo un elemento entra en la pantalla
const observador = new IntersectionObserver((entradas) => {
  entradas.forEach((entrada) => {
    if (entrada.isIntersecting) {
      entrada.target.classList.add('visible');   // activa la animación
      observador.unobserve(entrada.target);      // ya no lo vigilamos, solo se anima una vez
    }
  });
}, { threshold: 0.2 });  // se activa cuando se ve el 20% del elemento

// Le decimos al observador que vigile cada elemento
elementos.forEach((el) => observador.observe(el));