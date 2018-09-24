i = 0;
while (i < 10) {
    i++;
    console.log(i);
}

maandag = "Het is maandag!";

x = maandag.length
while (x >= 0) {
    x--;
    console.log(maandag.charAt(x));
}

let myName = "Regentor";
let reversedName = "";
let counter = myName.length;

while (counter > 0) {
    reversedName += myName[counter - 1];
    console.log(reversedName);
    counter--;
}

let z = 0;

for (let z = 1; z < 11; z++) {
    console.log(z);
}

bericht = "Het is maandag vandaag!";
q = bericht.length

for (let s = 0; s < q; s++) {
    console.log(bericht.charAt(s));
}


for (let w = 1; w <= 25; w++) {
    if (w % 3 == 0) {
        console.log(w, "deelbaar door 3");
    }

    else {
        console.log(w, "niet deelbaar 3");
    }
}

