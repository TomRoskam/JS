const productList = [
    'tandenborstel',
    'bakmeel',
    'wortels',
    'tandpasta',
    'krop sla',
    'maggi',
    'croky chips',
    'WC papier',
    'shampoo'
];

productList.push('frikandel broodjes');

productList.map(function(elem) {
    let newElement = 'product: + elem';
    return newElement;
});

console.table(productList);

productList.forEach(function(elem, index, myArray) {
   console.log('element', elem);
   console.log('index', index);
   console.log('array', myArray);

});

for (let index = 0; index < productList.length; index++) {
   const element = productList[index];
   console.log(`Op ${index} staat ${element}`);
}

let newProductsArray = [];


for (let index = 0; index < productList.length; index++) {
    const element = 'Products ' + index + ': ' +  productList[index];
    newProductsArray.push(element);
}

console.table(newProductsArray);

let newProductsArray2 = productList.map(function(element, index){
    const newElement = `product ${index + 1}: ${element}`;
    return newElement;
});

console.table(newProductsArray2);

console.log('----------------------');

const productPrices = [2.10, 4.99, 5.60, 0.40, 5.44, 7.33, 2.33, 2.49, 2.10];
let getal = 0;

for(let i = 0; i < productPrices.length; i++){
    getal = getal + productPrices[i];
}
console.log(getal);

console.log('----------------------');

const productPrices1 = [2.10, 4.99, 5.60, 0.40, 5.44, 7.33, 2.33, 2.49, 2.10];
let getal1 = 0;
let gemiddelde = 0;

for(let i = 0; i < productPrices1.length; i++){
    getal1 = getal1 + productPrices1[i];
    gemiddelde = getal1 / productPrices1.length;
}
console.log(gemiddelde);

console.log('----------------------');

const productPrices2 = [2.10, 4.99, 5.60, 0.40, 5.44, 7.33, 2.33, 2.49, 2.10];

console.log(Math.max.apply(Math, productPrices2));

console.log('----------------------');

const getallen = [2.10, 4.99, 5.60, 0.40, 5.44, 7.33, 2.33, 2.49, 2.10];

var random = Math.random (getallen);
console.log('nummer:' + random);

console.log('----------------------');

const allMyRecords = [
    ["The Who - Pinball Wizard", "Rolling Stones - Exile on main street", "Police - Message in a bottle"],
    ["De Dijk - Alle 40 Goed", "Het Goede Doel - Belgie", "Doe Maar - skunk"]
 ];

console.log(allMyRecords[0][0]);
console.log(allMyRecords[0][1]);
console.log(allMyRecords[0][2]);
console.log(allMyRecords[1][0]);
console.log(allMyRecords[1][1]);
console.log(allMyRecords[1][2]);

console.log('----------------------');

const lapRounds = [2.99,  3.00, 3.01, 4.01, 2.79, 2.88, 3.10, 4.12]; 

const filteredLapRoundsWithForLoop = function () {
    let newArray = [];
    for (let i = 0; i < lapRounds.length; i++) {
 
        if (lapRounds[i] < 4) {
            newArray.push(lapRounds[i]);
        }
    }
    return newArray;
 }
 
 let result = lapRounds.filter(function(value){  //Dit is veel minder code hierdoor kan er gemakkelijker mee gewerkt worden.
     return value  < 4; 
 });

 console.log(result);

