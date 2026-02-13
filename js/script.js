// ===============================
// CONTROLE DE TENTATIVAS
// ===============================

// Quantidade de tentativas feitas (pode mudar → let)
let tentativas = 0;

// Limite máximo permitido (valor fixo → const)
const LIMITE_TENTATIVAS = 3;

// ===============================
// GARANTE QUE O HTML JÁ CARREGOU
// ===============================

document.addEventListener("DOMContentLoaded", function () {

  // ===============================
  // PEGANDO ELEMENTOS DO HTML
  // ===============================

  const form = document.getElementById("loginForm"); // formulário
  const senhaInput = document.getElementById("senha"); // input da senha
  const mensagem = document.getElementById("mensagem"); // texto de feedback

  // Senha correta do sistema (simulação)
  const senhaCorreta = "1234";

  // ===============================
  // EVENTO DO FORMULÁRIO (ENTER ou clique)
  // ===============================

  form.addEventListener("submit", function (event) {
    event.preventDefault(); // impede recarregar a página
    entrar(); // chama a função principal
  });

  // ===============================
  // LIMPA MENSAGEM QUANDO DIGITA
  // ===============================

  senhaInput.addEventListener("input", function () {
    mensagem.innerText = "";
  });

  // ===============================
  // FUNÇÃO PRINCIPAL DE LOGIN
  // ===============================

  function entrar() {

    // Pega o valor digitado pelo usuário
    const senhaDigitada = senhaInput.value;

    // ===============================
    // VALIDAÇÃO: SENHA CURTA
    // ===============================

    if (senhaDigitada.length < 4) {
      mensagem.innerText = "Senha muito curta";
      mensagem.style.color = "orange";
      return; // para a função aqui
    }

    // ===============================
    // SENHA CORRETA
    // ===============================

    if (senhaDigitada === senhaCorreta) {
      mensagem.innerText = "Acesso permitido";
      mensagem.style.color = "green";

      //salva que o usuário está logado
      localStorage.setItem("logado","true");
      
      //redireciona para a pagina do painel
      window.location.href = "painel.html";
      

      tentativas = 0; // reseta tentativas ao acertar
      senhaInput.value = ""; // limpa o campo
      return;
    }

    // ===============================
    // SENHA INCORRETA
    // ===============================

    tentativas++; // soma 1 tentativa

    let restantes = LIMITE_TENTATIVAS - tentativas;

    if (restantes > 0) {
      mensagem.innerText = `Senha incorreta. Tentativas restantes: ${restantes}`;
      mensagem.style.color = "red";
    } else {
      mensagem.innerText = "Acesso bloqueado. Tente mais tarde.";
      mensagem.style.color = "darkred";
      senhaInput.disabled = true; // bloqueia o input
    }

    // Limpa o campo após erro
    senhaInput.value = "";
  }
});
