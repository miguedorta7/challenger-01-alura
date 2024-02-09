//variables del DOM
const desencriptar = document.getElementById("desencriptar");
const NoEncontrado = document.getElementById("NoEncontrado");
const salidaTexto = document.getElementById("salidaTexto");
const copiarTexto = document.getElementById("copiarTexto");

copiarTexto.style.display = "none";
salidaTexto.style.display = "none";

function tieneMayusculas (texto){
  const regex = /(?=.*?[A-Z])/;
  return regex.test(texto);
}

function tieneCaracteresEspeciales(texto) {
  const regex = /[^\w\s]/;
  return regex.test(texto);
}

function tieneNumeros(texto) {
  const regex = /\d/;
  return regex.test(texto);
}

function encriptar() {
  const textoEntrada = document.getElementById("textoEntrada").value;

  if (textoEntrada === "") {
    NoEncontrado.style.display = "block";
    copiarTexto.style.display = "none";
    salidaTexto.style.display = "none";
  } else if (tieneCaracteresEspeciales(textoEntrada) || tieneNumeros(textoEntrada) || tieneMayusculas(textoEntrada)) {
    alert("No esta permitido ingresar letras con mayúsculas, acentos, caracteres especiales, ni tampoco ingresar números.");
  } else {;

    const reemplazar = textoEntrada
      .replace(/e/g, "enter")
      .replace(/i/g, "imes")
      .replace(/a/g, "ai")
      .replace(/o/g, "ober")
      .replace(/u/g, "ufat");

    document.getElementById("salidaTexto").value = reemplazar;
    NoEncontrado.style.display = "none";
    copiarTexto.style.display = "block";
    salidaTexto.style.display = "block";
  }
}

function desencriptado() {
  const textoSalida = document.getElementById("textoEntrada").value;

  if (textoSalida === "") {
    NoEncontrado.style.display = "block";
    copiarTexto.style.display = "none";
    salidaTexto.style.display = "none";
  } else if (tieneCaracteresEspeciales(textoSalida) || tieneNumeros(textoSalida) || /[A-Z]/.test(textoSalida)) {
    alert("No deben ser utilizadas letras con mayúsculas, acentos, caracteres especiales ni números.");
  } else {
    const reemplazar = textoSalida
      .toLowerCase()
      .replace(/enter/g, "e")
      .replace(/imes/g, "i")
      .replace(/ai/g, "a")
      .replace(/ober/g, "o")
      .replace(/ufat/g, "u");

    document.getElementById("salidaTexto").value = reemplazar;
    NoEncontrado.style.display = "none";
    copiarTexto.style.display = "block";
    salidaTexto.style.display = "block";
  }
}

function copiarPortapapeles() {
  let copiarTexto = document.getElementById("salidaTexto");
  copiarTexto.select();
  document.execCommand("copy");
  textoEntrada.value = "";
}


