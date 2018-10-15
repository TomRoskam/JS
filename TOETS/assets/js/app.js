imageArray = new Array(); //Array met plaatjes
imageArray[0] = "./assets/images/bat.jpg"
imageArray[1] = "./assets/images/bug.jpg"
imageArray[2] = "./assets/images/cat.jpg"
imageArray[3] = "./assets/images/dog.jpg"
imageArray[4] = "./assets/images/fly.jpg"
imageArray[5] = "./assets/images/frog.jpg"
imageArray[6] = "./assets/images/monkey.jpg"
imageArray[7] = "./assets/images/mouse.jpg"
imageArray[8] = "./assets/images/spider.jpg"

console.log(imageArray);

var randomImage = document.getElementById("random-img"); //wordt een willekeurig plaatje aan "random-img" toegevoegd
randomImage.src = imageArray[Math.floor(Math.random() * imageArray.length)];

var arr = []

while (arr.length < 9) { //Een plaatje kan niet 2x voor komen in het img-grid

    var imageAtRandom = imageArray[Math.floor(Math.random() * imageArray.length)];
    if (arr.indexOf(imageAtRandom) > - 1) continue;
    arr[arr.length] = imageAtRandom;

    var animal = document.createElement("img");
    animal.src = imageAtRandom;

    var animalAdd = document.getElementById("img-grid");
    animalAdd.appendChild(animal);

    animal.addEventListener("click", clickEventHandler);

    function clickEventHandler(event) {
        event.preventDefault();
        if (randomImage === imageAtRandom) {
            console.log("GOED")
        } else if (randomImage !== imageAtRandom) {
            console.log("FOUT")
        } else {
            console.log("ER IS IETS GAANDE")
        }
    }
}

console.log(arr);
console.log(randomImage)
console.log(imageAtRandom)



