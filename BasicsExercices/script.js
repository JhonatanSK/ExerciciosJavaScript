let idade = prompt("Quantos anos você tem?");
let emprestimo = prompt("Quanto você quer emprestado?");
let salario = prompt("Quanto você recebe por mês?");
let parcelas = prompt("Quantas parcelas voce Quer?");

if (idade >= 22 && idade <=55) {
    if (emprestimo >= 1000){
        if (emprestimo <= 15*salario){
            if (parcelas >=3 && parcelas <=20 ){
                alert("Emprestimo aprovado!");   
            }else{
                alert("Emprestimo reprovado");
            }
        }else{
            alert("Reprovado por salario insuficiente");
        }
        
    }else{ 
        alert("Valor do emprestimo deve ser a partir de 1000 reais");
    }
}else{
    alert("A idade tem que estar entre 22 e 55 anos.");
}

