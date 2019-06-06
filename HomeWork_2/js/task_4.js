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

let a = +prompt('Введите первое число');
let b = +prompt('Введите второе число');

alert(`${a} + ${b} = ${sum(a, b)}`);
alert(`${a} - ${b} = ${diff(a, b)}`);
alert(`${a} * ${b} = ${mult(a, b)}`);
alert(`${a} / ${b} = ${div(a, b)}`);