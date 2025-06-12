var getvalue = localStorage.getItem("nome");

var getpoints= localStorage.getItem("pontos");

var nom_user = localStorage.getItem("nome")

function voltar(){
    window.open("index.html")
}

function new_aba(){
    if(getvalue == null){
        window.open("login.html")

    }else if(getvalue != null){
        alert("Usuario cadastrado: " + getvalue + "\nUltima pontuaçao: " + getpoints);
        window.open("QuizV3.html")
    }
}
function setValor(){
    var valor  = document.getElementById("input").value;
    localStorage.setItem("nome", valor);
    window.open("QuizV3.html")
}
document.addEventListener("DOMContentLoaded", function () {
    const perguntas = document.querySelectorAll(".opcoes");
    
    // variaveis pontos.
    var PerguntasRespondidas = 0;
    var pontos = 0;

    perguntas.forEach(pergunta => {
      const botoes = pergunta.querySelectorAll("button");

      botoes.forEach(botao => {
        botao.addEventListener("click", function () {

          if (botao.disabled) { return; } 

          PerguntasRespondidas++;

          // veificar resposta 
          if (botao.id == "certo") {

            botao.style.border = "2px solid green";
            pontos++;

            // salvar pontos
            localStorage.setItem("pontos", pontos);

          } else {
            botao.style.border = "2px #FF6666 solid";
          }

          botoes.forEach(btn => btn.disabled = true);

          if (PerguntasRespondidas == 10) {

            document.getElementById("valor").innerText =  nom_user + " acertou " + pontos + " de 10 Perguntas!";
            
            let botao_reiniciar = document.getElementById("botao-reiniciar");
            let botao_voltar = document.getElementById("botao-voltar");
            
            // criar botões voltar/reiniciar;
            botao_reiniciar.innerHTML = `<button type="button" onclick="location.reload()">Reiniciar</button>`;
            botao_voltar.innerHTML = `<button type="button" onclick="voltar()">Voltar</button>`;
          }
        });
      });
    });
});

