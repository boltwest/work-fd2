function Shape(arg){
    
    var name = arg;
    
    this.getName = function(){
        return name;
    }
}

function Rectangle(argA, argB){
    Shape.apply(this, 'Фигура');
    
    var getName = this.getName;
    this.getName = function(){
        var name = getName();
        return name + 'Прямоугольник'
    }
    
    var a = argA;
    var b = argB;
    
    this.setA = function (arg){
        a = arg;
    }
    
    this.setB = function(arg){
        b = arg;
    }
    
    this.getA = function(){
        return a;
    }
    
    this.getB = function(){
        return b;
    }
    
    this.getSquare = function(){
        return a * b;
    }
    
    this.setPerimeter = function(){
        return (a + b) * 2;
    }
}

function Square(argA){
    
}