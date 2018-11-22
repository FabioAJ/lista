function verifica(event) {
   //id da verificação
   var tarefa = document.getElementById("input").value;

   if (event.which == 13 || event.keyCode == 13) {
       if (tarefa == "") {
           alert("Insira uma tarefa");
       } else {
           //adiciona um div para as tarefas
           var barraTarefas = document.createElement("div");
           barraTarefas.className = "classeTarefa";
           document.body.appendChild(barraTarefas);
           //tarefa é incluida na variavel texto
           var texto = document.createTextNode(tarefa);
           //span do ativamento
           var ativa = document.createElement("span");
           var ativado = document.createTextNode("\u2713");
           ativa.className = "ativ";
           ativa.appendChild(ativado);

           ativa.addEventListener("click", check);

           function check() {
                barraTarefas.remove();
            }
           //span do desligamento
           var desliga = document.createElement("span");
           var desligado = document.createTextNode("\u00D7");
           desliga.className = "desli";
           desliga.appendChild(desligado);

           desliga.addEventListener("click", exclui);

           function exclui() {
                barraTarefas.remove();
            }
           //adiciona a barra de tarefas ORDENADAMENTE!
           barraTarefas.appendChild(ativa);
           barraTarefas.appendChild(texto);
           barraTarefas.appendChild(desliga);
       }
   }

}
