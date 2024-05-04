function saudacao(nome) {
    saudacao = `Boas vindas, ${nome}`;
    return saudacao;
}

function maiorIdade(idade) {
    if (idade >= 18){
        return "Parabens! Você é maior de idade"
    }else {
        return "Você é menor de idade"
    }
}

function maiorNumero(num1, num2, num3){
    if(num1 >= num2 && num1 >= num3){
        return num1;
    }
    if(num2 >= num1 && num2 >= num3){
        return num2;
    }
    return num3;

}

console.log(saudacao("Matheus"));
console.log(maiorIdade(18));
console.log(maiorIdade(17));
console.log(maiorNumero(1, 2, 3));