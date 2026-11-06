
const express = require('express');
const app = express();

app.use(express.json());
app.use(express.static('site'));

let lista = [];

let listaEquipes = [
    {
        nomeEquipe: "Batfamília",
        baseOperacoes: "Batcaverna",
        anoCriacao: 1940
    },
    {
        nomeEquipe: "Titãs",
        baseOperacoes: "Torre dos Titãs",
        anoCriacao: 1964
    }
];

let listaLocalizacoes = [
    {
        nomeLocal: "Gotham City",
        universo: "DC Comics"
    },
    {
        nomeLocal: "Metropolis",
        universo: "DC Comics"
    }
];

let listaHabilidades = [
    {
        nomeHabilidade: "Mestre em Artes Marciais",
        descricaoHabilidade: "Especialista em várias formas de combate corpo a corpo e uso de armas brancas."
    },
    {
        nomeHabilidade: "Estrategista Tático",
        descricaoHabilidade: "Capacidade avançada de planejar operações complexas e antecipar movimentos inimigos."
    }
];

let listaQuadrinhos = [
    {
        titulo: "Batman: Sob o Capuz Vermelho",
        anoPublicacao: 2005
    },
    {
        titulo: "Batman: A Piada Mortal",
        anoPublicacao: 1988
    }
];

app.get('/api/lista', (req, res) => {
    res.json(lista);
});

app.get('/api/equipes', (req, res) => {
    res.json(listaEquipes);
});

app.get('/api/localizacoes', (req, res) => {
    res.json(listaLocalizacoes);
});

app.post('/api/lista', (req, res) => {
    const novoItem = req.body;
    lista.push(novoItem);
    res.json({ status: "sucesso" });
});

app.post('/api/equipes', (req, res) => {
    const novaEquipe = req.body;
    listaEquipes.push(novaEquipe);
    res.json({ status: "sucesso" });
});

app.post('/api/localizacoes', (req, res) => {
    const novaLocalizacao = req.body;
    listaLocalizacoes.push(novaLocalizacao);
    res.json({ status: "sucesso" });
});

app.get('/api/habilidades', (req, res) => {
    res.json(listaHabilidades);
});

// Rota POST: Recebe e guarda a nova habilidade
app.post('/api/habilidades', (req, res) => {
    const novaHabilidade = req.body;
    listaHabilidades.push(novaHabilidade);
    res.json({ status: "sucesso" });
});

app.get('/api/quadrinhos', (req, res) => {
    res.json(listaQuadrinhos);
});

// Rota POST: Recebe e guarda o novo quadrinho
app.post('/api/quadrinhos', (req, res) => {
    const novoQuadrinho = req.body;
    listaQuadrinhos.push(novoQuadrinho);
    res.json({ status: "sucesso" });
});

app.listen(3000, () => {
    console.log("Servidor escutando em http://localhost:3000");
});