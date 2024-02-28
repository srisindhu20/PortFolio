var typed= new Typed(".text", {
    strings: ["Programming, Web Development"],
    typeSpeed: 100,
    backSpeed: 100,
    backDelay: 1000,
    loop: true
})
document.addEventListener('DOMContentLoaded', function() {
    document.querySelectorAll('nav a').forEach(anchor => {
      anchor.addEventListener('click', function(e) {
        e.preventDefault();
        const targetId = this.getAttribute('href').substring(1);
        const targetElement = document.getElementById(targetId);
        if (targetElement) {
          window.scrollTo({
            top: targetElement.offsetTop,
            behavior: 'smooth'
          });
        }
      });
    });
  });
  function toggleMenu() {
    var x = document.querySelector(".navbar-container");
    if (x.className === "navbar-container") {
      x.className += " responsive";
    } else {
      x.className = "navbar-container";
    }
  }
    