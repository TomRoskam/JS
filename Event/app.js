window.addEventListener("load", init);

function init() {
    const submitButton = document.getElementById("submit-btn");
    submitButton.addEventListener("click", clickEventHandler);
}

function clickEventHandler(event) {
    event.preventDefault();
    const inputText = document.getElementById("textInput").value;
    if (inputText == "") {
        document.getElementById("text").innerHTML = "please enter some info";
    } else {
        document.getElementById("text").innerHTML = inputText;
    }
}

//plaatjes
const test1 = document.getElementById("container");
test1.addEventListener("click", clickEventHandlerPlaatje);


function clickEventHandlerPlaatje(event) {
    if (event.target.nodeName == "IMG") {
        console.log(event.target.nodeName)
    }
}

