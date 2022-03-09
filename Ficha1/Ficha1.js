//nota teorica 30% e nota pratica 70%
//se for <9 é reprovado

//ex 5

function finalgrade(practice, theoretical){
    var final = practice * 0.7 + theoretical * 0.3;

    console.log("A sua nota foi " + final )

    if (final < 9.5) {
    console.log("Reprovado");
    }
    else  {
    console.log("Aprovado");
    }
}

/*finalgrade(12,13);*/

//ex 6
function month(NumMonth){
    if (NumMonth == 1){
    console.log("Janeiro")
    }
    else if (NumMonth == 2){
    console.log("Fevereiro")
    }
    else if (NumMonth == 3){
    console.log("Março")
    }
    else if (NumMonth == 4){
    console.log("Abril")    
    }
    else if (NumMonth == 5){
    console.log("Maio")
    }
    else if (NumMonth == 6){
    console.log("Junho")
    }
    else if (NumMonth == 7){
    console.log("Julho")
    }
    else if (NumMonth == 8){
    console.log("Agosto")
    }
    else if (NumMonth == 9){
    console.log("Setembro")
    }
    else if (NumMonth == 10){
    console.log("Outubro")
    }
    else if (NumMonth == 11){
    console.log("Novembro")
    }
    else if (NumMonth == 12){
    console.log("Dezembro")
    }
    else {
        console.log("Não existe")
    }
}
/*month(13)*/

//ex7
function result(sum1, op, sum2){
    if (op == '+') {
        console.log("A soma é igual a ", sum1 + sum2);
        return sum1 + sum2;
    }
    else if (op == '-') {
        console.log("A subtração foi ", sum1 - sum2);
        return sum1 - sum2;
    }
    else if (op == '*') {
        console.log("A subtração foi ", sum1 * sum2);
        return sum1 * sum2;
    }
    else if (op == '/') {
        console.log("A divisão foi ", sum1 / sum2);
        return sum1 / sum2;
    }
}
 /*result(12, '+', 13);
 result(12, '-', 13);
 result(12, '*', 13);
 result(12, '/', 13);*/

 //ex 8

var y = 0
function multiples(multiple, limit){
    var result = 0;
    while (result < limit) {
        result+=multiple;
        console.log(result);
    }
}

/*multiples(5, 20);*/

//ex 9
/*function somatotal() {
    var soma = 0;
    for(var i=0, i <= 100, i++){
    soma += i,
    }
    return soma 
}*/

//ex 11

function min(array) {
    var minV = array[0];
    for(let i = 1; i < array.legth; i++) {
        if(array[i] < minV){
            minV = array[i];
        }
    }
    return minV;
}
function max(array) {
    var maxV = array[0];
    for(let i = 1; i < array.legth; i++) {
        if(array[i] > maxV){
            maxV = array[i];
        }
    }
    return maxV;
}

max(array);
min(array);

var array = [7, 9, 11, 2, 3];