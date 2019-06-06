'use strict';

/**
 * Функция сложения двух чисел
 * @param {number} x
 * @param {number} y
 * @returns {number}
 */
function sum(x, y) {
    return x + y;
}

/**
 * Функция вычитания из первого числа второго
 * @param {number} x
 * @param {number} y
 * @returns {number}
 */
function diff(x, y) {
    return x - y;
}

/**
 * Функция умножения двух чисел
 * @param {number} x
 * @param {number} y
 * @returns {number}
 */
function mult(x, y) {
    return x * y;
}

/**
 * Функция деления первого числа на второе
 * @param {number} x
 * @param {number} y
 * @returns {number}
 */
function div(x, y) {
    return x / y;
}

/**
 * Функция выбора операции над числами
 * @param {string} operation_name
 * @returns {number}
 */
let getOperation = function (operation_name) {
    switch (operation_name.toLowerCase()) {
        case 'сложение':
            return sum(a, b);
        case 'вычитание':
            return diff(a, b);
        case 'умножение':
            return mult(a, b);
        case 'деление':
            return div(a, b);
        default:
            return 'Неправильная команда';
    }
}

const a = +prompt('Введите первое число');
const b = +prompt('Введите второе число');
const operation = prompt('Введите: сложение / вычитание / умножение / деление');

alert(`Ответ: ${getOperation(operation)}`);


