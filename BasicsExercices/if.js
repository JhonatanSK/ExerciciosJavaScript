let nota = prompt("Qual foi a nota do aluno?")

if (isNaN(nota)){
    alert("ERRO: VALOR INVÁLIDO;")
} else if (nota < 5){
    alert("Aluno reprovado");
} else if (nota <= 6){
    alert("Aluno fará recupuração");
} else {
    alert("Aluno aprovado");
}