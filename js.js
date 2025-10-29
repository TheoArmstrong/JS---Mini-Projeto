
var nota;
function addNota() {
    // pegar texto da nota
    nota = document.getElementById("Nota").value

    // pegar radio selecionado
    var radioSelecionado = document.querySelector("input[name='urgencia']:checked");

    if(radioSelecionado.value === "NaoUrgente"){
        document.getElementById('listaNãoUrgente').innerHTML += `<li>${nota}</li>`;
    } else {
        document.getElementById('listaUrgente').innerHTML += `<li>${nota}</li>`;
    }



    // limpar input e desmarcar radio
    document.getElementById('Nota').value = '';
    radioSelecionado.checked = false;

    alert("Nota adicionada com sucesso!");
}
