const cipher = {
  encode: encodeFunction,
  decode: decodeFunction
};

function encodeFunction (offset, string) {
  if (!offset || !string) {
    throw TypeError("Introduce la información requerida");
  }

  let encodemessage = "";

  for (let i = 0; i<string.length; i++){
    let stringAscci = string.charCodeAt(i);
    console.log(stringAscci);

    if (stringAscci >= 65 && stringAscci <= 90) {
      encodemessage += String.fromCharCode((stringAscci + offset - 65) % 26 + 65);
    } else if (stringAscci >= 97 && stringAscci <= 122) {
      encodemessage += String.fromCharCode((stringAscci + offset - 97) % 26 + 97);
    } else {
      encodemessage += string[i];
    }
  }
return encodemessage;
}

function decodeFunction(offset, string) {
  if (!offset || !string) {
    throw new TypeError("Introduce la información requerida");
  }

  let decodedmessage = "";

  for (let i = 0; i < string.length; i++) {
    let stringAscci1 = string.charCodeAt(i);

    if (stringAscci1 >= 65 && stringAscci1 <= 90) {
      let criptedString = (stringAscci1 - 65 - offset % 26) % 26;

      if (criptedString < 0) {
        criptedString = criptedString + 65 + 26;
        decodedmessage += String.fromCharCode(criptedString);
      } else {
        criptedString += 65;
        decodedmessage += String.fromCharCode(criptedString);
      }
    } else if (stringAscci1 >= 97 && stringAscci1 <= 122) {
      let criptedString = (stringAscci1 - 97 - offset % 26) % 26;

      if (criptedString < 0) {
        criptedString = criptedString + 97 + 26;
        decodedmessage += String.fromCharCode(criptedString);
      } else {
        criptedString += 97;
        decodedmessage += String.fromCharCode(criptedString);
      }
    } else {
      decodedmessage += string[i];
    } 
  }
  return decodedmessage;
}


export default cipher;