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
            document.getElementById("corpo").appendChild(barraTarefas);
            //tarefa é incluida na variavel texto
            var divTexto = document.createElement("span");
            var texto = document.createTextNode(tarefa);
            divTexto.className = "classeTextoAnterior";
            divTexto.appendChild(texto);

            document.getElementById("input").value = "";


            //span do ativamento
            var ativa = document.createElement("span");
            var ativado = document.createTextNode("\u2713");
            ativa.className = "ativ";
            ativa.appendChild(ativado);

            ativa.addEventListener("click", check);
            //alternando de checked para não checked
            function check() {

                if (divTexto.className == "classeTexto") {
                    divTexto.className = "classeTextoAnterior";
                    barraTarefas.className = "classeTarefa";
                } else {
                    divTexto.className = "classeTexto";
                    barraTarefas.className = "classeTarefaDepois";
                }
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
            barraTarefas.appendChild(divTexto);
            barraTarefas.appendChild(desliga);
        }
    }
}
