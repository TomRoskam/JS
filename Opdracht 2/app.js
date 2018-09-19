lengte = 1.84;
gewicht = 72;

a = lengte*lengte;
b = Math.round((gewicht/a)*10)/10;

console.log(b);

if (b <= 18.5) {
    console.log("Je hebt ondergewicht");
} 

else if (b >= 18.5 && b <= 24.9) {
    console.log("Je hebt een goed gewicht");
}

else if (b >= 25 && b <= 29.9) {
    console.log("Je hebt overgewicht");
}

else if (b >= 30) {
    console.log("Je hebt obesitas")
}

else {
    console.log ("Je hebt geen bmi");
}