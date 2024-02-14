///
/*
Crie uma função que recebe como parâmetro a quantidade de vitórias e derrotas de um jogador,
depois disso retorne o resultado para uma variável, o saldo de Rankeadas deve ser feito através do calculo (vitórias - derrotas)

Se vitórias for menor do que 10 = Ferro
Se vitórias for entre 11 e 20 = Bronze
Se vitórias for entre 21 e 50 = Prata
Se vitórias for entre 51 e 80 = Ouro
Se vitórias for entre 81 e 90 = Diamante
Se vitórias for entre 91 e 100= Lendário
Se vitórias for maior ou igual a 101 = Imortal

## Saída

Ao final deve se exibir uma mensagem:
"O Herói tem de saldo de **{saldoVitorias}** está no nível de **{nivel}**"
*/
let saldoVitorias = vitoriaDerrota(25, 10) // as vitorias e derrotas 
let nivel = nivelPontos(saldoVitorias) // pega o valor resultado da subtração e consulta na função nivel 
console.log("=".repeat(58));
console.log("O herói tem saldo de: " + saldoVitorias+ " vitórias está no nível de: " + nivel) // imprime o valor total 
console.log("=".repeat(58));

function vitoriaDerrota (vitoria, derrota) {
    let quantidade = vitoria - derrota
    return quantidade
}
function nivelPontos(pontos) {
    let nivel = 0
    if (pontos < 10) {
        nivel = "Ferro"
    } else if (pontos <= 20) {
        nivel = "Bronze"
    } else if (pontos <= 50) {
        nivel = "Prata"
    } else if (pontos <= 80) {
        nivel = "Ouro"
    } else if (pontos <= 90) {
        nivel = "Diamante"
    } else if (pontos <= 100) {
        nivel = "Lendario"
    } else {
        nivel = "Imortal"
    }
    
    return nivel
}
