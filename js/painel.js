
        //verifica se está logado
        if(localStorage.getItem("logado") !== "true") {

            // se não estiver, volta para o login 
            window.location.href = "index.html"
        }

        //para sair
        function sair() {
            localStorage.removeItem("logado");
            window.location.href = "index.html"
        }
    