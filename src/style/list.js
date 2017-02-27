const list = (list) => {
    let status = window.getComputedStyle(list, null).display;
    list.style.display = status === 'none'? 'block': 'none';
    return
}
export default list;
