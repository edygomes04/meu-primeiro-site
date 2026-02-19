
// Quantidade de tentativas feitas (pode mudar → let)
let tentativas = 0;

const LIMITE_TENTATIVAS = 3;

// GARANTE QUE O HTML JÁ CARREGOU
document.addEventListener("DOMContentLoaded", function () {

  // PEGANDO ELEMENTOS DO HTML
   const form = document.getElementById("loginForm");   
   const emailInput = document.getElementById("email");
   const senhaInput = document.
   getElementById("senha"); 
   const mensagem = document.getElementById("mensagem"); 
 
   //recupera o usuário salvo no cadastro
 const usuarioSalvo = JSON.parse(localStorage.getItem("usuario"));
  // Define email/senha correta com base no cadastro
 const emailCorreto = usuarioSalvo ? usuarioSalvo.email: null;
 
 const senhaCorreta = usuarioSalvo ? usuarioSalvo.senha : null;

   // EVENTO DO FORMULÁRIO (ENTER ou clique)
   form.addEventListener("submit", function (event) {
    event.preventDefault();    
    entrar(); 
    });

    // LIMPA MENSAGEM QUANDO DIGITA
    emailInput.addEventListener("input", limparMensagem);
    senhaInput.addEventListener("input", limparMensagem);
    
    function limparMensagem() {
    mensagem.innerText = "";
  }

  // FUNÇÃO PRINCIPAL DE LOGIN
    function entrar() {

  // Pega o valor digitado pelo usuário
    const emailDigitado = emailInput.value
     
    const senhaDigitada = senhaInput.value;

    if (!emailDigitado || !senhaDigitada) {
      mensagem.innerText ="Preencha email e senha";
      mensagem.style.color = "orange";
      return;
    } 


    if (senhaDigitada.length < 4) {
      mensagem.innerText = "Senha muito curta";
      mensagem.style.color = "orange";
      return; // para a função aqui
    }

    //Não cadastrado
     if (!usuarioSalvo) {
      mensagem.innerText = "Nenhum usuário cadastrado";
      mensagem.style.color = "red";
      return;
    }

    // SENHA CORRETA
    if (emailDigitado === emailCorreto && senhaDigitada === senhaCorreta) {
      mensagem.innerText = "Acesso permitido";
      mensagem.style.color = "green";

      //salva que o usuário está logado
      localStorage.setItem("logado","true");
      
      //redireciona para a pagina do painel
      window.location.href = "painel.html";
      return;
}
    // SENHA INCORRETA
    tentativas++; // soma 1 tentativa

    const restantes = LIMITE_TENTATIVAS - tentativas;

    if (restantes > 0) {
      mensagem.innerText = `Email ou senha incorretos. Tentativas restantes: ${restantes}`;
      mensagem.style.color = "red";
    } else {
      mensagem.innerText = "Acesso bloqueado. Tente novamente mais tarde.";
      mensagem.style.color = "darkred";
      senhaInput.disabled = true; // bloqueia o input
    }

    // Limpa o campo após erro
    senhaInput.value = "";
  }
});
