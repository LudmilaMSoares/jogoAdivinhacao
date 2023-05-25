var numeroAleatorio = Math.floor(Math.random() * 100) + 1;

		tentativas = 0;
		acertou = false;
		pontuacao = 0;

		function verificar() {
			const numeroDigitado = parseInt(document.getElementById("numero").value);

			if (numeroDigitado < 1 || numeroDigitado > 100 || (numeroDigitado)) {
				return;
			}

			tentativas++;

			if (numeroDigitado === numeroAleatorio) {
				acertou = true;
				pontuacao = 100 - (tentativas - 1) * 10;
				var labelNum = document.getElementById("labelNum");
				labelNum.innerHTML= document.getElementById("resultado").innerHTML = "Parabéns! Você acertou o número em "+tentativas+ "tentativas!";
				document.getElementById("pontuacao").innerHTML = "Sua pontuação: "+pontuacao;
			} else if (numeroDigitado < numeroAleatorio) {
				document.getElementById("resultado").innerHTML = "Tente um número maior que "+numeroDigitado;
			} else {
				document.getElementById("resultado").innerHTML = "Tente um número menor que " +numeroDigitado;
			}
		}

		function reiniciar() {
			tentativas = 0;
			acertou = false;
			pontuacao = 0;
			var labelNum = document.getElementById("labelNum");
				labelNum.innerHTML=  document.getElementById("numero").value = ""; document.getElementById("resultado").innerHTML = ""; document.getElementById("pontuacao").innerHTML = "";
		}
