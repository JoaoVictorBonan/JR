const numeroSenha = document.querySelector('.parametro-senha__texto');
numeroSenha.textContent = 5;
const botoes = document.querySelectorAll('.parametro-senha__botao');
botoes[0].onclick = diminuiTamanho;
botoes[1].onclick = aumentaTamanho;
console.log(botoes);
function diminuiTamanho()
const numeroSenha = document.querySelector('.parametro-senha__texto');
    let tamanhoSenha = 12;{
}
function diminuiTamanho(){
    if (tamanhoSenha > 1)
tamanhoSenha = tamanhoSenha
    tamanhoSenha = tamanhoSenha - 1;
    numeroSenha.textContent = tamanhoSenha
    }
    function aumentaTamanho() {
        if (tamanhoSenha < 20)
        tamanhoSenha = tamanhoSenha + 1;
        numeroSenha.textContent = tamanhoSenha;
        }