const vitorias = 120;
const derrotas = 20;
const resultado = calculadoraRankeada(vitorias, derrotas);

function calculadoraRankeada(vitorias, derrotas){
    const Rank = vitorias - derrotas;
    let nivel;

if (Rank <10 ){
    nivel ="Ferro";
} else if (Rank >= 11 && Rank <= 20) {
    nivel = "Bronze";
}else if (Rank >=21 && Rank <= 50){
    nivel = "Prata";
}else if (Rank>= 51 && Rank <=80){
    nivel = "Ouro";
}else if (Rank >=81 && Rank <=90){
    nivel = "Diamante";
}else if (Rank >=91 && Rank <=100){
    nivel = "Lendário";
}else{
    nivel = "Imortal";
}

 return {Rank, nivel};
}
console.log(`O Herói tem de saldo de ${resultado.Rank} está no nível de ${resultado.nivel}`);