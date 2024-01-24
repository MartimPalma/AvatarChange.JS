function tomDePeleEscura() {
   document.getElementById("avatar").src = ("assets/avatar2.png");
}

function tomDePeleClara() {
    document.getElementById("avatar").src = ("assets/avatar1.png");
}

function cabelo1() {
    document.getElementById("cabeloAvatar").src = ("assets/cabelos/cabelo1.png");
}

function cabelo2() {
    document.getElementById("cabeloAvatar").src = ("assets/cabelos/cabelo2.png");
}

function cabelo3() {
    document.getElementById("cabeloAvatar").src = ("assets/cabelos/cabelo3.png");
}

function cabelo4() {
    document.getElementById("cabeloAvatar").src = ("assets/cabelos/cabelo4.png");
}

function comOculos() {
    document.getElementById("oculosAvatar").style.display = "block";
}

function semOculos() {
    document.getElementById("oculosAvatar").style.display = "none";
}






document.getElementById("corPeleClara").onclick = function () {
    tomDePeleClara();
}

document.getElementById("corPeleEscura").onclick = function () {
    tomDePeleEscura();
}

document.getElementById("cabeloLaranja").onclick = function () {
    cabelo1();
}
document.getElementById("cabeloAzul").onclick = function () {
    cabelo2();
}
document.getElementById("cabeloAmarelo").onclick = function () {
    cabelo3();
}
document.getElementById("cabeloPreto").onclick = function () {
    cabelo4();
}

document.getElementById("comOculos").onclick = function () {
    comOculos();
}

document.getElementById("semOculos").onclick = function () {
    semOculos();
}





