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

        //cria um objeto com os dados do usuário
       const usuario = {
        nome: nome,
        email: email,
        senha: senha
       };

       //Salva no localStorage
       localStorage.setItem("usuario", JSON.stringify(usuario));

       console.log("Usuário salvo com sucesso");

       // Redireciona para a página de login
       window.location.href = "index.html";





    });
});