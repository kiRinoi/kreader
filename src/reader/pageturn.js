import $ from 'jquery';

const pageTurn = (p, turn) => {
	let $p = $(p);
	window.onkeyup = (event) => {
		var char = event.which || event.keyCode;
		turn = localStorage.switch === 'true'?Number(localStorage.page): Number(turn);
		if (char === 39) {
			turn -= 800;
			$p.animate({left: turn + 'px'}, 'fast');
		}
		if (char === 37 && turn < 0) {
			turn += 800;
			$p.animate({left: turn + 'px'}, 'fast');
		}
		localStorage.page = turn;
	}
}
export default pageTurn;