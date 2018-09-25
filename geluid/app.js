const makeASound = function (animal) {
    if (animal == "cat") {
        sound = "something!";

        var audio = new Audio();

        audio.addEventListener("canplaythrough", function () {
            this.play();
        });

        audio.src = "camel2.mp3";

    }
    else if (animal == "dog") {
        sound = "bark!";
    }
    console.log("This animal says : " + sound);
}

const handleAnimalSounds = function(func, animal) {
    func(animal);
}

handleAnimalSounds(makeASound, "cat");