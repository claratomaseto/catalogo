class ObraDeArte {
    constructor (titulo, descricao, imagem, descImagem) {
        this.titulo = titulo;
        this.descricao = descricao;
        this.imagem = imagem;
        this.descImagem = descImagem;
    }
}

const formulario = document.getElementById ('meuFormulario');

formulario.addEventListener('submit', function(evento)) {
    evento.preventDefault();

    const tituloF = document.getElementById('titulo').value;
    const imagemF = document.getElementById('imagem').value;
    const descricaoImF = document.getElementById('descricao').value;
    const textoF = document.getElementById('paragrafo').value;

    const novaObra = new ObraDeArte(tituloF, textoF, imagemF, descricaoImF);

    fetch('/api/lista', {
        method: 'POST',
        headers: {
            'Content-Type': 'application/json'
        },
        body: JSON.stringify(novaObra)
    })
    .then(resposta => resposta.json())
    .then(() => {
        alert('Obra enviada com sucesso!');
        formulario.request();
        window.location.href = 'index.html';
    })
    .catch(erro => console.error("Erro ao enviar:", erro));
});