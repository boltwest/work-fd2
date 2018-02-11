function Shape() {  //создали первый класс
	this._name = 'Фигура';
}
Shape.prototype.getName = function () {    // присвоим в __proto__ метод
	return this._name;
}



function Rectangle(argA, argB) {//создали второй класс
	Shape.call(this);
	this._a = argA;
	this._b = argB;
}
Rectangle.prototype = Object.create(Shape.prototype); // Создаем обьект для прототипного наследования
Rectangle.prototype.constructor = Rectangle;
Rectangle.prototype.getName = function () {                  //расширяем функционал метода
	return Shape.prototype.getName.apply(this, arguments) + ' прямоугольник';
}
Rectangle.prototype.setA = function (arg) {
	this._a = arg;
}
Rectangle.prototype.setB = function (arg) {
	this._b = arg;
}
Rectangle.prototype.getA = function () {
	return this._a;
}
Rectangle.prototype.getB = function () {
	return this._b;
}
Rectangle.prototype.getSquare = function () {
	return this._a * this._b;
}
Rectangle.prototype.getPerimeter = function () {
	return (this._a + this._b) * 2;
}



function Square(argA) {     // создали третий класс
	Rectangle.call(this, argA, argA);
}
Square.prototype = Object.create(Rectangle.prototype);   // наследование
Square.prototype.constructor = Square;
Square.prototype.getName = function () {   //расширяем метод
	return Shape.prototype.getName.apply(this, arguments) + ' квадрат';
}
Square.prototype.setA = function (arg) {
	Rectangle.prototype.setA.call(this, arg);
	this._b = arg;
}
Square.prototype.setB = function (arg) {
	Rectangle.prototype.setB.call(this, arg);
	this._a = arg;
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