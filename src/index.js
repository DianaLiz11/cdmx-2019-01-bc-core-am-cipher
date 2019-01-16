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
