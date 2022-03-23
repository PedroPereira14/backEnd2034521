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
/*console.log(str);*/

//ex3
function countVogals(str){
    var count = 0;
    for (var i = 0; i < str.length; i++){
        if (str[i] == "a" || str[i] == "e" || str[i] == "i" || str[i] == "o" || str[i] == "u")
            count++;
    }
    return count;     
}

var str="ola Mundo";
//console.log("Tem", countVogals(str), "vogais.");

//ex 4

function countLetter(str, letter){
    var lowercase = 0
    for(var i = 0; i < str.length; i++){
        if (str[i] == letter)
            lowercase++;
    }
return lowercase;
}
//console.log(countLetter("Ola Mundo","a"));

//ex 5
//1hora = 3600 seg
function worktime(he, me, se, hs, ms, ss){
    var totalTimeES = he * 3600 + me * 60 + se;
    var totalTimeSS = hs * 3600 + ms * 60 + ss;

    var diffInSeconds = totalTimeSS - totalTimeES;
    console.log(diffInSeconds);

    var hours = Math.floor((diffInSeconds / 3600));

    var remainderHours = diffInSeconds % 3600;

    var minutes = Math.floor((remainderHours / 60));
    
    var seconds = remainderHours % 60;

    console.log("Trabalhou:", +hours, "h:", + minutes, "m:", +seconds, "s");
    
}
//worktime(8, 0, 0, 9, 1, 1);

//ex6
function rectangle(width, height){
    
    var line = "";
    for(var i = 0; i < width ; i++){
        line += "*";
    }
    for(var j = 0; j < height; j++){
        console.log(line);
    }
}
//rectangle(3, 3);

//ex7
function triangle(height){

    var line = "*";
    for (let i = 0; i < height; i++){
        console.log(line)
        line += "*";
    }
}
//triangle(4);

//ex8 
function box(width, height){
    
    for (i = 0; i < height; i++){
        var line="";
        for (let j = 0; j < width; j++){
            if(i == 0 || i == height - 1){
                line += "*";
            }
            else{
                if(j == 0 || j == width -1){
                    line+= "*";
                }
                else{
                    line += " ";
                }
            }
        }
        console.log(line)
    }    
}

//box(10, 10);

//ex9

var student1 = {
    number: 999,
    grade: 19
};
var student2 = {
    number: 1001,
    grade: 15
};

for (let i = 0; i < 10; i++){
    var student
}

var students = [];

students.push(student1);
students.push(student2);

function listStudents(students){
    for (let i = 0; i < students.length; i++) {
        var student = students[i];
        console.log("Number: " + student.number + ", Grade: " + student.grade)
        
    }
}

function bestGrade(students) {
    var max = students[0].grade;
    for (let i = 0; i < students.length; i++) {
        if (students[i].grade > max){
            max = students[i].grade;
            bestStudent = students[i].number;
        }
    }
    console.log("Best Student is "+ bestStudent + " with: " + max)    
}

function worstGrade(students){
    var min = students[0].grade;
    for (let i = 0; i < students.length; i++) {
        if (students[i].grade <= min){
            min = students[i].grade;
            worstStudent = students[i].number;
        }
    }
    console.log("Worst Student is "+ worstStudent + " with: " + min) 
}

function averageGrade(students){ 
    var med = 0;
    for (let i = 0; i < students.length; i++) {
        med += students[i].grade;
    }
    med /= students.length;
return med       
}
function closestToAverage(students){
    var avg = average(students);
    var student = students[0];
    var aux = Math.abs(avg-students[i].grade);
    for (var i=1; i<students.length; i++){
        var diff = Math.abs (avg = students.grade);
        if (diff < aux){
            aux = diff;
            student = students[i];
        }
    }
    return student    
}

function negativeGrade(students){
    var nega = 0;
    for (let i = 0; i < students.length; i++) {
        if(students[i].grade < 9.5){
            nega++;
        }
        else{}
    }
     console.log("The number of negatives grades on the class are: " + nega)
}

function positiveGrade(students){
    var posi = 0;
    for (let i = 0; i < students.length; i++) {
        if(students[i].grade > 9.5){
            posi++;
        }
        else{}
    }
     console.log("The number of positive grades on the class are: " + posi)
}
function main(students, option){
    switch (option) {
        case 1:
            listStudents(students);
            break;
        case 2:
            bestGrade(students);
            break;
        case 3:
            worstGrade(students);
            break;
        case 4:
            AverageGrade(students);
            break;
        case 5:
            negativeGrade(students);
            break;
        case 6:
            positiveGrade(students);
            break;    

        default:
            break;
    }
}
main(students, 6);