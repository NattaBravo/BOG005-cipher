import cipher from './cipher.js';

console.log(cipher);

window.addEventListener("load", inicio, true);

function inicio () {
    document.getElementById("info1").addEventListener("keyup", function () {
        this.value = this.value.toUpperCase ();
     }, true );}

document.getElementById("cipherEncode").addEventListener("click", function () {
    let string = document.getElementById ("info1").value;
    let offset = document.getElementById("offset").value;
    document.getElementById("mensaje2").value = cipher.encode (string, offset);
}, true);

document.getElementById("cipherDecode").addEventListener("click", function () {
    let string = document.getElementById ("info1").value;
    let offset = document.getElementById("offset").value;
    document.getElementById("mensaje2").value = cipher.encode (string, offset);
}, true);

document.getElementById("saveAnswer").addEventListener("click", function () {
    let fecha = document.getElementById("fecha").value;
    console.log(fecha);
    let resultadofinal = document.getElementById("mensaje2").value;
    console.log(resultadofinal);
    document.getElementById("detallefecha").innerHTML = (fecha);
    document.getElementById("note1").innerHTML = (resultadofinal);
})

    
