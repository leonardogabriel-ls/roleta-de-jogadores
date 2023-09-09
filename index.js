const express = require('express');

const app = express();

const jogadores = ["José", "Maria", "João", "Marcos", "Fernanda"];
let ind = 0

app.get('/', (requisicao, resposta) => {
    const nome = jogadores[ind]

    resposta.send(`É a vez de ${nome} jogar!`)
    ind += 1
    if (ind == jogadores.length) {
        ind = 0
    }
});

app.listen(3000);