const setHeight = (p) => {
	p.style.height = document.documentElement.clientHeight - 50 + 'px';
	window.onresize = () => {
		p.style.height = document.documentElement.clientHeight - 50 + 'px';
	}
	return
}
export default setHeight;