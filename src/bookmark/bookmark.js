import list from '../style/list.js';

const bookmark = (btn, title) => {
    let ul = document.querySelector('ul');
    let pre = document.querySelector('pre');
    if (!localStorage.li) localStorage.li = '<li>书签列表</li>';
    if (!localStorage.num) localStorage.num = 0;
    btn.onclick = () => {
        let page = 1 + Math.abs(Number(pre.style.left.replace(/px/gi, '')) / 800);
        localStorage.num++;
        localStorage['book' + localStorage.num] = title;
        localStorage['mark' + localStorage.num] = page;
        localStorage.li += '<li>' + localStorage['book' + localStorage.num] + ' >> ' + '第' + '<span>' + localStorage['mark' + localStorage.num] + '</span>' + '页' + '</li>';
        ul.innerHTML = localStorage.li;
        alert('书签插入成功');

    }
}
const loadbookmark = (btn) => {
    let ul = document.querySelector('ul');
    btn.onclick = () => {
        list(ul);
        ul.innerHTML = localStorage.li;
        let li = document.querySelectorAll('ul > li');
        let pre = document.querySelector('pre');
        for (let item of li) {
            item.onclick = () => {
                let span = item.querySelector('span').innerHTML;
                let page = (Number(span) - 1) * 800;
                localStorage.page = -page;
                pre.style.left = localStorage.page + 'px';
                localStorage.switch = 'true';
            }
        }
    }
}

const delMark = (() => {
    let del = document.querySelector('.option > dt');
    del.onclick = () => {
        localStorage.clear();
        if (!localStorage.li) localStorage.li = '<li>书签列表</li>';
        alert('删除成功！');
    }
})()

const mark = {
    bookmark,
    loadbookmark
}
export default mark;
