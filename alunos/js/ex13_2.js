function pele(num) {
    document.getElementById("avatar").src = "assets/avatar" + num + ".png";

}

function cabelo(num) {
    document.getElementById("cabeloAvatar").src = "assets/cabelos/cabelo" + num + ".png";
}

function oculos(display) {
    var estilo = "none";
    if (display === true){
        estilo = "block";
    }

    document.getElementById("oculosAvatar").style.display = estilo ;

    /*  OU
    function oculos(display) {

    if (display === true){
        display = "block";
    }
    else {
        display =  "none";
    }

    document.getElementById("oculosAvatar").style.display = display ;

     */
}


document.getElementById("corPeleClara").onclick = function () {
    pele(1);
}

document.getElementById("corPeleEscura").onclick = function () {
    pele(2);
}

document.getElementById("cabeloLaranja").onclick = function () {
    cabelo(1);
}
document.getElementById("cabeloAzul").onclick = function () {
    cabelo(2);
}
document.getElementById("cabeloAmarelo").onclick = function () {
    cabelo(3);
}
document.getElementById("cabeloPreto").onclick = function () {
    cabelo(4);
}

document.getElementById("comOculos").onclick = function () {
    oculos(true);
}

document.getElementById("semOculos").onclick = function () {
    oculos(false);
}