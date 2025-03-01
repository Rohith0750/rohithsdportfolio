function toggleMenu() {
  const menu = document.querySelector(".menu-links");
  const icon = document.querySelector(".hamburger-icon");
  menu.classList.toggle("open");
  icon.classList.toggle("open");
}

function toggleTheme() {
  document.body.classList.toggle("dark-theme");
}
// Typewriter Effect
function initTypewriter() {
  const text = "Rohith S D";
  const element = document.getElementById("typewriter");
  let index = 0;
  let isDeleting = false;

  function type() {
    const currentText = text.substring(0, index);
    element.textContent = currentText;

    if (!isDeleting) {
      index++;
      if (index > text.length) {
        isDeleting = true;
        setTimeout(type, 2000);
        return;
      }
    } else {
      index--;
      if (index === 0) {
        isDeleting = false;
      }
    }

    const speed = isDeleting ? 100 : 150;
    setTimeout(type, speed);
  }

  type();
}

// Initialize when page loads
window.addEventListener("load", initTypewriter);