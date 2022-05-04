// sistema de contagem de peças

const lista = [];

function cadastraPecas() {
    //const qtdDePecaCadastrada = 3;
    const qtdDePecaCadastrada = document.querySelector("#qtd").value;
    const recebeNomeDaPeca = document.querySelector("#nome").value;
    const recebePesoDaPeca = document.querySelector("#peso").value;
    const msgErroQtdDePecaCadastrada = document.querySelector('.msgErroQtdDePecaCadastrada');
    const msgNomeDaPeca = document.querySelector('.msgNomeDaPeca');
    const msgPesoDaPeca = document.querySelector('.msgPesoDaPeca');

    const peca = {
        nome: recebeNomeDaPeca,
        peso: +recebePesoDaPeca,
    };
    if (recebeNomeDaPeca === "") {
        msgNomeDaPeca.style.display = 'block';
        return;
    }
    if (peca.peso < 100) {
        msgPesoDaPeca.style.display = 'block';
        return;
    }
    if (lista.length >= +qtdDePecaCadastrada) {
        msgErroQtdDePecaCadastrada.style.display = 'block';
        return;
    }
    lista.push(peca);
    console.log({ lista })

}