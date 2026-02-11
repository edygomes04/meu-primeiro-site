document.addEventListener("DOMContentLoaded", function () {

  const form = document.getElementById("loginForm");
  const senhaInput = document.getElementById("senha");
  const mensagem = document.getElementById("mensagem");
  const senhaCorreta = "1234";

  form.addEventListener("submit", function (event) {
    event.preventDefault();
    entrar();
  });

  senhaInput.addEventListener("input", function () {
    mensagem.innerText = "";
  });

  function entrar() {
    const senhaDigitada = senhaInput.value;

    if (senhaDigitada === "") {
      mensagem.innerText = "Digite sua senha!";
      mensagem.style.color = "orange";
      return;
    }

    if (senhaDigitada === senhaCorreta) {
      mensagem.innerText = "Acesso permitido";
      mensagem.style.color = "green";
    } else {
      mensagem.innerText = "Senha incorreta";
      mensagem.style.color = "red";
    }

    senhaInput.value = "";
  }

});