window.addEventListener("load", init);

function init() {
//addeventlistener
const button = document.getElementById("submit");
button.addEventListener("click", clickEventHandler);
}

function clickEventHandler(event){
   console.log(event);
   console.log(input);
}
