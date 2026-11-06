class Quadrinho {
    constructor(titulo, anoPublicacao) {
        this.titulo = titulo;
        this.anoPublicacao = anoPublicacao;
    }
}

const formularioQuadrinho = document.getElementById('formQuadrinho');

if (formularioQuadrinho) {
    formularioQuadrinho.addEventListener('submit', function(evento) {
        evento.preventDefault();

        const tituloF = document.getElementById('titulo').value;
        const anoPublicacaoF = document.getElementById('anoPublicacao').value;

        const novoQuadrinho = new Quadrinho(tituloF, anoPublicacaoF);

        fetch('/api/quadrinhos', {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json'
            },
            body: JSON.stringify(novoQuadrinho)
        })
        .then(resposta => resposta.json())
        .then(() => {
            alert('Quadrinho cadastrado com sucesso!');
            formularioQuadrinho.reset();
            window.location.href = 'quadrinhos.html'; // Página onde exibe a lista de quadrinhos
        })
        .catch(erro => console.error("Erro ao enviar quadrinho:", erro));
    });
}

// Listagem de Quadrinhos (opcional para a página de exibição)
const containerQuadrinhos = document.querySelector('.todosQuadrinhos');

if (containerQuadrinhos) {
    fetch('/api/quadrinhos')
        .then((resposta) => resposta.json())
        .then((dados) => {
            containerQuadrinhos.innerHTML = '';

            dados.forEach(hq => {
                containerQuadrinhos.innerHTML += `
                <div class="card-quadrinho">
                    <div class="texto">
                        <h3>${hq.titulo}</h3>
                        <p><strong>Ano de Publicação:</strong> ${hq.anoPublicacao}</p>
                    </div>
                </div>
                `;
            });
        })
        .catch((erro) => console.error("Erro ao buscar os quadrinhos:", erro));
}