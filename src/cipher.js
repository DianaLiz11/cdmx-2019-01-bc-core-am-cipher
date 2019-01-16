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
    //alert("El valor de la cadena es: "+cadenaCodificada);

    return cadenaCodificada;
  },

  decode:(offsetD,cadenaCifrada)=>{
    let cadenaDecodificada="";
    for(let i=0; i< cadenaCifrada.length; i++){
      let letraAsciiC = cadenaCifrada.toUpperCase().charCodeAt(i);
      let nuevaLetraAsciiC = (letraAsciiC -(parseInt(offsetD) % 26)-65) + 65;
      let letraEspC = String.fromCharCode(nuevaLetraAsciiC);
      cadenaDecodificada = cadenaDecodificada.concat(letraEspC);
    }
    return cadenaDecodificada;
  }

};
