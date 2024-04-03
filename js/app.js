window.addEventListener("scroll", function(){
    var header= document.querySelector("header");
    header.classList.toggle("abajo", window.scrollY>0);
 })

window.sr = ScrollReveal();

    sr.reveal('.logo-empresa', {
        duration: 3000,
        origin: 'right',
        distance: '-100px'
    });

    sr.reveal('.dir', {
        duration: 3000,
        origin: 'bottom',
        distance: '-100px'
    });

    sr.reveal('.info__inicio', {
        duration: 3000,
        origin: 'bottom',
        distance: '-100px'
    });
   
