//opdracht1
let course = document.getElementsByTagName("td");
console.log(course[1].innerText);

//Om aan te geven of de waardes van de course een Number zijn
function stringOfNUmber() {
    if (typeof(course[1]) == "String") {
        console.log("Dit is tekst");
    } else if (typeof(course[1] == "Number")) {
        console.log("Dit is een cijfer");
    } else {
        console.log("Dit herken ik niet");
    }
}

stringOfNUmber(); //output is Number

console.log(course[3].innerText);

function stringOfNUmber() {
    if (typeof(course[3]) == "string") {
        console.log("Dit is tekst");
    } else if (typeof(course[3] == "Number")) {
        console.log("Dit is een cijfer");
    } else {
        console.log("Dit herken ik niet");
    }
}

stringOfNUmber();

console.log(course[5].innerText);

function stringOfNUmber() {
    if (typeof(course[5]) == "string") {
        console.log("Dit is tekst");
    } else if (typeof(course[5] == "Number")) {
        console.log("Dit is een cijfer");
    } else {
        console.log("Dit herken ik niet");
    }
}

stringOfNUmber();

console.log(course[7].innerText);

function stringOfNUmber() {
    if (typeof(course[7]) == "string") {
        console.log("Dit is tekst");
    } else if (typeof(course[7] == "Number")) {
        console.log("Dit is een cijfer");
    } else {
        console.log("Dit herken ik niet");
    }
}

stringOfNUmber();

let totaal = parseInt(course[1].innerText) + parseInt(course[3].innerText) + parseInt(course[5].innerText)+ parseInt(course[7].innerText);
console.log(totaal);
let gemiddelde = totaal/4;
console.log(gemiddelde);

function gemiddeldeToevoegen() {
    let table = document.getElementById("cijfers");
    let row = table.insertRow(4);
    let cell1 = row.insertCell(0);
    let cell2 = row.insertCell(1);
    cell1.innerHTML = "gemiddelde";
    cell2.innerHTML = gemiddelde;
}

gemiddeldeToevoegen();

//opdracht2
const kleur = document.getElementById("course");
kleur.classList.add("kleuren");
console.log(kleur);

//opdracht3
function plaatje(src, width, height) {
    let img = document.createElement("img");
    img.src = src;
    img.width = width;
    img.height = height;
    document.body.appendChild(img);
}

plaatje("test.png", 100, 100);