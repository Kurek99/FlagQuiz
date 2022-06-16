var links = new Array();
links[0] = "level1.html";
links[1] = "level2.html";
links[2] = "level3.html";
links[3] = "level4.html";
links[4] = "level5.html";
links[5] = "level6.html";
links[6] = "level7.html";
links[7] = "level8.html";
links[8] = "level9.html";
links[9] = "level10.html";
const pomocna = [];
let pomocny = 10;
var link = document.getElementById("next");
var i;
var pocitadlo = 0;
var pocitadlo2 = 0;

function pocitanie(){
    for (pocitadlo; pocitadlo < 10; pocitadlo++) {
        if ("Stranka" + pocitadlo in localStorage) {
            pocitadlo2++;
        }
    }
    return pocitadlo2;
}

window.onload = function afterWebPageLoad() { 
    if (pocitanie() >= 10) {
        link.setAttribute('href', "index.html");
        link.innerHTML = "Koniec";
        link.onclick= null;
        localStorage.clear();
    }
} 
function changeLink() {
        i = Math.floor(Math.random() * links.length);
        if (!("Stranka" + i in localStorage)) {
            link.setAttribute('href', links[i]);
            localStorage.setItem("Stranka" + i, i);
        } else {
            changeLink();
        }
}