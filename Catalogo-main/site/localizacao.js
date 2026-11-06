class Localizacao {
    constructor(nomeLocal, universo) {
        this.nomeLocal = nomeLocal;
        this.universo = universo;
    }
}

const formularioLocalizacao = document.getElementById('formLocalizacao');

if (formularioLocalizacao) {
    formularioLocalizacao.addEventListener('submit', function(evento) {
        evento.preventDefault();

        const nomeLocalF = document.getElementById('nomeLocal').value;
        const universoF = document.getElementById('universo').value;

        const novaLocalizacao = new Localizacao(nomeLocalF, universoF);

        fetch('/api/localizacoes', {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json'
            },
            body: JSON.stringify(novaLocalizacao)
        })
        .then(resposta => resposta.json())
        .then(() => {
            alert('Localização cadastrada com sucesso!');
            formularioLocalizacao.reset();
            window.location.href = 'localizacoes.html'; // Página onde exibe a lista de localizações
        })
        .catch(erro => console.error("Erro ao enviar localização:", erro));
    });
}

// Listagem de Localizações (opcional para a página de exibição)
const containerLocalizacoes = document.querySelector('.todasLocalizacoes');

if (containerLocalizacoes) {
    fetch('/api/localizacoes')
        .then((resposta) => resposta.json())
        .then((dados) => {
            containerLocalizacoes.innerHTML = '';

            dados.forEach(loc => {
                containerLocalizacoes.innerHTML += `
                <div class="card-localizacao">
                    <div class="texto">
                        <h3>${loc.nomeLocal}</h3>
                        <p><strong>Universo:</strong> ${loc.universo}</p>
                    </div>
                </div>
                `;
            });
        })
        .catch((erro) => console.error("Erro ao buscar as localizações:", erro));
}