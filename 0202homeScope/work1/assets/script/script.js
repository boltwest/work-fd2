var a = 30;

function makeCounter() {
	var a = 0;
	return function () {
		console.log(++a);
	}
}

var counter1 = makeCounter();
var counter2 = makeCounter();


counter1(); //1
counter1(); //2
counter1(); //3
counter1(); //4
counter1(); //5

console.log('\n');
a = 10;

counter2(); //1
counter2(); //2

console.log('\n');

function second() {
	var a = 40;
	counter1(); //6
	counter2(); //3
}

second();