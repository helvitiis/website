window.addEventListener('DOMContentLoaded',init,false);

function init() {
    var buttons = document.getElementsByTagName("button");
    var button = buttons[0];
    button.addEventListener('click',show_hide,false);
    }

function show_hide() {
    var p = document.getElementById("buttontotoggle");
    if (p.style.display == "none") {
        p.style.display = "block";
    } else {
        p.style.display = "none";
    }
}
