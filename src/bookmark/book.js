import readfile from '../reader/readfile.js';
import load from '../reader/load.js';
import page from '../reader/pageturn.js';
import mark from './bookmark.js';

const book = (() => {
    let input = document.querySelector('input');
    let title = document.querySelector('h1');
    let p = document.querySelector('pre');
    let setmark = document.querySelector('.setmark');
    let loadmark = document.querySelector('.loadmark');
    input.addEventListener('change', () => {
        localStorage.switch = 'false';
        let file = input.files;
        title.innerHTML = file[0].name.replace(/.txt/gi, '');
        title.style.color = '#888';
        mark.bookmark(setmark, title.innerHTML);
        mark.loadbookmark(loadmark);
        let turn = load(file[0].name, p);
        readfile(file, p, turn);
        page(p, turn);
    });
})()
export default book;