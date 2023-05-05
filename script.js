let textarea = document.querySelector("textarea");
let botaoCripto = document.getElementById("botaoCripto");
let botaoDescripto = document.getElementById("botaoDescripto");

textarea.addEventListener("keypress", (e) => {
  if (!checkChar(e)) {
    e.preventDefault();
  }
});

function checkChar(e) {
  const char = String.fromCharCode(e.keyCode);

  const pattern = "[a-zA-Z0-9]";

  if (char.match(pattern)) {
    return true;
  } else {
    console.log("Caracter especial digitado " + char);
  }
}

textarea.addEventListener("keypress", () => {
  if (textarea.value === "" && textarea.value === null) {
    botaoCripto.classList.remove("criptografar");
    botaoCripto.classList.add("desabilitado");

    botaoDescripto.classList.remove("descriptografar");
    botaoDescripto.classList.add("desabilitado");
  }

  botaoCripto.disabled = false;
  botaoCripto.classList.remove("desabilitado");
  botaoCripto.classList.add("criptografar");

  botaoDescripto.disabled = false;
  botaoDescripto.classList.remove("desabilitado");
  botaoDescripto.classList.add("descriptografar");
});

textarea.addEventListener("paste", () => {
  if (textarea.value === "" && textarea.value === null) {
    botaoCripto.classList.remove("criptografar");
    botaoCripto.classList.add("desabilitado");

    botaoDescripto.classList.remove("descriptografar");
    botaoDescripto.classList.add("desabilitado");
  }

  botaoCripto.disabled = false;
  botaoCripto.classList.remove("desabilitado");
  botaoCripto.classList.add("criptografar");
  console.log("Entrou nessa porra aqui!");

  botaoDescripto.disabled = false;
  botaoDescripto.classList.remove("desabilitado");
  botaoDescripto.classList.add("descriptografar");
});

function carregaPagina() {
  let textarea = document.querySelector("textarea");
  let resultado = document.getElementById("resultado");

  let imagem = document.querySelector("aside img");
  let asideP = document.querySelector("aside p");
  let botaoCopiar = document.querySelector("#copiar");

  resultado.style.display = "none";
  botaoCopiar.style.display = "none";

  imagem.style.display = "block";
  asideP.style.display = "block";

  textarea.focus();
}

function criptografar() {
  let textarea = document.querySelector("textarea");
  let resultado = document.getElementById("resultado");

  let imagem = document.querySelector("aside img");
  let asideP = document.querySelector("aside p");
  let botaoCopiar = document.querySelector("#copiar");

  resultado.style.display = "block";
  botaoCopiar.style.display = "block";

  imagem.style.display = "none";
  asideP.style.display = "none";

  let texto = textarea.value
    .toLowerCase()
    .normalize("NFD")
    .replace(/[\u0300-\u036f]/g, "");
  console.log(texto);

  cripto = texto
    .replace(/e/g, "enter")
    .replace(/i/g, "imes")
    .replace(/a/g, "ai")
    .replace(/o/g, "ober")
    .replace(/u/g, "ufat");

  resultado.innerText = cripto;
  textarea.value = "";

  botaoCripto.classList.remove("criptografar");
  botaoCripto.classList.add("desabilitado");

  botaoDescripto.classList.remove("descriptografar");
  botaoDescripto.classList.add("desabilitado");

  textarea.focus();
}

function descriptografar() {
  let textarea = document.querySelector("textarea");
  let resultado = document.getElementById("resultado");

  let imagem = document.querySelector("aside img");
  let asideP = document.querySelector("aside p");
  let botaoCopiar = document.querySelector("#copiar");

  resultado.style.display = "block";
  botaoCopiar.style.display = "block";

  imagem.style.display = "none";
  asideP.style.display = "none";

  let texto = textarea.value;

  descripto = texto
    .replace(/enter/g, "e")
    .replace(/imes/g, "i")
    .replace(/ai/g, "a")
    .replace(/ober/g, "o")
    .replace(/ufat/g, "u");

  resultado.innerText = descripto;
  textarea.value = "";

  botaoCripto.classList.remove("criptografar");
  botaoCripto.classList.add("desabilitado");

  botaoDescripto.classList.remove("descriptografar");
  botaoDescripto.classList.add("desabilitado");

  textarea.focus();
}

function copiar() {
  let resultado = document.getElementById("resultado");
  navigator.clipboard.writeText(resultado.innerHTML);
}

carregaPagina();