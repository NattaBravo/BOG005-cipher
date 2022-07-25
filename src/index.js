import cipher from './cipher.js';

window.addEventListener("load", inicio, true);

function inicio () {
    document.getElementById("info1").addEventListener("keyup", function () {
        this.value = this.value.toUpperCase ();
     }, true );};

document.getElementById("cipherEncode").addEventListener("click", function () {
    let string = document.getElementById ("info1").value;
    let offset = document.getElementById("offset").value;
    document.getElementById("mensaje2").value = cipher.encode (string, offset);
}, true);

document.getElementById("cipherDecode").addEventListener("click", function () {
    let string = document.getElementById ("info1").value;
    let offset = document.getElementById("offset").value;
    document.getElementById("mensaje2").value = cipher.decode (string, offset);
}, true);

document.getElementById("saveAnswer").addEventListener("click", function () {
    let newdate = document.getElementById("date1").value;
    console.log(newdate);
    let resultadofinal = document.getElementById("mensaje2").value;
    document.getElementById("note1").innerHTML = (resultadofinal);
    document.getElementById("savedate").innerHTML = (newdate);
})

    
