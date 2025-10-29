
var nota;
function addNota(){
    // pegar texto da nota
    nota = document.getElementById("Nota").value.trim();

    // pegar radio selecionado
    var radioSelecionado = document.querySelector("input[name='urgencia']:checked");

    //colocar nota na div correta
    if(radioSelecionado){
        var divDestino = document.getElementById(radioSelecionado.value);
        divDestino.innerHTML += `<p>${nota}</p>`;
    }
    else{
        alert("Por favor, selecione a urgência da nota.");
        return;
    }

    // limpar input e desmarcar radio
    document.getElementById('Nota').value = '';
    radioSelecionado.checked = false;
}
