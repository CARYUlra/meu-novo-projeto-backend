// Importa a biblioteca Express e também o tipo Express
// O Express será utilizado para criar o servidor web
import express from "express";
import type { Express, Request, Response } from "express";
import { Player } from "./models/Player.js";

// Importa a classe Player do arquivo Player.ts para cá(acho q é assim que escreve cá)
// por que Player.ts esta como Player.js?
// pois na hora de execução arquivos typeScript "não existem" eles são convertidos para JavaScript, então o arquivo Player.ts vira Player.js
//isso para o Node.js conseguir localizar o arquivo, pois ele não entende TypeScript, somente JavaScript


// Cria uma aplicação Express
// A função express() devolve um objeto que representa o servidor da aplicação
const app: Express = express();
//middleware para interpretar o corpo das requisições como JSON
app.use(express.json());

// Define a porta onde o servidor ficará disponível
// Neste caso, o servidor poderá ser acessado pela porta 8081
const PORT: number = 8081;

const player: Player = new Player("Aurudinho",100, 1);
//quando um usuario entrar na rota "/player", via POST, o sever ira acessar o metodo "attack" do player e retornar a mensagem de ataque
app.get("/player", (req: Request, res: Response) => {
    res.json({
        message: "Informações do jogador",
        player: player
    });
});

//rota para receber o dano
// quando o usuario acessar a rota "/player/takeDamage", ele ira receber o dano do jogador
app.post("/player/takeDamage", (req: Request, res: Response) => {
    //extrair o dano do corpo da requisição
    const { damage } = req.body;
    const damageMessage = player.takeDamage(damage);
    //chamar o metodo takeDamage do player e armazenar a mensagem de retorno
    res.json({
        //retornar a mensagem de dano, a vida atual e o nível atual do jogador
        action: damageMessage,
        //retornar a vida atual e o nível atual do jogador
        currentHealth: player.health,
        //retornar o nível atual do jogador
        currentLevel: player.level
    });

});

//rota post para o ataque
// quando o usuario acessar a rota "/player/attack", ele ira retornar o ataque do jogador em formato JSON
app.post("/player/attack", (req: Request, res: Response) => {
    const attackMessage = player.attack();
    //chamar o metodo atack do player e armazenar a mensagem de retorno
    res.json({
        message: attackMessage
    });
});
//////////////////////////////////////////////
app.post("/player/healt", (req: Request, res: Response) => {
    const healtMessage = player.healt();
    res.json({
        message: healtMessage
    });
});

app.post("/player/olharstatus", (req: Request, res: Response) => {
    const statusMessage = player.olharstatus();
    res.json({
        message: statusMessage
    });
});

app.listen(PORT, () => {
    console.log(`Servidor rodando em http://localhost:${PORT}`);
    console.log(`Rotas disponíveis:`);
    console.log(`GET http://localhost:${PORT}/player - Obter as informações do jogador`);
    console.log(`POST http://localhost:${PORT}/player/takeDamage - Receber o dano do jogador`);
    console.log(`POST http://localhost:${PORT}/player/attack - Retornar o ataque do jogador`);
    console.log(`POST http://localhost:${PORT}/player/healt - Retornar a cura do jogador`);
    console.log(`POST http://localhost:${PORT}/player/olharstatus - Retornar o status do jogador`);
});