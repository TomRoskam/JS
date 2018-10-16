// All global variables
imageArray = new Array(); //Array met plaatjes
imageArray[0] = "./assets/images/transformers-1.png"
imageArray[1] = "./assets/images/transformers-2.png"
imageArray[2] = "./assets/images/transformers-3.png"
imageArray[3] = "./assets/images/transformers-4.png"

var numbers = []; //lege array waarin nummers worden terug gestopt.
var k = 0; //het aantal clicks. Dat moet beginnen bij nul
var tries = 5; //een variabele voor het aantal pogingen

document.getElementById("score").innerHTML = "<h2>Pogingen over:"+ tries+"</h2>"; //het aantal pogingen wordt in de DOM gezet

function reload() {     //een functie aanmaken om de pagina te herladen. Dit komt later van pas wanneer je de plaatjes in de juiste volgorde hebt aangeklikt.
    location.reload();
}

function random() {     //een functie om de plaatjes willekeurig te rangschikken
    i = Math.floor((Math.random() * 4) + 0);
}

for (v = 0; v < 4; v++) {   //Een loop om de code in te korten. De plaatjes moeten namelijk 4x herhaald worden
    random();   //Er wordt een willekeurig getal gemaakt
    console.log(i); //controleren (debuggen) welk getal i is.
    console.log(numbers); //Controleren of de array nog leeg is.
    while (numbers.includes(i)) {   //Als numbers een willekeurig plaatje (i) bevat dan een nieuw willekeurig plaatje kiezen uit de array
        console.log("hallo");
        random();
    }
    numbers.push(i); //Plaatje in de array zetten
    sourcePic = imageArray[i]; //dit plaatje geef ik de variabele i
    //console.log(i);
    var img = document.createElement("img");    //een img element wordt gemaakt dat later in de DOM gezet kan worden.
    document.getElementById("images").appendChild(img); //plaatje wordt aan het img element toegevoegd en dat wordt samen in de DOM gezet
    img.src = sourcePic;    //hiermee wordt aangegeven dat de variabele img gelijk is aan de variabele imageArray[i] die samen weer gelijk zijn aan sourcePic.
    img.setAttribute("id", i); //het element img krijg het id i mee.
}


function checkTries(){
    if(tries == 0){ //als het aantal pogingen gelijk is aan 0 dan dit uitvoeren
        document.getElementById("score").innerHTML = "<h2>Je hebt verloren, helaas.</h2>";
        setTimeout(reload, 1000);

    }
    else { //anders dit
        document.getElementById("score").innerHTML = "<h2>Pogingen over:"+ tries+"</h2>";
        console.log(tries);
    }
}

document.getElementById(0).onclick = function () { //wanneer de click gelijk is aan 0. dan de fucntie uitvoeren
    if (k == 0) { //als het eerste plaatje uit de array gelijk is aan 0 dan dit.
        var img0 = document.getElementById(0);
        img0.classList.add("border-green");
        k = k + 1
    }
    else { //Anders dit uitvoeren
        console.log("fout");
    }
    tries = tries - 1; //Het aantal pogingen gaat -1
    console.log(tries);
    checkTries(); //Er wordt gecontroleerd of het aantal pogingen nog niet op is.
}

document.getElementById(1).onclick = function () {//wanneer de click gelijk is aan 1. dan de fucntie uitvoeren
    if (k == 1) {//als het eerste plaatje uit de array gelijk is aan 1 dan dit.
        var img1 = document.getElementById(1);
        img1.classList.add("border-green");
        k = k + 1
    }
    else { //Anders dit uitvoeren
        console.log("fout");
    }
    tries = tries - 1;//Het aantal pogingen gaat -1
    console.log(tries);
    checkTries();//Er wordt gecontroleerd of het aantal pogingen nog niet op is.
}

document.getElementById(2).onclick = function () {//wanneer de click gelijk is aan 1. dan de fucntie uitvoeren
    if (k == 3) {//als het eerste plaatje uit de array gelijk is aan 1 dan dit.
        var img2 = document.getElementById(2);
        img2.classList.add("border-green");
        k = k + 1
    }
    else {//Anders dit uitvoeren
        console.log("fout");
    }
    tries = tries - 1;//Het aantal pogingen gaat -1
    console.log(tries);
    checkTries();//Er wordt gecontroleerd of het aantal pogingen nog niet op is.
}

document.getElementById(3).onclick = function () {//wanneer de click gelijk is aan 1. dan de fucntie uitvoeren
    if (k == 2) {//als het eerste plaatje uit de array gelijk is aan 1 dan dit.
        var img3 = document.getElementById(3);
        img3.classList.add("border-green");
        k = k + 1
    }
    else {//Anders dit uitvoeren
        console.log("fout");
    }
    tries = tries - 1;//Het aantal pogingen gaat -1
    console.log(tries);
    checkTries();//Er wordt gecontroleerd of het aantal pogingen nog niet op is.
}