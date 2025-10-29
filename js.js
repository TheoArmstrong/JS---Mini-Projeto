
var nota;
function addNota() {
    // pegar texto da nota
    nota = document.getElementById("Nota").value.trim();

    // pegar radio selecionado
    var radioSelecionado = document.querySelector("input[name='urgencia']:checked");

    //colocar nota na div correta
    var divDestino = document.getElementById(radioSelecionado.value);

    divDestino.innerHTML += `<il>${nota}</il>`;


    // limpar input e desmarcar radio
    document.getElementById('Nota').value = '';
    radioSelecionado.checked = false;

    
}
