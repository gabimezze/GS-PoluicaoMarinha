// MENU DE LINKS
function toggleMenu() {
    var menu = document.getElementById('menu');
    var overlay = document.getElementById('overlay');
    menu.classList.toggle('open');
    overlay.classList.toggle('show');
}

// COMO AJUDAR
function toggleParagraph(paraId) {
    var para = document.getElementById(paraId);
    var arrow = para.previousElementSibling.querySelector('.arrow');

    if (para.style.display === "none" || para.style.display === "") {
        para.style.display = "block";
        arrow.innerHTML = "▲";
    } else {
        para.style.display = "none";
        arrow.innerHTML = "▼";
    }
}