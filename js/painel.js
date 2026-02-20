
        //verifica se está logado
        if(localStorage.getItem("logado") !== "true") {

            // se não estiver, volta para o login 
            window.location.href = "index.html"
        }

        //pega o nome do usuário que fez login
        const nomeUsuario = localStorage.getItem("usuarioLogado");

        //pega o span do HTML
        const nomeSpan = document.getElementById("nomeUsuario");

        //mostra no painel
        if (nomeUsuario && nomeSpan) { 
            nomeSpan.innerText = nomeUsuario;
        }

        //para sair
        function sair() {
            localStorage.removeItem("logado");
            window.location.href = "index.html"
        }
    