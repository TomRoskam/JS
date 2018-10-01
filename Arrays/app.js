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

console.table(productList);

//productList.forEach(function(elem, index, myArray) {
//    console.log('element', elem);
//    console.log('index', index);
//    console.log('array', myArray);

//});

for (let index = 0; index < productList.length; index++) {
    const element = productList[index];
    console.log(`Op ${index} staat ${element}`);
}
