// Função principal para classificar o nível de um herói
function classificarHeroi() {
// Solicita o nome do herói ao usuário
const nome = prompt('Digite o nome do herói:');
// Solicita a quantidade de experiência (XP) e converte para número inteiro
const xp = parseInt(prompt('Digite a quantidade de experiência (XP):'));
// Variável para armazenar o nível do herói
let nivel;
// Verifica a quantidade de XP e define o nível do herói
if (xp < 1000) { // Nível Ferro se XP for menor que 1.000
    nivel = 'Ferro';
} else if (xp <= 2000) { // Nível Bronze se XP estiver entre 1.001 e 2.000
    nivel = 'Bronze';
} else if (xp <= 5000) { // Nível Prata se XP estiver entre 2.001 e 5.000
    nivel = 'Prata';
} else if (xp <= 7000) { // Nível Ouro se XP estiver entre 5.001 e 7.000
    nivel = 'Ouro';
} else if (xp <= 8000) { // Nível Platina se XP estiver entre 7.001 e 8.000
    nivel = 'Platina';
} else if (xp <= 9000) { // Nível Ascendente se XP estiver entre 8.001 e 9.000
    nivel = 'Ascendente';
} else if (xp <= 10000) { // Nível Imortal se XP estiver entre 9.001 e 10.000
    nivel = 'Imortal';
} else { // Nível Radiante se XP for maior ou igual a 10.001
    nivel = 'Radiante';
}
// Exibe o resultado no console
console.log(`O Herói de nome ${nome} está no nível de ${nivel}`);
}
// Executa a função
classificarHeroi();
