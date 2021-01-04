var menu = document.querySelector("#heading img.burguer")
var close = document.querySelector("#heading img.close")

menu.addEventListener("click", openMenu)
close.addEventListener("click", closeMenu)

function openMenu() {
    document.querySelector("header #menu").style.display = "block"
    menu.style.display = "none"
    close.style.display = "block"
}

function closeMenu() {
    document.querySelector("header #menu").style.display = "none"
    menu.style.display = "block"
    close.style.display = "none"
}