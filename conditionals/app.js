let cijfer = 9;

if (cijfer < 6) {
    console.log("Je hebt een onvoldoende");
}

else if (cijfer >= 6 && cijfer < 6.9) {
    console.log("Je hebt een voldoende");
}

else if (cijfer >= 7 && cijfer <= 9) {
    console.log("Je hebt een goed");
}

else {
    console.log("Je hebt een uitmuntend");
}

let grade = 10;

switch (true) {

    case grade < 6:
        console.log("Je hebt een onvoldoende");
        break;
    case grade >= 6 && grade < 7:
        console.log("Je hebt een voldoende");
        break;
    case grade >= 7 && grade <=9:
        console.log("Je hebt een goed");
        break;
    case grade > 9:
        console.log("Je hebt een uitmuntend");
        break;
    default:
        console.log("Dit getal herken ik niet ;-)");
}
