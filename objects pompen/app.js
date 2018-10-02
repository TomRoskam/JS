let me = {
    name: "Tom Roskam",
    age: "18",
    previousDiploma: "HAVO",
    flauw: {
        array: [
            1, 2, 3
        ]
    }
}

me.taal = "Nederlands";
me.vervoersmiddel = ["auto", "4 wielen"];
me.dieren = ["hond", "kat", "kikker", "aap", "giraffe", "olifant"];
console.table(me);

function zin() {
    console.log(`Mijn favoriete vervoersmiddel is de ${me.vervoersmiddel[0]} en die heeft ${me.vervoersmiddel[1]}.`);
}

function dierennamen() {
    aantal = me.dieren.length;

    for (let i = 0; i < me.dieren.length; i++) {
        console.log(`${me.dieren[i]}`);
    }
}

me.favvervoer = zin();
me.namenvandieren = dierennamen();

console.table(me);      