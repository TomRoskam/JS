const knop = document.getElementById("knop");
knop.addEventListener("click", clickEventHandler);
i = 0;

function clickEventHandler(event) {
    i = i + 1;
    console.log(i);
    document.getElementById("aantal").innerHTML = i;

    if( i == 10) {
        console.log("je zit tussen de 10 en de 20");
        let element = document.getElementById("knop");
        element.classList.remove("grootte1");
        element.classList.add("grootte2");
    }
    if (i == 20) {
        console.log("je zit tussen de 10 en de 20");
        let element = document.getElementById("knop");
        element.classList.remove("grootte2");
        element.classList.add("grootte3");
    }
    if (i == 30) {
        console.log("je zit tussen de 10 en de 20");
        let element = document.getElementById("knop");
        element.classList.remove("grootte3");
        element.classList.add("grootte4");
    }
}