var numAleatorio = Math.floor(Math.random() * 100) + 1;
var pontos = 100;
var array = [];
var stringArray = "";
var maiorOuMenor = "";

function novoJogo(){
    
    if (numDigitado == numAleatorio) {
        numAleatorio = Math.floor(Math.random() * 100) + 1;
        pontos = 100;
        //console.log(numAleatorio);
        document.getElementById("txtNumero").value = "";
        var labelResposta = document.getElementById("labelResposta");
        labelResposta.innerHTML = "Vamos jogar..."
        array = [];
        stringArray = "";
        var labelTentativas = document.getElementById("labelTentativas");
        labelTentativas.innerHTML = "...";
    } else {
        alert("Ainda não acertou, continue tentando!")
    } 
}

function tentativa(){
    numDigitado = parseInt(document.getElementById("txtNumero").value);

    if(numDigitado != numAleatorio) {
        //alert("errou")
        pontos = pontos - 1;
        var labelResposta = document.getElementById("labelResposta");
        if (numDigitado < numAleatorio) {
            maiorOuMenor = "Maior";
        } else {
            maiorOuMenor = "Menor";
        }
        labelResposta.innerHTML = "Errou! tente novamente. Você realizou " + (100 - pontos) + " tentativas." + " Tente um número " + maiorOuMenor

    }else{
        var labelResposta = document.getElementById("labelResposta");
        labelResposta.innerHTML = "Parabéns, Você Acertou! fez "+ pontos + " pontos."
    }
    console.log(numAleatorio)
    
    adicionarElementos();
    stringArray = array.join(',');

    var labelTentativas = document.getElementById("labelTentativas");
    labelTentativas.innerHTML = stringArray;

    document.getElementById("txtNumero").value = "";
}

function adicionarElementos() {
    var input = document.getElementById("txtNumero");
    var valores = input.value.split(",");
    array.push(...valores);
}
