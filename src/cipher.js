const cipher = {
  
  encode: function (string, offset) {
    let resultado ="";
    let letras = "ABCDEFGHIJKLMNOPQRSTUVWXYZ";
    offset = (offset % 26 + 26) % 26;
    
    if (string) {
    for (let i=0; i<string.length; i++) {
        if (letras.indexOf(string[i])!=-1) {
            let posicion = ((letras.indexOf(string[i])+offset)%26);
            resultado += letras [posicion];
        }}};
    if (offset === 0 && string === 0) {
      throw new TypeError[alert("Introduce la información requerida")]}
    else if (offset === null || string === []) {
      throw new TypeError}
    else if (offset == 0 && string == 0) {
      throw new TypeError}
  
  return resultado;}

  ,decode: function (string, offset) { 
    let resultado ="";
    let letras = "ABCDEFGHIJKLMNOPQRSTUVWXYZ";
    offset = (offset % 26 - 26);
  
  if (string) {
    for (let i=0; i<string.length; i++) {
        if (letras.indexOf(string[i])!=-1) {
            let posicion = ((letras.indexOf(string[i])-offset)%26);
            resultado += letras [posicion];
        }
        else resultado += string [i];}
  }
  return resultado;} 
}

export default cipher;