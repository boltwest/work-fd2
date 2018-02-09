var obj = {text: 'значение :'}
var arrNumbers = [1, 2, 3];
function show(arr) {
	console.log(this.text);
	arr.forEach(function (element) {
		console.log(element);
	})
}




var wrapper = bind(show, obj, arrNumbers);

wrapper(5, 6);



function bind(func, context, arrays) {
	return function () {
		let argArr = [].slice.call(arguments);
		if(!argArr.length) {
			return func.apply(context, [arrays]);
		}
		return func.apply(context, [arrays.concat(argArr)]);
		
	};
}
