const selectRandom = function(arr) {
    return arr[Math.floor(Math.random() * arr.length)];
};

const isTritone = function(n1, n2) {
	let check = false;
	if ( (n1 === 3 || n1 === 10) && n2 === 6 ) {
		check = true;
	};
	if ( n1 === 6 && (n2 === 3 || n2 === 10) ) {
		check = true;
	};
	return check;
};

const pitchMap = ['C','D','E','F','G','A','B','c','d','e','f','g'];

const expressABC = function(melody) {
	return melody.map((n) => pitchMap[n]).join(' ');
};

const addCadence = function(melody) {
	melody.push(selectRandom(Array(7,4)));
	if ( melody[melody.length-1] === 7 ) {
		let type = selectRandom(Array(1,2,4,5,7,8));
		if ( type === 1 ) {
			melody.splice(melody.length, 0, 7,6); // h.c.
		};
		if ( type === 2 ) {
			melody.splice(melody.length, 0, 9,8); // h.c
		};
		if ( type === 4 ) {
			melody.splice(melody.length, 0, 8,7); // p.a.c.
		};
		if ( type === 5 ) {
			melody.splice(melody.length, 0, 10,9); // i.a.c.
		};
		if ( type === 7 ) {
			melody.splice(melody.length, 0, 9,8,7); // p.a.c.
		};
		if ( type === 8 ) {
			melody.splice(melody.length, 0, 8,8); // h.c
		};
	};
	if ( melody[melody.length-1] === 4 ) {
		let type = selectRandom(Array(1,3,4,6,8));
		if ( type === 1 ) {
			melody.splice(melody.length, 0, 7,6); // h.c.
		};
		if ( type === 3 ) {
			melody.splice(melody.length, 0, 4,4); // i.a.c. or h.c.
		};
		if ( type === 4 ) {
			melody.splice(melody.length, 0, 8,7); // p.a.c.
		};
		if ( type === 6 ) {
			melody.splice(melody.length, 0, 4,3,2); // i.a.c
		};
		if ( type === 8 ) {
			melody.splice(melody.length, 0, 8,8); // h.c.
		};
	};
	return melody;
};

// repeated values "weight" then preferentially
//const permittedIntervals = [-2,5,1,3];
const permittedIntervals = [-2,-2,-2,5,1,3];

const buildMelody = function() {
	let n = selectRandom(Array(4,7));
	let melody = [];
	melody.push(n);
	for ( let c = 0; c < 7; c++ ) {
		n = melody[melody.length-1] + selectRandom(permittedIntervals);
		while ( ( isTritone(n, melody[melody.length-1]) === true ) || ( n < 0 || n > 11 ) ) {
			n = melody[melody.length-1] + selectRandom(permittedIntervals);
		};
		melody.push(n);
	};
	melody = addCadence(melody);
	return melody;
};
