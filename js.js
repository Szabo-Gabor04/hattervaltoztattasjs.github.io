


var kepektomb = ["kep1.jfif", "kep2.jpg"];
var i = 0;

function valtas() {
    if (i >= kepektomb.length - 1) {
        i = 0;
    } else {
        i++;
    }
    document.body.style.backgroundImage = `url("${kepektomb[i]}")`;
}
