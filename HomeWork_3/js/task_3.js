'use strict';

const discount = 0.5;

const products = [
    {
        id: 3,
        price: 200
    },
    {
        id: 4,
        price: 900
    },
    {
        id: 1,
        price: 1000
    }
];

for (let product of products) {
    product.price = product.price * discount;
    console.log(product.price);
}