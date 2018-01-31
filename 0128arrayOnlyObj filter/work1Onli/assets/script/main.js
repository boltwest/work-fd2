var arr = [{ g: 1 }, { a: 2 }, { a: 2 }, { b: 2 }, { c: 1, a: 5 }, { d: 1 }, { d: 1, b: 1 }, { a: 1 }, { b: 2 }, { d: 1, b: 1 }, { b: 2 }];
var arr1 = [{ g: 1 }, { a: 2 }, { a: 2 }, { a: 1, b: 2 }];
var arr2 = [];

console.log(filterUniqueObject(arr));

console.log(arr);

function filterUniqueObject(array) {


	var ansver = [];


	array.forEach(function(obj) {
		var flag = true;

		for (var i = 0; i < ansver.length; i++) {
			if ((checkedObject(obj, ansver[i]))) {
				break;
			}
		}
		if (i === ansver.length) {
			ansver.push(obj)
		}
	})

	function checkedObject(obj1, obj2) {

		if (Object.keys(obj1).length === Object.keys(obj2).length) {
			for (var key in obj1) {
				if (obj2[key] && obj1[key] === obj2[key]) {
					return true;
				}
			}
		}
		return false;
	}

	return ansver;
}
