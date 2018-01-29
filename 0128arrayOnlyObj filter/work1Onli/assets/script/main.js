var arr = [{g: 1}, {a: 2}, {a: 2}, {b: 2}, {c: 1, a: 5}, {d: 1}, {d: 1, b: 1}, {a: 1}, {b: 2}, {d: 1, b: 1}, {b: 2}];
var arr1 = [{g: 1}, {a: 2}, {a: 2}, {a: 1, b: 2}];
var arr2 = [];

console.log(filterUniqueObject(arr));

console.log(arr);

function filterUniqueObject(array) {

	if ( !array.length ) {
		return null;
	}

	var ansver = [array[0]];
	var flag = true;

	array.forEach(function (obj) {
		for ( var i = 0; i < ansver.length; i++ ) {
			if ( (checkedObject(obj, ansver[i])) ) {
				flag = false;
			}
		}
		if ( flag ) {
			ansver.push(obj)
		} else {
			flag = true;
		}
	})

	function checkedObject(obj1, obj2) {

		if ( Object.keys(obj1).length === Object.keys(obj2).length ) {
			for ( var key in obj1 ) {
				if ( obj2[key] && obj1[key] === obj2[key] ) {
					return true;
				}
			}
		}
		return false;
	}

	return ansver;
}
