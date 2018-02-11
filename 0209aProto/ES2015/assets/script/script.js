'use strict';

class Shape {
	constructor (){
		this._name = 'Фигура';
	}
	getName (){
		return this._name;
	}
}

class Rectangle extends Shape{
	constructor (argA, argB){
		super();
		this._a = argA;
		this._b = argB;
	}
	getName (){
		return super.getName() + ' прямоугольник';
	}
	setA (arg) {
		this._a = arg;
	}
	setB (arg) {
		this._b = arg;
	}
	getA () {
		return this._a;
	}
	getB () {
		return this._b;
	}
	getSquare () {
		return this._a * this._b;
	}
	getPerimeter () {
		return (this._a + this._b) * 2;
	}
}

class Square extends Rectangle{
	constructor (arg) {
		super (arg, arg);
	}
	getName (){
		return Shape.prototype.getName.apply(this, arguments) + ' квадрат';
	}
	setA (arg){
		super.setA(arg);
		this._b = arg;
	}
	setB (arg){
		super.setB(arg);
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