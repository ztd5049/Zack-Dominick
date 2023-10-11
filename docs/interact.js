window.addEventListener('DOMContentLoaded',init,false);
            
function init() {
    var icon = document.getElementById("mIcon");

    icon.onclick = function(){
        document.body.classList.toggle("light-theme");
        if(document.body.classList.contains("light-theme")){
            icon.src = "images/moon.png";
        }else{
            icon.src = "images/sun.png";
        }
    }
}


/*JavaScriptExercise2*/

