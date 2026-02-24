const usuario = localStorage.getItem("usuarioLogado");

if(!usuario){
alert("Usuário não identificado");
window.location.href = "../../index.html";
}

let contas = JSON.parse(localStorage.getItem("contasBanco")) || {};

if(!contas[usuario]){
contas[usuario] = {
saldo: 0,
historico: []
};
}

let saldo = contas[usuario].saldo;

const saldoTela = document.getElementById("saldo");
const historicoLista = document.getElementById("historico");

function salvar(){
contas[usuario].saldo = saldo;
localStorage.setItem("contasBanco", JSON.stringify(contas));
}

function atualizarTela(){
saldoTela.innerText = saldo;
}

function adicionarHistorico(texto){

const item = document.createElement("li");
item.innerText = texto;

historicoLista.prepend(item);

contas[usuario].historico.push(texto);
salvar();
}

function depositar(){

const valor = Number(document.getElementById("valor").value);

if(valor <= 0){
alert("Valor inválido");
return;
}

saldo += valor;

salvar();
atualizarTela();

adicionarHistorico("Depósito de R$ " + valor);
}

function sacar(){

const valor = Number(document.getElementById("valor").value);

if(valor > saldo){
alert("Saldo insuficiente");
return;
}

saldo -= valor;

salvar();
atualizarTela();

adicionarHistorico("Saque de R$ " + valor);
}

function carregarHistorico(){

const lista = contas[usuario].historico;

lista.slice().reverse().forEach(function(item){

const li = document.createElement("li");
li.innerText = item;

historicoLista.appendChild(li);

});
}

atualizarTela();
carregarHistorico();

function transferir(){

const destino = document.getElementById("destino").value;
const valor = Number(document.getElementById("valorTransferencia").value);

if(!contas[destino]){
alert("Usuário não encontrado");
return;
}

if(valor <= 0){
alert("Valor inválido");
return;
}

if(valor > saldo){
alert("Saldo insuficiente");
return;
}

// remove de quem envia
saldo -= valor;

// adiciona no destino
contas[destino].saldo += valor;

// histórico de quem enviou
adicionarHistorico("Transferiu R$ " + valor + " para " + destino);

// histórico de quem recebeu
const agora = new Date();
const data =
agora.toLocaleDateString() + " " +
agora.toLocaleTimeString().slice(0,5);

const registro = data + " - Recebeu R$ " + valor + " de " + usuario;

contas[destino].historico.push(registro);

salvar();
atualizarTela();

alert("Transferência realizada");
}