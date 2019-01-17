//const botonCifrar = document.getElementById('btnCifrar');

document.getElementById('btnCifrar').addEventListener('click',() => {
  const cadenaParaCifrar = document.getElementById('txtCadena').value;
  const desplazamiento = document.getElementById('txtOffset').value;
  const textoCodificado = window.cipher.encode(desplazamiento,cadenaParaCifrar);
  document.getElementById('pCodigo').innerHTML = `El texto codificado es: ${textoCodificado}`;
});

document.getElementById('btnCambiarACifrar').addEventListener('click',() => {
  document.getElementById('paginaPrincipal').style.display = 'none';
  document.getElementById('paginaCifrado').style.display = 'block';
});

document.getElementById('btnRegresar').addEventListener('click',() => {
  document.getElementById('paginaPrincipal').style.display = 'block';
  document.getElementById('paginaCifrado').style.display = 'none';
});

document.getElementById('btnDescifrar').addEventListener('click',() => {
  const cadenaParaDescifrar = document.getElementById('txtCadenaCifrada').value;
  const desplazamientoDescifrar = document.getElementById('txtOffsetDescifrar').value;
  const textoDecodificado = window.cipher.decode(desplazamientoDescifrar,cadenaParaDescifrar);
  document.getElementById('pTextoDescifrado').innerHTML = `El texto decodificado es: ${textoDecodificado}`;
});

document.getElementById('btnCambiarADescifrar').addEventListener('click',() => {
  document.getElementById('paginaPrincipal').style.display = 'none';
  document.getElementById('paginaDescifrar').style.display = 'block';
});

document.getElementById('btnRegresarD').addEventListener('click',() => {
  document.getElementById('paginaPrincipal').style.display = 'block';
  document.getElementById('paginaDescifrar').style.display = 'none';
});
