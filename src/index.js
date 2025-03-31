// Programa para classificar o nível de um herói baseado em sua experiência (XP)

// 1. Definindo as variáveis iniciais
// Vamos criar duas variáveis: uma para o nome do herói e outra para sua experiência
let nomeDoHeroi = "Célio Chaves"; // Você pode mudar o nome aqui
let xpDoHeroi = 9000; // Você pode alterar o valor de XP aqui

// 2. Criando a variável que vai armazenar o nível do herói
// Iniciamos com uma string vazia que será preenchida conforme as verificações
let nivelDoHeroi = "";

// 3. Verificando o nível do herói baseado em sua XP
// Usaremos uma estrutura de decisão (if-else) para isso

// Primeiro verificamos o menor nível (Ferro)
if (xpDoHeroi < 1000) {
    nivelDoHeroi = "Ferro";
} 
// Se não for Ferro, verificamos o próximo nível (Bronze)
else if (xpDoHeroi >= 1001 && xpDoHeroi <= 2000) {
    nivelDoHeroi = "Bronze";
} 
// Próximo nível (Prata)
else if (xpDoHeroi >= 2001 && xpDoHeroi <= 5000) {
    nivelDoHeroi = "Prata";
} 
// Próximo nível (Ouro)
else if (xpDoHeroi >= 5001 && xpDoHeroi <= 7000) {
    nivelDoHeroi = "Ouro";
} 
// Próximo nível (Platina)
else if (xpDoHeroi >= 7001 && xpDoHeroi <= 8000) {
    nivelDoHeroi = "Platina";
} 
// Próximo nível (Ascendente)
else if (xpDoHeroi >= 8001 && xpDoHeroi <= 9000) {
    nivelDoHeroi = "Ascendente"; // Note que há um pequeno erro de digitação aqui (deveria ser "Ascendente")
} 
// Próximo nível (Imortal)
else if (xpDoHeroi >= 9001 && xpDoHeroi <= 10000) {
    nivelDoHeroi = "Imortal";
} 
// Último nível possível (Radiante)
else {
    nivelDoHeroi = "Radiante";
}

// 4. Exibindo o resultado
// Vamos mostrar uma mensagem com o nome do herói e seu nível
console.log(`O Herói de nome ${nomeDoHeroi} está no nível de ${nivelDoHeroi}`);

// Fim do programa