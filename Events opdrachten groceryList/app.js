window.addEventListener("load", init);

function init() {
    const submitButton = document.getElementById("submit-btn");
    submitButton.addEventListener("click", clickEventHandler);
}

var totaal = 0;

function clickEventHandler(event) {
    event.preventDefault();
    var textInput = document.getElementById("textInput").value;
    var prijsInput = document.getElementById("prijsInput").value;


    var table = document.getElementById("nieuweBoodschappen");
    var row = table.insertRow(4);
    var cell1 = row.insertCell(0);
    var cell2 = row.insertCell(1);
    cell1.innerHTML = textInput;
    cell2.innerHTML = prijsInput;

    prijsInput = parseFloat(prijsInput);
    totaal = parseFloat(totaal + prijsInput);
    console.log(totaal);
    document.getElementById("prijsTotaal").innerHTML = "totaalprijs = " + " " + totaal;

    var cell3 = row.insertCell(2);
    cell3.id = "idTest";
    var verwijderButton = document.createElement("BUTTON");
    var t = document.createElement("verwijder");
    verwijderButton.appendChild(t);
    document.getElementById("idTest").appendChild(verwijderButton);

    document.getElementById("idTest").addEventListener("click", verwijderFuctie);

    function verwijderFuctie() {
        totaal = parseFloat(totaal - prijsInput);
        document.getElementById("prijsTotaal").innerHTML = "totaalprijs = " + " " + totaal;

        for (let i = 0; i <= 3; i++) {
            let table = document.getElementById("nieuweBoodschappen");
            let cell1 = row.deleteCell(0);
        }
    }
}
