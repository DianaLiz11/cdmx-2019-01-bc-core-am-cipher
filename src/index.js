document.getElementById('btnCifrar').addEventListener('click',() => {
  const cadenaParaCifrar = document.getElementById('txtCadena').value;
  const desplazamiento = document.getElementById('txtOffset').value;
  //const textoCodificado = window.cipher.encode(desplazamiento,cadenaParaCifrar);
  document.getElementById('pCadenaConvertida').innerHTML = window.cipher.encode(desplazamiento,cadenaParaCifrar);//`El texto codificado es: ${textoCodificado}`;
});

document.getElementById('btnDescifrar').addEventListener('click',() => {
  const cadenaParaDescifrar = document.getElementById('txtCadena').value;
  const desplazamientoDescifrar = document.getElementById('txtOffset').value;
  const textoDecodificado = window.cipher.decode(desplazamientoDescifrar,cadenaParaDescifrar);
  document.getElementById('pCadenaConvertida').innerHTML = textoDecodificado;
});
