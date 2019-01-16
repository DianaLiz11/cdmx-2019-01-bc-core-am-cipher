window.cipher = {
  // ...
  encode:(cadena,offset) =>{
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

  decode:(codigo,offsetD)=>{
    let cadenaDecodificada="";
    for(let i=0; i< codigo.length; i++){
      let letraAsciiC = codigo.toUpperCase().charCodeAt(i);
      let nuevaLetraAsciiC = (letraAsciiC - 65 - offsetD) % 26 + 65;
      let letraEspC = String.fromCharCode(nuevaLetraAsciiC);
      cadenaDecodificada = cadenaDecodificada.concat(letraEspC);
    }
    return cadenaDecodificada;
  }
};
