window.cipher = {
  // ...
  encode:(offset,cadena) =>{
    let cadenaCodificada="";
    for(let i=0; i< cadena.length; i++){
      let letraAscii = cadena.toUpperCase().charCodeAt(i);
      let nuevaLetraAscii = (letraAscii - 65 + parseInt(offset)) % 26 + 65;
      let letraEsp = String.fromCharCode(nuevaLetraAscii);
      cadenaCodificada = cadenaCodificada.concat(letraEsp);
    }
    return cadenaCodificada;
  },
/*
  decode:(offsetD,cadenaCifrada)=>{
    let cadenaDecodificada="";
    let nuevaLetraAsciiC = "";
    //Con for recorre la palabra a descifrar letra por letra
    for(let i=0; i< cadenaCifrada.length; i++){
      // Convierte la cadenaCifrada a mayuscula y obtiene el codigo ASCII de caracter de la posición i
      let letraAsciiC = cadenaCifrada.toUpperCase().charCodeAt(i);
      // Obtiene la posición en el código ASCII al restarle el offset
      let posicionamiento = (letraAsciiC -(parseInt(offsetD) % 26));
      //Valida si la posición en el código ASCII es mayor a 65(letra A) se asigna a nuevaLetraAsciiC para ser transformada al abecedario
      if(posicionamiento >= 65){
          nuevaLetraAsciiC = posicionamiento;
      }
      //En caso contrario realiza la resta del desplazamiento iniciando desde la Z
      else {
        nuevaLetraAsciiC = 91 - (65 - posicionamiento);
      }
      let letraEspC = String.fromCharCode(nuevaLetraAsciiC);
      cadenaDecodificada = cadenaDecodificada.concat(letraEspC);
    }
    return cadenaDecodificada;
  }*/

  decode:(offsetD,cadenaCifrada)=>{
    let cadenaDecodificada="";
    for(let i=0; i< cadenaCifrada.length; i++){
      let letraAsciiC = cadenaCifrada.toUpperCase().charCodeAt(i);
      let nuevaLetraAsciiC = (letraAsciiC + 65 - parseInt(offsetD)) % 26 + 65;
      let letraEspC = String.fromCharCode(nuevaLetraAsciiC);
      cadenaDecodificada = cadenaDecodificada.concat(letraEspC);
    }
    return cadenaDecodificada;
  }
};
