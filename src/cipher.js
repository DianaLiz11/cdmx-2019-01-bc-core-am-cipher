window.cipher = {
  // ...
  encode:(offset,cadena) =>{
    let cadenaCodificada="";
    let nuevaLetraAscii ="";
    for(let i=0; i< cadena.length; i++){
      let letraAscii = cadena.charCodeAt(i);
      //Mayusculas
      if(letraAscii >=65 && letraAscii <=90){
        nuevaLetraAscii = (letraAscii - 65 + parseInt(offset)) % 26 + 65;
      }
      else if (letraAscii >=97 && letraAscii <=122) { //Minúsculas
        nuevaLetraAscii = (letraAscii - 97 + parseInt(offset)) % 26 + 97;
      }
      else { //cualquier otro caracter que no sea mayúscula o minúscula
        nuevaLetraAscii = letraAscii;
      }
      let letraEsp = String.fromCharCode(nuevaLetraAscii);
      cadenaCodificada = cadenaCodificada.concat(letraEsp);
    }
    return cadenaCodificada;
  },

  decode:(offsetD,cadenaCifrada)=>{
    let cadenaDecodificada="";
    let nuevaLetraAsciiC = "";
    //Con for recorre la palabra a descifrar letra por letra
    for(let i=0; i< cadenaCifrada.length; i++){
      let letraAsciiC = cadenaCifrada.charCodeAt(i); // Obtiene el codigo ASCII de caracter de la posición i
      let posicionamiento = (letraAsciiC -(parseInt(offsetD) % 26));// Obtiene la posición en el código ASCII al restarle el offset
      //Mayúsculas
      if(letraAsciiC >=65 && letraAsciiC <=90){
        //Valida si la posición en el código ASCII es mayor a 65(letra A) se asigna a nuevaLetraAsciiC para ser transformada al abecedario
        if(posicionamiento >= 65){
            nuevaLetraAsciiC = posicionamiento;
        }
        else {//En caso contrario realiza la resta del desplazamiento iniciando desde la Z
          nuevaLetraAsciiC = 91 - (65 - posicionamiento);
        }
      }
      else if (letraAsciiC >=97 && letraAsciiC <=122) {
        if(posicionamiento >= 97){
            nuevaLetraAsciiC = posicionamiento;
        }
        else {//En caso contrario realiza la resta del desplazamiento iniciando desde la Z
          nuevaLetraAsciiC = 123 - (97 - posicionamiento);
        }
      }
      else {
        nuevaLetraAsciiC = letraAsciiC;
      }
      let letraEspC = String.fromCharCode(nuevaLetraAsciiC);
      cadenaDecodificada = cadenaDecodificada.concat(letraEspC);
    }
    return cadenaDecodificada;
  }
/*
  decode:(offsetD,cadenaCifrada)=>{
    let cadenaDecodificada="";
    for(let i=0; i< cadenaCifrada.length; i++){
      let letraAsciiC = cadenaCifrada.toUpperCase().charCodeAt(i);
      let nuevaLetraAsciiC = (letraAsciiC + 65 - parseInt(offsetD)) % 26 + 65;
      let letraEspC = String.fromCharCode(nuevaLetraAsciiC);
      cadenaDecodificada = cadenaDecodificada.concat(letraEspC);
    }
    return cadenaDecodificada;
  }*/
};
