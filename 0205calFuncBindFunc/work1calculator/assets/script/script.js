var calculator = {
	res: 0,
	start: function (arg) {
		this.res = arg;
		return this;
	},
	add: function (arg) {
		this.res += arg;
		return this;
	},
	multiplay: function (arg) {
		this.res *= arg;
		return this;
	},
	subtract: function (arg) {
		this.res -= arg;
		return this;
	},
	divide: function (arg) {
		if(arg === 0){
			throw 'на ноль делить нельзя'
		}
		this.res /= arg;
		return this;
	},
	result: function () {
		console.log(this.res);
		return this;
	},
	reset: function () {
		this.res = 0;
		return this;
	}
}

calculator.add(20).divide(3).result().reset().result();
