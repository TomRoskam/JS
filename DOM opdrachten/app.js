//opdracht1
let c1 = document.getElementsByTagName("td");

console.log(c1[1].innerText);
console.log(c1[3].innerText);
console.log(c1[5].innerText);
console.log(c1[7].innerText);


totaal = totaalc1(c1[1].innerText) + " " + c1[3].innerText + " " +  c1[5].innerText + " " +  c1[7].innerText;
console.log(totaal);

console.log(totaalc1);




//opdracht2
const kleur = document.getElementById("course");
kleur.classList.add("kleuren");
console.log(kleur);

//opdracht3
function plaatje(src, width, height) {
    let img = document.createElement("img");
    img.src = src;
    img.width = width;
    img.height = height;
    document.body.appendChild(img);
}

plaatje("test.png", 100, 100);