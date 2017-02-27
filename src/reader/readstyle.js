class readStyle {
    constructor(bg, color, font, size, txt) {
        this.bg = bg;
        this.color = color;
        this.font = font;
        this.size = size;
        this.txt = txt;
    }
    loadStyle() {
        this.txt.style.backgroundColor = this.bg;
        document.querySelector('pre').style.color = this.color;
        document.querySelector('pre').style.fontFamily = this.font;
        document.querySelector('pre').style.fontSize = this.size + 'px';
    }

    changeColor(list) {
        for (let item of list) {
            item.onclick = () => {
                if (window.getComputedStyle(item, null).backgroundColor === 'rgb(22, 24, 25)') {
                    document.querySelector('pre').style.color = window.getComputedStyle(item, null).color;
                    localStorage.color = window.getComputedStyle(item, null).color;
                } else {
                    document.querySelector('pre').style.color = '#333';
                    localStorage.color = '#333';
                }
                this.txt.style.background = window.getComputedStyle(item, null).backgroundColor;
                localStorage.background = window.getComputedStyle(item, null).backgroundColor;
            }
        }
    }

    changeFont(list) {
        let font;
        for (let item of list) {
            item.onclick = () => {
                switch (item.innerHTML) {
                    case '雅黑':
                        font = '黑体';
                        break;
                    case '宋体':
                        font = '宋体';
                        break;
                    case '楷体':
                        font = '楷体';
                        break;
                }
                document.querySelector('pre').style.fontFamily = font;
                localStorage.font = font;
            }
        }
    }

    changeSize(list) {
        let size = Number(this.size);
        list[1].innerHTML = size;
        list[0].onclick = () => {
            if (list[1].innerHTML > 14) {
                size -= 2;
                list[1].innerHTML = size;
                localStorage.size = size;
                document.querySelector('pre').style.fontSize = size + 'px';
            }
        }
        list[2].onclick = () => {
            if (list[1].innerHTML < 24) {
                size += 2;
                list[1].innerHTML = size;
                localStorage.size = size;
                document.querySelector('pre').style.fontSize = size + 'px';
            }
        }
    }
}
export default readStyle;
