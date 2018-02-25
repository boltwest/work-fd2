

//      Model


function TimeModel(gmt) {
	this.arrowPosHour = -10;
	this.arrowPosMinute = -120;
	this.arrowPosSecond = -90;

	this.arrowPosMinuteBegin = 0;
	this.arrowPosHourBegin = 0;

	this.addDegArrowSeconds = function () {
		this.arrowPosSecond += 6;

		this.arrowPosMinute = this.arrowPosMinuteBegin + this.arrowPosSecond / 60;
		this.arrowPosHour = this.arrowPosHourBegin + this.arrowPosMinute / 12;

		this.updateView();
	};

	var viewComponent = null;

	this.start = function (view) {
		viewComponent = view;
	};

	this.updateView = function () {
		if ( viewComponent ) {
			viewComponent.update();
		}
	};

	this.startClock = function () {
		if ( this.interval ) {
			return;
		}
		var date = new Date();
		var seconds = date.getSeconds();
		var minete = date.getMinutes();
		var hour = date.getUTCHours();
		var hourLacation = hour + gmt;
		if ( hourLacation > 12 ) {
			hourLacation -= 12;
		}
		this.arrowPosSecond = seconds * 6 - 90;
		this.arrowPosMinuteBegin = minete * 6 - 90;
		this.arrowPosHourBegin = hourLacation * 30 - 90;

		this.interval = setInterval(this.addDegArrowSeconds.bind(this), 1000);
	};

	this.stopClock = function () {
		clearInterval(this.interval);
		this.interval = null;
	}
}


//      View


function TimeViewWebPage() {
	var myModel = null;
	var myField = null;
	var arrowSecond = null;
	var arrowMinute = null;
	var arrowHour = null;

	this.start = function (model, field) {
		myModel = model;
		myField = field;
		arrowSecond = myField.querySelector('.arrowSecondsClock');
		arrowMinute = myField.querySelector('.arrowMinuteClock');
		arrowHour = myField.querySelector('.arrowHourClock');
	};

	this.update = function () {
		arrowHour.style.transform = 'rotate(' + myModel.arrowPosHour + 'deg)';
		arrowMinute.style.transform = 'rotate(' + myModel.arrowPosMinute + 'deg)';
		arrowSecond.style.transform = 'rotate(' + myModel.arrowPosSecond + 'deg)';
	};
}


//      Controller


function TimeControllerButton() {
	var myModel = null;
	var myField = null;

	this.start = function (model, field) {
		myModel = model;
		myField = field;
		var buttonStop = myField.querySelector('.stopClockButton');
		buttonStop.addEventListener('click', this.stopTime);
		var buttonStart = myField.querySelector('.startClockButton');
		buttonStart.addEventListener('click', this.startTime);
	};

	this.stopTime = function () {
		myModel.stopClock();
	};

	this.startTime = function () {
		myModel.startClock();
	};
}

//      Clock1
var modelClock1 = new TimeModel(3);
var viewClock1 = new TimeViewWebPage();
var controllerClock1 = new TimeControllerButton();

var elementClock1 = document.getElementById('clock1');
modelClock1.start(viewClock1);
viewClock1.start(modelClock1, elementClock1);
controllerClock1.start(modelClock1, elementClock1);

viewClock1.update();


//      Clock2
var modelClock2 = new TimeModel(-5);
var viewClock2 = new TimeViewWebPage();
var controllerClock2 = new TimeControllerButton();

var elementClock2 = document.getElementById('clock2');
modelClock2.start(viewClock2);
viewClock2.start(modelClock2, elementClock2);
controllerClock2.start(modelClock2, elementClock2);

viewClock2.update();


//      Clock3
var modelClock3 = new TimeModel(0);
var viewClock3 = new TimeViewWebPage();
var controllerClock3 = new TimeControllerButton();

var elementClock3 = document.getElementById('clock3');
modelClock3.start(viewClock3);
viewClock3.start(modelClock3, elementClock3);
controllerClock3.start(modelClock3, elementClock3);

viewClock3.update();