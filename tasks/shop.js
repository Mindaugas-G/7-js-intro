console.clear();

const valiuta = 'EUR';
const prekes = [
    {
        name: 'Bananas',
        price: 2,
        inStock: 10
    },
    {
        name: 'Agurkas',
        price: 3,
        inStock: 10
    },
    {
        name: 'Pomidoras',
        price: 1.57,
        inStock: 30
    },
];

function shop(products, currency) {
let total = 0;
console.log('MUSU PARDUOTUVE:');
console.log('----------------');

for (let i = 0; i < products.length;  i++) {
    console.log(` $[1] ${products[i].name} kainuoja ${products[i].price.toFixed(2)} ${currency} ir turime ju ${products[i].inStock}. `);
        total += products[i].price * products[i].inStock;
}
        console.log('----------------');
        console.log(`Viso asortimento kaina: ${total} ${currency}`); 
}

shop(prekes, valiuta);

// MUSU PARDUOTUVE:
// ----------------
// 1) Bananas kainuoja 2.00 EUR ir turime ju 10 vienetu.
// 2) Agurkas kainuoja 3.00 EUR ir turime ju 10 vienetu.
// 3) Pomidoras kainuoja 1.57 EUR ir turime ju 30 vienetu.
// ----------------
// Viso asortimento kaina: 97.10 EUR.

