const readfile = (files, p, turn) => {
	if (files.length){
		let file = files[0];
		let reader = new FileReader();
		localStorage.name = files[0].name;
		if (/text+/.test(file.type)){
			reader.onload = function(){
				p.style.left = turn + 'px';
				p.innerHTML = this.result;
			}
			reader.readAsText(file, 'gb2312');
			return
		} 
	}
}
export default readfile;