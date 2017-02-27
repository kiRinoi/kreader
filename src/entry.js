import './css/kstyle.css';
import './css/main.css';
import './bookmark/book.js';
import list from './style/list.js';
import setHeight from './style/setheight.js';
import readStyle from './reader/readstyle.js'

const toggle = (() => {
    let setting = document.querySelector('.setting');
    let readlist = document.querySelector('.readersetting');
    setting.addEventListener('click', () => list(readlist));
})()

const setH = (() => {
    let p = document.querySelector('pre');
    setHeight(p);
})()

const txtStyle = (() => {
    let body = document.querySelector('body');
    let bg = localStorage.background || '#faf9f3';
    let color = localStorage.color || '#333'; 
    let font = localStorage.font || '宋体';
    let size = localStorage.size || 16;
    let colorList = document.querySelectorAll('.color > dd');
    let fontList = document.querySelectorAll('.font > dd');
    let sizeList = document.querySelectorAll('.size > dd');
    const bookStyle = new readStyle(bg, color, font, size, body);
    bookStyle.loadStyle();
    bookStyle.changeColor(colorList);
    bookStyle.changeFont(fontList);
    bookStyle.changeSize(sizeList);
})()