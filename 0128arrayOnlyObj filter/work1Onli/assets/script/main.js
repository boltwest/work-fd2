var arr = [{ g: 1 }, { a: 2 }, { a: 2 }, { b: 2 }, { c: 1, a: 5 }, { d: 1 }, { d: 1, b: 1 }, { a: 1 }, { b: 2 }, { d: 1, b: 1 }, { b: 2 }];
var arr1 = [{ g: 1 }, { a: 2 }, { a: 2 }, { a: 1, b: 2 }];

checkedObject(arr1[0], arr1[1]);

function checkedObject (obj1, obj2) {
	
	console.log(Object.keys(obj1).length);
	console.log(Object.keys(obj2).length);
	
	if(Object.keys(obj1).length === Object.keys(obj2).length) {
		
	}
	return false;
}

































//uniqueObject(arr1);


function uniqueObject(array) {

	if (!array.length) {
		return null;
	}

	var ansver = [array[0]];
	//console.log(Object.keys(array[3]));

	array.forEach(function(obj) {

		if (Object.keys(obj).length === 1) {
			for (var key in obj) {
				for (var i = 0; i < ansver.length; i++) {
					if ((key in ansver[i])) {
						break;
					}
					else {
						ansver.push(obj);
					}
				}
			}

		}





	})
	console.log(ansver);
}








//      пример с доски задание номер 2

function compareObject(obja,  objb) {
	for(var key in objb){
		if( !(key in obja) || (objb[key] !== obja[key])) {
			return false;
		}
	}
	return true;
}

function grtFinalArr (arr, obj){
	return arr.filter(function(item){
		return compareObject(item, obj);
	})
}


