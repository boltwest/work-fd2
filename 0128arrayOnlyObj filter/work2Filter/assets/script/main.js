var arr = [{d: 1}, {a: 2}, {c: 2}, {c: 1, a: 5}, {d: 1, c: 1}, {a: 1}, {b: 6}, {d: 1, b: 1}, {b: 2}];

console.log(filterArray(arr, {d: 1}));


function filterArray(array, param) {

	if (!param) {
		return null;
	}
	if (!(Object.keys(param).length)) {
		return array;
	}
	var ansver = [];
	ansver = array.filter(function (obj) {
		for (var key in obj) {
			if (param[key] && param[key] === obj[key]) {
				return true;
			}
		}
	})

	if (!ansver.length) {
		return null;
	}
	return ansver;
}

