API de RPG: POO e Persistência com File System

> Desenvolvimento de uma API em Node.js fundamentada em Programação Orientada a Objetos (POO), simulando um sistema de RPG com persistência de dados local através do módulo nativo `fs` (File System).

---

## 📑 Índice

- [Sobre o Projeto](#-sobre-o-projeto)
- [Conceitos Aplicados](#-conceitos-aplicados)
- [Rotas da API (Endpoints)](#-rotas-da-api-endpoints)
- [Como Executar e Testar](#-como-executar-e-testar)
- [Estrutura de Persistência](#-estrutura-de-persistência)

---

##  Sobre o Projeto

Este projeto consiste em uma API desenvolvida para gerenciar o estado de um personagem de RPG. O foco principal é a integração entre a **arquitetura de API**, os princípios da **Programação Orientada a Objetos** e a **camada de persistência local**. 

Isso garante que as ações realizadas (como tomar dano) alterem o estado do objeto em memória e sejam salvas no disco, impedindo a perda do progresso quando o servidor for reiniciado.

---

##  Conceitos Aplicados

Durante o desenvolvimento, os seguintes conceitos foram implementados:

*   **Modelagem de Classes e Objetos:** Criação da classe `Player`, encapsulando atributos (nome, vida/hp, nível) e comportamentos (métodos como atacar e receber dano).
*   **Construtor e Instanciação:** Inicialização do estado da entidade em memória usando a função construtora e o operador `new Player(...)`.
*   **Persistência de Dados (File System):** 
    *   **Serialização:** Conversão do objeto `Player` para JSON e gravação no disco físico.
    *   **Desserialização:** Leitura do arquivo em disco (usando o módulo nativo `fs`) e reconstrução do objeto na memória do servidor.

---

## Rotas da API (Endpoints)

A API expõe os seguintes endpoints para interação (recomenda-se o uso do Postman ou Insomnia para testes):

### 1. Visualizar Jogador
*   **Método:** `GET`
*   **Rota:** `/player`
*   **Descrição:** Retorna a visualização atual dos dados e o estado do jogador em memória.

### 2. Ação de Ataque
*   **Método:** `POST`
*   **Rota:** `/player/attack`
*   **Descrição:** Executa a chamada do método de ataque do jogador, retornando o resultado da ação.

### 3. Receber Dano
*   **Método:** `POST`
*   **Rota:** `/player/damage`
*   **Descrição:** Altera o estado interno do jogador (reduzindo HP) e atualiza o arquivo de salvamento em tempo real.
*   **Corpo da Requisição (JSON):**
    ```json
    {
      "damage": 25
    }
    ```

---

## Como Executar e Testar

Siga o passo a passo abaixo para rodar o projeto na sua máquina:

1. **Instale as dependências** (caso ainda não tenha feito):
   ```bash
   npm install
#### Inicialize o servidor em modo de desenvolvimento:

#### Bash
#### npm run dev
#### Realize os testes:

#### Abra o Postman (ou similar).

#### Faça chamadas para http://localhost:3000/player (ou a porta configurada no seu projeto).

#### Envie o payload de dano no formato JSON na rota respectiva e observe o arquivo de dados sendo atualizado.

## Estrutura de Persistência
#### Os dados do jogador são armazenados localmente e atualizados a cada modificação de estado através do arquivo:
#### ./data/player.json

#### Se o servidor for desligado e ligado novamente, a aplicação lerá este arquivo e recriará a classe Player exatamente com o HP e Nível que estavam no momento do último salvamento.

<img width="1016" height="536" alt="b79f9b27f5bd33fae89f352b6dfb06a5" src="https://github.com/user-attachments/assets/c24b432d-88be-43e8-879d-0d631fb6f29b" />

# Meu próximo passo é criar um jogo RPG com isso 
## Só falta os sprites, código, tempo, dinheiro, saber como fazer....
## Mas vontate tem
