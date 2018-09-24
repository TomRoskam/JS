i = 0;
while(i<10) {
    i++;
    if (i % 4 == 0) {
        console.log(i, "deelbaar door 4");
    }

    else {
        console.log(i, "niet deelbaar 4");
    } 
}

console.log("---------------------------");



let firstNumber = 1;
let secondNumber = 1;
console.log(firstNumber);
i = 0;
while (i < 10){
    secondNumber = firstNumber + secondNumber
    console.log(secondNumber);
    firstNumber = firstNumber + secondNumber
    console.log(firstNumber);
    i = i + 1;
}


console.log("---------------------------");

let numbers = [2, 4, 8, 9, 12, 13];
let getal = 0;

for(let i = 0; i <= 5; i++){
    getal = getal + numbers[i];
}
console.log(getal);

console.log("---------------------------");

