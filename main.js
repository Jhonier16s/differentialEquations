particlesJS.load("particles-js", "particles.json", function () {
  console.log("Particles.js config loaded");
});

let divOfParticles = document.getElementById("particles-js");
divOfParticles.style.opacity = 0.2;

document.addEventListener("DOMContentLoaded", function () {
  const text = "Método de Variación de Parámetros";
  const typingElement = document.getElementById("typing-effect");
  let index = 0;

  function typeText() {
    if (index < text.length) {
      typingElement.textContent += text[index];
      index++;
      setTimeout(typeText, 100);
    } else {
      setTimeout(() => {
        typingElement.textContent = "";
        index = 0;
        typeText();
      }, 5000);
    }
  }

  typeText();
});

document.querySelectorAll(".navbar a").forEach((anchor) => {
  anchor.addEventListener("click", function (e) {
    e.preventDefault();
    const targetId = this.getAttribute("href").substring(1);
    document.getElementById(targetId).scrollIntoView({
      behavior: "smooth",
    });
  });
});

window.addEventListener("scroll", function () {
  const sections = document.querySelectorAll(".section");
  sections.forEach((section) => {
    const sectionTop = section.getBoundingClientRect().top;
    if (sectionTop < window.innerHeight - 50) {
      section.classList.add("visible");
    }
  });
});

function toggleMenu() {
  const navLinks = document.querySelector(".nav-links");
  const menuIcon = document.querySelector(".menu-icon");

  navLinks.classList.toggle("active");

  menuIcon.classList.toggle("active");
}

