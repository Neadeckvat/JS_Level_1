'use strict';

/**
 * Функция создает сетку ячеек 9x9 из блоков div
 * @param {object} chessboard
 */
function createCells(chessboard) {
    for (let y = 0; y < 9; y++) { 
        for (let x = 0; x < 9; x++) {
            const chessboard_cell = document.createElement('div');
            chessboard.appendChild(chessboard_cell);
            chessboard_cell.setAttribute('class', 'chessboard_cell');
            chessboard_cell.setAttribute('data-y', y);
            chessboard_cell.setAttribute('data-x', x);
        }
    }
}

/**
 * Функция разукрашивает доску для шахмат
 * @param {object} chessboard
 */
function paintCells(chessboard) {
    for (let cell of chessboard.children) {
        const x = cell.getAttribute('data-x');
        const y = cell.getAttribute('data-y');
        if (x == 0 || y == 8) {
            continue;
        }
        if ((y % 2 != 0 && x % 2 == 0) || (y % 2 == 0 && x % 2 != 0)) {
            cell.classList.add('cell_white');
        } else {
            cell.classList.add('cell_brown');
        }
    }
}

/**
 * Функция добавляет цифры и буквы слева и снизу от поля соответственно
 * @param {object} chessboard
 */
function displayNumLett(chessboard) {
    let num = 8;
    const letters = ['A', 'B', 'C', 'D', 'E', 'F', 'G', 'H'];
    for (let cell of chessboard.children) {
        const x = cell.getAttribute('data-x');
        const y = cell.getAttribute('data-y');
        if (x == 0 && y != 8) {
            cell.innerHTML = num--;  
        }
        if (y == 8 && x != 0) {
           cell.innerHTML = letters.shift();
        }
    }
}

const chessboard = document.querySelector('.chessboard');
createCells(chessboard);
paintCells(chessboard);
displayNumLett(chessboard);