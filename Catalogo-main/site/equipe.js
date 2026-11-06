class Equipe {
    constructor(nomeEquipe, baseOperacoes, anoCriacao) {
        this.nomeEquipe = nomeEquipe;
        this.baseOperacoes = baseOperacoes;
        this.anoCriacao = anoCriacao;
    }
}

const formularioEquipe = document.getElementById('formEquipe');

if (formularioEquipe) {
    formularioEquipe.addEventListener('submit', function(evento) {
        evento.preventDefault();

        const nomeEquipeF = document.getElementById('nomeEquipe').value;
        const baseOperacoesF = document.getElementById('baseOperacoes').value;
        const anoCriacaoF = document.getElementById('anoCriacao').value;

        const novaEquipe = new Equipe(nomeEquipeF, baseOperacoesF, anoCriacaoF);

        fetch('/api/equipes', {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json'
            },
            body: JSON.stringify(novaEquipe)
        })
        .then(resposta => resposta.json())
        .then(() => {
            alert('Equipe cadastrada com sucesso!');
            formularioEquipe.reset();
            window.location.href = 'equipes.html'; // Página onde exibe a lista de equipes
        })
        .catch(erro => console.error("Erro ao enviar equipe:", erro));
    });
}

// Listagem de Equipes (opcional para a página de exibição)
const containerEquipes = document.querySelector('.todasEquipes');

if (containerEquipes) {
    fetch('/api/equipes')
        .then((resposta) => resposta.json())
        .then((dados) => {
            containerEquipes.innerHTML = '';

            dados.forEach(eq => {
                containerEquipes.innerHTML += `
                <div class="card-equipe">
                    <div class="texto">
                        <h3>${eq.nomeEquipe}</h3>
                        <p><strong>Base de Operações:</strong> ${eq.baseOperacoes}</p>
                        <p><strong>Ano de Criação:</strong> ${eq.anoCriacao}</p>
                    </div>
                </div>
                `;
            });
        })
        .catch((erro) => console.error("Erro ao buscar as equipes:", erro));
}