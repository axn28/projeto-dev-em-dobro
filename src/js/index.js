const botoesCarrossel = document.querySelectorAll('.botao');
const imagens = document.querySelectorAll('.imagem');
botoesCarrossel.forEach((botao, indice) => {
    botao.addEventListener('click', () => {
        dasativarBotaoSelecionado();

        SelecionarBotaoCarrossel(botao);

        esconderImagem();

        adicionarImagem(indice);
    })
})

function adicionarImagem(indice) {
    imagens[indice].classList.add('ativa');
}

function esconderImagem() {
    const imagemAtiva = document.querySelector('.ativa');
    imagemAtiva.classList.remove('ativa');
}

function SelecionarBotaoCarrossel(botao) {
    botao.classList.add('selecionado');
}

function dasativarBotaoSelecionado() {
    const botaoSelecionado = document.querySelector('.selecionado');
    botaoSelecionado.classList.remove('selecionado');
}
