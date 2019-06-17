'use strict';

const btn = document.querySelector('.btn');

function showBlock(metod) {
    const selector = document.querySelector('.modal_window');
    selector.classList.add('magictime', metod);
}

function delBlock(metod) {
    const selector = document.querySelector('.modal_window');
    selector.classList.remove('magictime', metod);
}

btn.addEventListener('click', function(event) {
    switch (btn.textContent) {
        case 'Убрать':
            btn.textContent = 'Показать';
            delBlock('spaceInLeft');
            showBlock('spaceOutRight');
            break;
        case 'Показать':
            btn.textContent = 'Убрать';
            delBlock('spaceOutRight');
            showBlock('spaceInLeft');
            break;
    }
});