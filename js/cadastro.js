
// Espera o HTML carregar
document.addEventListener("DOMContentLoaded", function() {


    //captura o formulário do cadastro

    const form = document.getElementById("cadastroForm");

    //Evento de envio do formulário
    form.addEventListener("submit", function (event) {
        event.preventDefault(); // impede o reload da pagina 

        console.log("Formulário de cadastro enviado");

        const nome = document.getElementById("nome").value;

        const email = document.getElementById("email").value;

        const senha = document.getElementById("senha").value;

        console.log(nome);
        console.log(email);
        console.log(senha);

      //pega lista de usuários ou cria uma lista vazia 
      let usuarios = JSON.parse(localStorage.getItem("usuarios")) || [];

      //verifica se já existe alguém com esse email
      const emailExiste = usuarios.some(function(u){
        return u.email === email;
      });

      if(emailExiste){
        alert("Este email já está cadastrado!");
        return;
      }
      
      //cria objeto do usuário
      const usuario = {
        nome: nome,
        email: email,
        senha: senha,
      };

      //adiciona na lista
      usuarios.push(usuario);

      //salva lista atualizada
      localStorage.setItem("usuarios", JSON.stringify(usuarios));

       console.log("Usuário salvo com sucesso");

       // Redireciona para a página de login
       window.location.href = "index.html";





    });
});