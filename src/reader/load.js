const load = (filename, p) => {
	let turn;
	if (filename === localStorage.name) {
		turn = localStorage.page || 0;
	} else {
		turn = 0;
	}
	return turn;
}
export default load;