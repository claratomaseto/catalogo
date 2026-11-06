class Personagem {
    constructor (nome, codinome, tipo, status, localizacao, imagem) {
        this.nome = nome;
        this.codinome = codinome;
        this.tipo = tipo;
        this.status = status;
        this.localizacao = localizacao;
        this.imagem = imagem;
    }
}

// --- LÓGICA DO FORMULÁRIO DE CADASTRO ---
const formulario = document.getElementById('meuFormulario');

if (formulario) {
    formulario.addEventListener('submit', function(evento) {
        evento.preventDefault();

        const nomeF = document.getElementById('nome').value;
        const codinomeF = document.getElementById('codinome').value;
        const tipoF = document.getElementById('tipo').value;
        const statusF = document.getElementById('status').value;
        const localizacaoF = document.getElementById('localizacao').value;
        const imagemF = document.getElementById('imagem').value;

        const novoPersonagem = new Personagem(nomeF, codinomeF, tipoF, statusF, localizacaoF, imagemF);

        fetch('/api/lista', {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json'
            },
            body: JSON.stringify(novoPersonagem)
        })
        .then(resposta => resposta.json())
        .then(() => {
            alert('Cadastrado com sucesso!');
            formulario.reset();
            window.location.href = 'index.html';
        })
        .catch(erro => console.error("Erro ao enviar:", erro));
    });
}

// --- LÓGICA DA LISTAGEM DE CARDS ---
// CORRIGIDO: Agora busca por id="colecao" para corresponder ao seu index.html
const container = document.getElementById('colecao');

if (container) {
    fetch('/api/lista')
        .then((resposta) => resposta.json())
        .then((dados) => {
            container.innerHTML = '';

            dados.forEach(item => {
                container.innerHTML += `
                <div class="card">
                    <div class="texto">
                        <h3>${item.codinome}</h3>
                        <p><strong>Nome:</strong> ${item.nome}</p>
                        <p><strong>Tipo:</strong> ${item.tipo}</p>
                        <p><strong>Status:</strong> ${item.status}</p>
                        <p><strong>Localização:</strong> ${item.localizacao}</p>
                    </div>
                    <div class="img">
                        <img src="${item.imagem}" alt="Imagem de ${item.codinome}">
                    </div>
                </div>
                `;
            });
        })
        .catch((erro) => console.error("Erro ao buscar os dados:", erro));
}