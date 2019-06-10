'use strict';

const products_ = [
    {
        id: 3,
        price: 127,
        photos: [
            '1.jpg',
            '2.jpg'
        ]
    },
    {
        id: 5,
        price: 499
    },
    {
        id: 10,
        price: 26,
        photos: [
            '3.jpg'
        ]
    },
    {
        id: 8,
        price: 78
    }
];

const products_photos_list = products_.filter(product => 'photos' in product);
console.log(products_photos_list);

const products_price_sort_list = products_.sort(function (a, b) {
    if (a.price > b.price) {
        return 1;
    }
    if (a.price < b.price) {
        return -1;
    }
    return 0;  
});
    
console.log(products_price_sort_list);