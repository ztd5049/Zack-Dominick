window.addEventListener('DOMContentLoaded',init,false);
            
function init() {
    var buttons = document.getElementsByTagName("button")
buttons[0].addEventListener('click', greenMode,false)
buttons[0].addEventListener('dblclick', grayMode,false)
}

function greenMode() {
    var colorMe1 = document.getElementById("colorToggle") 
    {colorMe1.style.backgroundColor = "green";
    }
}

function grayMode() {
    var colorMe1 = document.getElementById("colorToggle")
    {colorMe1.style.backgroundColor = "#191919"}
}