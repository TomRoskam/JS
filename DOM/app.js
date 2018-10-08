const listItems = document.getElementsByTagName("li");
const firstItem = document.getElementById("item1");

firstItem.classList.add("standOut");

console.log(listItems);
console.log(firstItem);

let price = [
    {
        "name": "tandenborstel",
        "price": 0.99
    },
    {
        "name": "deoderant",
        "price": 7.99,
    },
    {
        "name": "bakmeel",
        "price": 0.79,
    },
    {
        "name": "wortels",
        "price": 2.99,
    }
]

console.log(price);

createMyAwesomeTable();

function createMyAwesomeTable() {
    const table = document.createElement("table");
    let Totaal = price[0].price + price[1].price + price[2].price + price[3].price;
    for (let i = 0; i < price.length; i++) {
        const tr = document.createElement("tr");
        const tdName = document.createElement("td");
        const tdPrice = document.createElement("td");
        const tdTotaal = document.createElement("td");
        tdName.innerText = price[i].name;
        tdPrice.innerText = price[i].price;
        tdTotaal.innerText = Totaal;
        tr.appendChild(tdName);
        tr.appendChild(tdPrice);
        tr.appendChild(tdTotaal);
        table.appendChild(tr);
    }
    const body = document.getElementById("body");
    body.appendChild(table);
}
