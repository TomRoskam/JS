function giveMeSomeNiceName(gender) {
    if (gender == "male") {
        console.log("Jij heet Henk!");
    }
    else if (gender == "female") {
        console.log("Jij heet Jan!");
    }
    else {
        console.log("Je bent een nummer, geen persoon!");
    }
}

giveMeSomeNiceName("male");

console.log("--------------------");

function cats(numberOfCats) {

    let catNumber = "";

    for (let i = 0; i < numberOfCats; i++) {

        catNumber = catNumber + "🐱‍👤";

    }
    console.log(catNumber);
}

cats(10);

console.log("--------------------");

function facorial(num) {

    let sum = 1;

    for (num; num > 0; num--) {
        sum = num * sum;
    }
    console.log(sum);
}

facorial(5);

console.log("--------------------");

let firstNumber = 1;
let secondNumber = 1;

function fibonacci() {
    console.log(firstNumber);
    i = 0;
    while (i < 10) {
        secondNumber = firstNumber + secondNumber
        console.log(secondNumber);
        firstNumber = firstNumber + secondNumber
        console.log(firstNumber);
        i = i + 1;
    }
}

fibonacci ();

console.log("--------------------");

let x = 6;
let y = 7;
let z = x + y;

function hoistingwel () {
    console.log(z = x + y)
}

hoistingwel();

console.log("--------------------");

var i = 10;

function startTimer() {

    var countdownTimer = setInterval(function() {

        console.log(i);
        i = i - 1;

        if (i <= 0) {
            clearInterval(countdownTimer);
            console.log("Happy New Year");
        }

    }, 1000);
}

startTimer(); 

console.log("--------------------");

function hoistingniet () {  //dit werkt niet!
    console.log( c = a + b);
}

hoistingniet();
 
let a = 5;
let b = 3;
let c = a + b;