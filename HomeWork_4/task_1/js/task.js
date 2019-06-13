'use strict';

function createObject(num) {
    if (Number.isInteger(+num) && (num.length <= 3) && (num != '')) {
        if (num[0] && typeof +num == 'number') {
            this.units = +num[0];
        }
        if (num[1] && typeof +num == 'number') {
            this.tens = +num[1];
        } else {
            this.tens = 0;
        }
        if (num[2] && typeof +num == 'number') {
            this.hundreds = +num[2];
        } else {
            this.hundreds = 0;
        }
    }
    else {
        console.log('Вы ввели неверное число');
    }
}

const number = prompt('Введите целое число от 0 до 999');
const number_object = new createObject(number);
console.log(number_object);