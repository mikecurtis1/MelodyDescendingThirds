function load() {
	//console.log('hello');
	//console.log(buildMelody());
	//console.log(expressABC([]));
	//let melody = expressABC(buildMelody());
	//console.log(melody);
	let melody = expressABC(buildMelody());
	let abc = '';
	abc += 'L:1/4' + "\n";
	abc += 'K:C' + "\n";
	abc += melody + "\n";
	ABCJS.renderAbc("paper", abc);
	divABC.innerHTML = '';
	divABC.insertAdjacentHTML("beforeend", abc);
};
const buildButton = document.getElementById('build');
const divABC = document.getElementById('abc');
buildButton.addEventListener('click', load);