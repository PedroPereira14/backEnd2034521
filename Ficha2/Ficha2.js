//ex1
function imc(peso, altura){
    var resultado = (peso/Math.pow(altura,2));
    if (resultado < 18.5) {
        return"É abaixo do peso.";
    }
    else if (18,5 < resultado && resultado < 25) {
        return"Está no peso normal.";
    }
    else if (25 < resultado && resultado < 30) {
        return"Está acima do peso.";
    }
    else {
        return"Está obeso.";
    }
}

var final = imc(120, 1.68);
/*console.log(final);*/

//ex2
function reverse(str){
    var splittedStr = str.split(" ");
    var reversedStr = "";
    for (let j = 0; j < splittedStr.length; j++){
        var word = splittedStr[j];
        for (var i = word.length - 1; i >= 0; i--) {
            reversedStr += word[i];
        }
    }
    return reversedStr; 

}

var str = reverse("Hoje é Domingo");
console.log(str);