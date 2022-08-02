import cipher from './cipher.js';

document.getElementById("cipherEncode").addEventListener("click", function () {
    let string = document.getElementById ("info1").value;
    let offset = document.getElementById("offset").value;
    offset = parseInt(offset);
    document.getElementById("mensaje2").value = cipher.encode (offset, string);
}, true);

document.getElementById("cipherDecode").addEventListener("click", function () {
    let string = document.getElementById ("info1").value;
    let offset = document.getElementById("offset").value;
    document.getElementById("mensaje2").value = cipher.decode (offset, string);
}, true);

document.getElementById("saveAnswer").addEventListener("click", function () {
    let newdate = document.getElementById("date1").value;
    let resultadofinal = document.getElementById("mensaje2").value;
    document.getElementById("note1").innerHTML = (resultadofinal);
    document.getElementById("savedate").innerHTML = (newdate);
})

    
