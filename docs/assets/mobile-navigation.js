let button = document.getElementById("menu-button")
let mobile_header_menu = document.getElementsByClassName("mobile-hrefs")[0];

function openMenu() {
    mobile_header_menu.style.display = "block";
}

function closeMenu() {
    let mobile_header_menu = document.getElementsByClassName("mobile-hrefs")[0];
    mobile_header_menu.style.display = "none";
}

window.addEventListener('resize', onWindowResize);



function onWindowResize() {
    if (window.matchMedia("(max-width: 1250px)").matches) {
        document.getElementById("menu-button").removeAttribute("hidden");
        document.getElementById("hamburger-icon").removeAttribute("hidden");
    } 
    
    else if (window.matchMedia("(min-width: 1250px)").matches) {
        document.getElementById("menu-button").setAttribute("hidden", "");
        document.getElementById("hamburger-icon").setAttribute("hidden", "");
    }
}