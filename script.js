ScrollReveal({
    distance: '60px',
    opacity: '0'
});
ScrollReveal().reveal('.hmm', { delay: 100,  origin:'left', reset:true});
ScrollReveal().reveal('.sec', { delay: 300,  origin:'top', });
ScrollReveal().reveal('.third', { delay: 300,  origin:'top', });
ScrollReveal().reveal('.mission', { delay: 300,  origin:'top', });
ScrollReveal().reveal('.vision', { delay: 400,  origin:'top', });
ScrollReveal().reveal('.cardm', { delay: 400,  origin:'left', });
ScrollReveal().reveal('.card', { delay: 400,  origin:'left', });

function toggleMenu() {

  const menuIcon = document.querySelector(".menu-icon");

  menuIcon.classList.toggle("active");

  document.querySelector("ul").classList.toggle("yh");

}
