'use strict';

/**
 * Функция находит окончания для слова 'рубль'
 * @param {number} num_money
 * @returns {string}
 */
function findDeclension(num_money) {
    num_money = String(num_money);
    let num_money_end = num_money[num_money.length - 1];
    if (num_money[num_money.length - 2] == '1') {
        return 'рублей';
    }
    if (((5 <= +num_money_end) && (+num_money_end <= 9)) || num_money_end == '0') {
        return 'рублей';
    }
    if (num_money_end == '1') {
        return 'рубль';
    }
    if ((2 <= +num_money_end) && (+num_money_end <= 4)) {
        return 'рубля';
    }
}

const money = +prompt('Какую суммы Вы хотите внести на счет?');
const rub = findDeclension(money);

alert(`Ваша сумма в ${money} ${rub} успешно зачислена`);