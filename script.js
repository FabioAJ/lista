function verifica(event) {
    //id da verificação
    var tarefa = document.getElementById("input").value;

    if (event.which == 13 || event.keyCode == 13) {
        if (tarefa == "") {
            alert("Insira uma tarefa");
        } else {
            var barraTarefas = document.createElement("DIV");
            var texto = document.createTextNode(tarefa);
            barraTarefas.appendChild(texto);
            document.body.appendChild(barraTarefas);
        }
    }
}
