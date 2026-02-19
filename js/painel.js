
        //verifica se está logado
        if(localStorage.getItem("logado") !== "true") {

            // se não estiver, volta para o login 
            window.location.href = "index.html"
        }

        //recupera o usuário salvo
        const usuarioSalvo = JSON.parse(localStorage.getItem("usuario"));

        //pega o span do HTML
        const nomeSpan = document.getElementById("nomeUsuario");

        //se existir usuário, mostra o nome
        if (usuarioSalvo && nomeSpan) {
            nomeSpan.innerText = usuarioSalvo.nome;
        }

        //para sair
        function sair() {
            localStorage.removeItem("logado");
            window.location.href = "index.html"
        }
    