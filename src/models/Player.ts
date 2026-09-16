

/*
A palavra-chave "export" permite que a classe Player seja utilizada em outros arquivos
A palavra-chave "class" define uma classe em TypeScript
*/
let Enemy = 100; //vida do inimigo' 
export class Player {
    // Atributos da classe Player
    // A palavra-chave "public" indica que a propriedade pode ser acessada de fora da classe
    public name: string; //nome do jogador em texto
    public health: number;// vida do jogador em número
    public level: number; //nível do jogador em número

    // Construtor da classe Player
    // O construtor é um método especial que é chamado quando uma nova instância da classe é criada
    constructor(name: string, health: number = 100 , level: number = 1) {
        // A palavra-chave "this" refere-se à instância atual da classe
        //ou seja: "pega o atributo health da class Player e atribua o valoe 100(já que foi o valor predefinido)"
        this.name = name;//inicializa o nome do jogador
        this.health = health;//inicializa a vida do jogador 
        this.level = level;//inicializa o nível do jogador 
    }

    //metodos da class player
    // metodos são funções da class e pode ser chamada de instancias
    //metodo "atacl" é o ataque do jogador(ele ataca)
    public attack(): string {
        const damage = this.level * 10; // calcula o dano com base no nível do jogador(dano igual a level x 10[se o nevel for 1, o dano será 10])
        // a palavra-chave "return" indica o valor que será retornado pela função
        //como fazer o dano da classe player passar para a vida da classe enemy?
        Enemy = Enemy - damage;
        if (Enemy <= 0) {
            Enemy = 0;
            this.level = this.level + 1;
            let enemy = 100;
            return `O jogador ${this.name} atacou! Infligiu ${damage} de dano ao inimigo.O inimigo foi derrotado!`
            return`Jogador ${this.name} subiu para o nível ${this.level}!`;
        
        }
        return `O jogador ${this.name} atacou! Infligiu ${damage} de dano ao inimigo. A vida do inimigo agora é ${Enemy}.`;    




    }

    //o medoto  "takeDamage" é o dano que o jogador recebe(ele toma dano)
    public takeDamage(damage: number): string {
        // subtrai o dano da vida do jogador
        this.health -= damage;
        //verifica se a vida do jogador é menor ou igual a 0
        if (this.health <= 0) {
            this.health = 0;//ele vai zerar a vida para q não fique no negativo
            return `O beta ${this.name} foi mogado.\nSOBRA NADA PROS BETAS!`;
        } 
            return `O jogador ${this.name} recebeu ${damage} de dano.\nAgora tem ${this.health} de vida.`;  
    }
    ///////////////////////////////////////////////////////////////////////////////////////////////////////
    public healt(): string {
        const healt = this.level * 10;
        this.health += healt;
                if (this.health >= 200) {
            this.health = 200;
            return `Você não pode curar mais que 200 de vida.\nAgora tem ${this.health} de vida.`;
        }
        return `O jogador ${this.name} curou ${healt} de vida.\nAgora tem ${this.health} de vida.`;  
    }

        public olharstatus(): string {
        return `O jogador ${this.name} tem ${this.health} de vida e está no nível ${this.level} e ${this.level * 10} de dano.`;
    }


}