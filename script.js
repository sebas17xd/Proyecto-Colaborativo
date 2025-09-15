// 🔹 Scroll suave en el menú
document.querySelectorAll('nav a').forEach(enlace => {
  enlace.addEventListener('click', function(e) {
    e.preventDefault();
    const seccion = document.querySelector(this.getAttribute('href'));
    seccion.scrollIntoView({ behavior: 'smooth' });
  });
});

// 🔹 Animación de aparición en scroll
const secciones = document.querySelectorAll("section");

const mostrarSeccion = new IntersectionObserver((entradas, observer) => {
  entradas.forEach(entrada => {
    if (entrada.isIntersecting) {
      entrada.target.classList.add("visible");
      observer.unobserve(entrada.target);
    }
  });
}, { threshold: 0.2 });

secciones.forEach(seccion => {
  seccion.classList.add("oculto"); // clase inicial
  mostrarSeccion.observe(seccion);
});

// 🔹 Mensaje en botón de registro
const botonRegistro = document.querySelector("button");
botonRegistro.addEventListener("click", () => {
  alert("✅ Gracias por tu interés. Tu registro será procesado.");
});

// 🔹 Texto animado en el header (efecto máquina de escribir)
const textoAnimado = document.createElement("h3");
textoAnimado.style.marginTop = "15px";
textoAnimado.style.fontSize = "1.4rem";
textoAnimado.style.fontWeight = "400";
textoAnimado.style.color = "#f1f1f1";
document.querySelector("header").appendChild(textoAnimado);

const frases = [
  "🌐 Innovación sin límites",
  "💻 Tecnología para todos",
  "🤖 Inteligencia Artificial y más",
  "🔒 Seguridad en la era digital"
];
let i = 0;
let j = 0;
let borrando = false;

function escribir() {
  if (!borrando && j <= frases[i].length) {
    textoAnimado.textContent = frases[i].substring(0, j++);
    setTimeout(escribir, 100);
  } else if (borrando && j >= 0) {
    textoAnimado.textContent = frases[i].substring(0, j--);
    setTimeout(escribir, 50);
  } else {
    borrando = !borrando;
    if (!borrando) i = (i + 1) % frases.length;
    setTimeout(escribir, 1000);
  }
}
escribir();
