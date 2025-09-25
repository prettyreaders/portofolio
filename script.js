// Scroll to section smooth
function scrollToSection(id) {
  document.getElementById(id).scrollIntoView({ behavior: "smooth" });
}

// Sub-navbar (Portfolio switch)
function showSubSection(id) {
  const sections = document.querySelectorAll(".sub-section");
  const links = document.querySelectorAll(".sub-link");

  sections.forEach(sec => sec.classList.remove("active"));
  links.forEach(link => link.classList.remove("active"));

  document.getElementById(id).classList.add("active");
  document.querySelector(`.sub-link[onclick="showSubSection('${id}')"]`).classList.add("active");
}


// Typing Effect
const typingText = [
  "Mahasiswa Semester 3  ",
  "Prodi Informatika   ",
  "Happy Coding!   "
];

let i = 0;
let j = 0;
let currentText = "";
let isDeleting = false;

function typeEffect() {
  const typingElement = document.getElementById("typing");

  if (!isDeleting && j <= typingText[i].length) {
    currentText = typingText[i].substring(0, j++);
  } else if (isDeleting && j >= 0) {
    currentText = typingText[i].substring(0, j--);
  }

  typingElement.textContent = currentText;

  let speed = isDeleting ? 80 : 150;

  if (!isDeleting && j === typingText[i].length) {
    speed = 1000;
    isDeleting = true;
  } else if (isDeleting && j === 0) {
    isDeleting = false;
    i = (i + 1) % typingText.length;
  }

  setTimeout(typeEffect, speed);
}

document.addEventListener("DOMContentLoaded", typeEffect);

// Scroll Reveal Animation
function revealOnScroll() {
  const reveals = document.querySelectorAll(".reveal");

  for (let r of reveals) {
    const windowHeight = window.innerHeight;
    const elementTop = r.getBoundingClientRect().top;
    const elementVisible = 100;

    if (elementTop < windowHeight - elementVisible) {
      r.classList.add("active");
    } else {
      r.classList.remove("active");
    }
  }
}

window.addEventListener("scroll", revealOnScroll);

// Navbar link glowing on click
const navLinks = document.querySelectorAll(".nav-links a");

navLinks.forEach(link => {
  link.addEventListener("click", function() {
    navLinks.forEach(l => l.classList.remove("active")); // hapus aktif di semua
    this.classList.add("active"); // kasih aktif di yang dipencet
  });
});

// Navbar shadow on scroll
window.addEventListener("scroll", () => {
  const navbar = document.querySelector("nav");
  if (window.scrollY > 50) {
    navbar.classList.add("scrolled");
  } else {
    navbar.classList.remove("scrolled");
  }
});

