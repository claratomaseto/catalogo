class Habilidade {
    constructor(nomeHabilidade, descricaoHabilidade) {
        this.nomeHabilidade = nomeHabilidade;
        this.descricaoHabilidade = descricaoHabilidade;
    }
}

const formularioHabilidade = document.getElementById('formHabilidade');

if (formularioHabilidade) {
    formularioHabilidade.addEventListener('submit', function(evento) {
        evento.preventDefault();

        const nomeHabilidadeF = document.getElementById('nomeHabilidade').value;
        const descricaoHabilidadeF = document.getElementById('descricaoHabilidade').value;

        const novaHabilidade = new Habilidade(nomeHabilidadeF, descricaoHabilidadeF);

        fetch('/api/habilidades', {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json'
            },
            body: JSON.stringify(novaHabilidade)
        })
        .then(resposta => resposta.json())
        .then(() => {
            alert('Habilidade cadastrada com sucesso!');
            formularioHabilidade.reset();
            window.location.href = 'habilidades.html'; // Página onde exibe a lista de habilidades
        })
        .catch(erro => console.error("Erro ao enviar habilidade:", erro));
    });
}

// Listagem de Habilidades (opcional para a página de exibição)
const containerHabilidades = document.querySelector('.todasHabilidades');

if (containerHabilidades) {
    fetch('/api/habilidades')
        .then((resposta) => resposta.json())
        .then((dados) => {
            containerHabilidades.innerHTML = '';

            dados.forEach(hab => {
                containerHabilidades.innerHTML += `
                <div class="card-habilidade">
                    <div class="texto">
                        <h3>${hab.nomeHabilidade}</h3>
                        <p>${hab.descricaoHabilidade}</p>
                    </div>
                </div>
                `;
            });
        })
        .catch((erro) => console.error("Erro ao buscar as habilidades:", erro));
}