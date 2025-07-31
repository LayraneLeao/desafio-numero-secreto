let numeroSecreto = Math.floor(Math.random() * 11); // número entre 0 e 10
let quantidadeTentativas = 5;

function enviarNumero() {
    let valorDigitado = parseInt(document.getElementById("numero-aleatorio").value);
    let mensagem;
    let mensagemDica = '';

    if (isNaN(valorDigitado) || valorDigitado < 0 || valorDigitado > 10) {
        mensagem = 'Você não digitou um número válido! Digite um número entre 0 e 10.';
    } else {
        if (valorDigitado === numeroSecreto) {
            mensagem = `Parabéns, você acertou! O número secreto é ${numeroSecreto}.`;
        } else {
            mensagem = (quantidadeTentativas > 0) ? `Você errou o número secreto!\nVocê tem apenas mais ${quantidadeTentativas} tentativa(s).` : `Você perdeu! O número secreto era ${numeroSecreto}.`;
            mensagemDica = (valorDigitado > numeroSecreto) ? "Dica: O número secreto é MENOR!" : "Dica: O número secreto é MAIOR!";

            quantidadeTentativas--;
        }
    }

    document.getElementById("saida").textContent = mensagem;
    document.getElementById("saida-dica").textContent = mensagemDica;

}
