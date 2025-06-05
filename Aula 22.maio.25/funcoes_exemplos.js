// 1. Função Declarativa (function Declaration)
function saudacao(nome, idade, profissao) {
    console.log(`O ${nome} tem ${idade} anos de idade e trabalha como ${profissao}!`)
}

saudacao("João", 30, "Engenheiro");

//Criem uma função e retorne uma frase com 3 nomes de pessoas famosas.

function saudacao (nome1, nome2,nome3){
    console.log(`Sejam Bem-Vindos, ${nome1}, ${nome2}, ${nome3}`)
}

saudacao("Lady Gaga", "Rhaenyra Frota Frota", "RatãoRato")

//2.Função Anônima (Function Expression)
const saudacaoAnonima = function (nome) {
    return `Olá, ${nome}!`;
};

// 3. Arrow Function (Função de Seta)

const saudacaoArrow = (name) => `Olá, ${nome}`
console.log(saudacaoArrow("Pedro"));

const somaValor = (a, b) => `Soma: ${a} + ${b} =` + a +b;
console.log(somaValor(2, 3));

const subtraiValor = (a, b) => {
    return `Subtração: ${a} - ${b} =` + (a - b);
}

console.log(subtraiValor(5, 3));

// 4. Função como Método de Objeto

const pessoa = {

    nome: "Ana",

    falar: function () {
        return `Meu nome é ${this.nome}`;
    },
    andar: function () {
        return `Estou andando`;
    },
    cantar: function () {
        return `${this.nome} está cantando`;
    }
};

console.log(pessoa.falar());
console.log(pessoa.andar());
console.log(pessoa.cantar());


//Carro - funçoes: nome:, ano:, andar, parar, acelerar, desacelerar, buzinar, modelo

const carro = {

    marca: "Bentley",
    modelo: "EXP-10 Speed 6",
    ano: 2017,
    andar: function () {
        return `O carro da ${marca} andou`;
    },
    parar: function () {
        return `O carro da ${marca} parou`
    },
    acelerar: function () {
        return `O carro da ${marca} acelerou`
    },
    desacelerar: function () {
        return `O carro da ${marca} desacelerou`
    },
    modelo: function () {
        return `O modelo do carro da ${marca} é ${modelo}`
    },
    buzina: function () {
        return `O carro buzina`
    },
}