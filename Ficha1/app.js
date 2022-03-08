//nota teorica 30% e nota pratica 70%
//se for <9 é reprovado

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

finalgrade(12,13);
