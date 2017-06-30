var cargarPagina = function(){
    navegadorCambio();
}

function navegadorCambio() {
    var navbar = $("#navegador");
    var buscar = $("#buscar");
    var logoNav = $("#logo-nav");
    var logoTop = $("#logo-top");
    console.log(window.scrollY)
    
    if (window.scrollY > 125) {
        buscar.removeClass("navbar__buscar--top");
        logoTop.css("display", "none");
        logoNav.css("display", "inline-block");
        navbar.removeClass("navbar--top")
        navbar.addClass("navbar--onscroll"); 

       
    } else if (window.scrollY < 125) {
        buscar.addClass("navbar__buscar--top")
        logoTop.css("display", "inline-block");
        logoNav.css("display", "none");
        navbar.removeClass("navbar--onscroll"); 
        navbar.addClass("navbar--top")
    }
}

$(document).scroll(navegadorCambio);

$(document).ready(cargarPagina);