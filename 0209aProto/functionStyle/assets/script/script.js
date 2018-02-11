function Shape() {

	var name = 'Фигура';

	this.getName = function () {
		return name;
	}
}

function Rectangle(argA, argB) {
	Shape.call(this);

	var getName = this.getName;
	this.getName = function () {
		var name = getName();
		return name + ' прямоугольник'
	}

	this._a = argA;
	this._b = argB;

	this.setA = function (arg) {
		this._a = arg;
	}

	this.setB = function (arg) {
		this._b = arg;
	}

	this.getA = function () {
		return this._a;
	}

	this.getB = function () {
		return this._b;
	}

	this.getSquare = function () {
		return this._a * this._b;
	}

	this.getPerimeter = function () {
		return (this._a + this._b) * 2;
	}
}

function Square(argA) {
	Rectangle.call(this);

	this._a = argA;
	this._b = argA;
	var name = 'Фигура квадрат';

	this.getName = function () {
		return name;
	}

	var setA = this.setA;
	this.setA = function (arg) {
		setA.call(this, arg);
		this._b = arg;
	}

	var setB = this.setB;
	this.setB = function (arg) {
		setB.call(this, arg);
		this._a = arg;
	}
}


var pr = new Rectangle(5, 6);
console.log(pr.getName());


var form = new Square(20);
console.log(form.getName());
console.log(form.getSquare());
console.log(form.getPerimeter());
form.setA(8);
console.log(form.getA());
console.log(form.getB());
console.log(form.getSquare());
console.log(form.getPerimeter());






















