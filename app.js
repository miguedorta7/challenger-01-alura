//variables del DOM
const desencriptar = document.getElementById("desencriptar");
const NoEncontrado = document.getElementById("NoEncontrado");
const salidaTexto = document.getElementById("salidaTexto");
const copiarTexto = document.getElementById("copiarTexto");

copiarTexto.style.display = "none";
salidaTexto.style.display = "none";

function tieneCaracteresEspeciales(texto) {
  const regex = /[^\w\s]/;
  return regex.test(texto);
}

function tieneNumeros(texto) {
  const regex = /\d/;
  return regex.test(texto);
}

function encriptar() {
  const textoEntrada = document.getElementById("textoEntrada").value.toLowerCase();

  if (textoEntrada === "") {
    NoEncontrado.style.display = "block";
    copiarTexto.style.display = "none";
    salidaTexto.style.display = "none";
  } else if (tieneCaracteresEspeciales(textoEntrada) || tieneNumeros(textoEntrada)) {
    alert("No deben ser utilizados letras con acentos, caracteres especiales ni números.");
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
  const textoSalida = document.getElementById("textoEntrada").value.toLowerCase();

  if (textoSalida === "") {
    NoEncontrado.style.display = "block";
    copiarTexto.style.display = "none";
    salidaTexto.style.display = "none";
  } else if (tieneCaracteresEspeciales(textoSalida) || tieneNumeros(textoSalida)) {
    alert("No deben ser utilizados letras con acentos, caracteres especiales ni números.");
  } else {
 

    const reemplazar = textoSalida
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
  let copyText = document.getElementById("salidaTexto");
  copyText.select();
  document.execCommand("copy");
  document
    .querySelector("#salidaTexto")
    .addEventListener("click", copiarPortapapeles);
  textoEntrada.value = "";
}
