'use strict';

/**
 * Функция применяет анимацию перехода в зависимости от нажатой кнопки
 * @param {object} img
 * @param {string} btn_class
 */
function moveImg(img, btn_class) {
    console.log(btn_class)
    switch (btn_class) {
        case 'btn_right':
            img.classList.add('magictime', 'spaceOutRight');
        case 'btn_left':
            img.classList.add('magictime', 'spaceOutLeft');
    }
}

/**
 * Функция очищает классы картинок
 * @param {object} img
 */
function delMoveImg(img) {
    img.classList.remove('magictime', 'spaceOutRight');
    img.classList.remove('magictime', 'spaceOutLeft');
    img.classList.remove('display_img_now');
    img.classList.remove('display_img_next');
}

/**
 * Функция определяет и возвращает отображаемую картинку
 * @param {object} num_money
 * @returns {object}
 */
function findImgNow(img_list) {
    for (let img_num in img_list) {
        if (img_list[img_num].hasAttribute('data-value') && img_list[img_num].getAttribute('data-value') == 'now') {
            return img_list[img_num];
        }
    }
}

/**
 * Функция определяет и возвращает номер отображаемой картинки 
 * @param {object} num_money
 * @returns {string}
 */
function findNumImgNow(img_now) {
    for (let img_num in img_list) {
        if (img_list[img_num] == img_now) {
           return String(+img_num);
        }
    }
}

/**
 * Функция определяет и возвращает номер следующей картинки 
 * @param {object} num_money
 * @returns {string}
 */
function findNumImgNext(num, list, btn_class) {
    switch (btn_class) {
        case 'btn_left':
            if (!(num > 0)) {
                return String(list.length - 1);
            }
            return String(--num);
        case 'btn_right':
            if (!(num < list.length - 1)) {
                return '0';
            }
            return String(++num);
    }
}

/**
 * Функция определяет и возвращает номер предыдущей картинки 
 * @param {object} num_money
 * @returns {string}
 */
function findNumImgPast(num, list, btn_class) {
    switch (btn_class) {
        case 'btn_left':
            if (!(num < list.length - 1)) {
                return '0';
            }
            return String(++num);
        case 'btn_right':
            if (!(num > 0)) {
                return String(list.length - 1);
            }
            return String(--num);
    }
}

/**
 * Функция осуществляет анимированное перелистывание картинки
 * @param {object} btn_class
 * @param {object} img_list
 */
function replaceImg(btn_class, img_list) {
    const img_now = findImgNow(img_list);
    const num_img_now = findNumImgNow(img_now, img_list);
    const num_img_next = findNumImgNext(num_img_now, img_list, btn_class);
    const num_img_past = findNumImgPast(num_img_now, img_list, btn_class);
    const img_next = img_list[num_img_next];
    const img_past = img_list[num_img_past];
    
    delMoveImg(img_now);
    delMoveImg(img_past);
    delMoveImg(img_next);
    
    img_now.classList.add('display_img_now');
    img_next.classList.add('display_img_next');
    img_now.removeAttribute('data-value', 'now');
    img_next.setAttribute('data-value', 'now');
    
    moveImg(img_now, btn_class);
}


const img_list = document.querySelectorAll('.carousel_img');
const btn_right = document.querySelector('.btn_right');
const btn_left = document.querySelector('.btn_left');

img_list[0].setAttribute('data-value', 'now');
img_list[0].classList.add('display_img_now');

btn_right.addEventListener('click', function(event) {
    const btn_class = this.classList[1];
    replaceImg(btn_class, img_list);
});

btn_left.addEventListener('click', function(event) {
    const btn_class = this.classList[1];
    replaceImg(btn_class, img_list);
});