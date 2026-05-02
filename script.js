document.addEventListener("DOMContentLoaded", () => {
  // --- Sticky Navbar Logic ---
  const navbar = document.getElementById("navbar");

  window.addEventListener("scroll", () => {
    if (window.scrollY > 20) {
      navbar.classList.add("glass-nav");
      navbar.classList.remove("border-transparent");
    } else {
      navbar.classList.remove("glass-nav");
      navbar.classList.add("border-transparent");
    }
  });

  // --- Mobile Menu Toggle ---
  const btn = document.getElementById("mobile-menu-btn");
  const menu = document.getElementById("mobile-menu");

  btn.addEventListener("click", () => {
    menu.classList.toggle("hidden");
  });

  // Close mobile menu when clicking a link
  const mobileLinks = menu.querySelectorAll("a");
  mobileLinks.forEach((link) => {
    link.addEventListener("click", () => {
      menu.classList.add("hidden");
    });
  });

  // --- Scroll Reveal Animations ---
  const revealElements = document.querySelectorAll(".reveal");

  const revealOptions = {
    threshold: 0.15,
    rootMargin: "0px 0px -50px 0px",
  };

  const revealOnScroll = new IntersectionObserver(function (entries, observer) {
    entries.forEach((entry) => {
      if (!entry.isIntersecting) {
        return;
      } else {
        entry.target.classList.add("active");
        observer.unobserve(entry.target);
      }
    });
  }, revealOptions);

  revealElements.forEach((el) => {
    revealOnScroll.observe(el);
  });
});

// highlight active nav link
const links = document.querySelectorAll("nav a");

window.addEventListener("scroll", () => {
  let fromTop = window.scrollY + 100;

  links.forEach((link) => {
    let section = document.querySelector(link.hash);
    if (!section) return;

    if (
      section.offsetTop <= fromTop &&
      section.offsetTop + section.offsetHeight > fromTop
    ) {
      link.classList.add("text-white");
    } else {
      link.classList.remove("text-white");
    }
  });
});

const words = [
  "Growth Machines",
  "Revenue Systems",
  "Scaling Engines",
  "Digital Dominance",
];

let i = 0; // word index
let j = 0; // letter index
let isDeleting = false;

const typingElement = document.getElementById("typing-text");

function typeEffect() {
  const currentWord = words[i];

  if (isDeleting) {
    typingElement.textContent = currentWord.substring(0, j--);
  } else {
    typingElement.textContent = currentWord.substring(0, j++);
  }

  let speed = isDeleting ? 50 : 100;

  if (!isDeleting && j === currentWord.length) {
    speed = 1500; // pause at full word
    isDeleting = true;
  } else if (isDeleting && j === 0) {
    isDeleting = false;
    i = (i + 1) % words.length;
    speed = 300;
  }

  setTimeout(typeEffect, speed);
}

// start animation
document.addEventListener("DOMContentLoaded", typeEffect);

// premuim loader
window.addEventListener("load", () => {
  const loader = document.getElementById("loader");

  loader.style.opacity = "0";
  loader.style.transition = "opacity 0.5s ease";

  setTimeout(() => {
    loader.style.display = "none";
  }, 500);
});

// cursor glow
const cursor = document.getElementById("cursor-glow");

document.addEventListener("mousemove", (e) => {
  cursor.style.left = e.clientX + "px";
  cursor.style.top = e.clientY + "px";
});

// scroll progress
window.addEventListener("scroll", () => {
  const scrollTop = window.scrollY;
  const height = document.body.scrollHeight - window.innerHeight;
  const progress = (scrollTop / height) * 100;

  document.getElementById("scroll-progress").style.width = progress + "%";
});

// smooth scroll for anchor links
document.querySelectorAll('a[href^="#"]').forEach((anchor) => {
  anchor.addEventListener("click", function (e) {
    e.preventDefault();

    const target = document.querySelector(this.getAttribute("href"));

    target.scrollIntoView({
      behavior: "smooth",
      block: "start",
    });
  });
});
