'use strict';

const btns = document.querySelectorAll('.product_btn');
const imgs = document.querySelectorAll('.product_img');
const txts = document.querySelectorAll('.product_text');

for (let num = 0; num < btns.length; num++) {
    btns[num].addEventListener('click', function(event) {
        switch (btns[num].textContent) {
            case 'Отмена':
                btns[num].textContent = 'Подробнее';
                txts[num].style.display = 'none';
                imgs[num].style.display = 'block';
                break;
            case 'Подробнее':
                btns[num].textContent = 'Отмена';
                imgs[num].style.display = 'none';
                txts[num].style.display = 'block';
                break;
        }
    });
}