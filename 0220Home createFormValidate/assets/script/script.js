var formDef1 =
	[
		{label: 'Название сайта:', kind: 'longtext', name: 'sitename', validate: ['required']},
		{label: 'URL сайта:', kind: 'longtext', name: 'siteurl', validate: ['required', 'url']},
		{label: 'Посетителей в сутки:', kind: 'number', name: 'visitors', validate: ['required']},
		{label: 'E-mail для связи:', kind: 'shorttext', name: 'email', validate: ['required', 'mail']},
		{
			label: 'Рубрика каталога:', kind: 'combo', name: 'division',
			variants: [{text: 'здоровье', value: 1}, {text: 'домашний уют', value: 2}, {
				text: 'бытовая техника', value: 3
			}], validate: ['required']
		},
		{
			label: 'Размещение:',
			kind: 'radio',
			name: 'payment',
			variants: [{text: 'бесплатное', value: 1}, {text: 'платное', value: 2}, {text: 'VIP', value: 3}],
			validate: ['radio']
		},
		{label: 'Разрешить отзывы:', kind: 'check', name: 'votes', validate: ['check']},
		{label: 'Описание сайта:', kind: 'memo', name: 'description', validate: ['required']},
		{label: 'Опубликовать:', kind: 'submit'},
	];

var formDef2 =
	[
		{label: 'Фамилия:', kind: 'longtext', name: 'lastname'},
		{label: 'Имя:', kind: 'longtext', name: 'firstname'},
		{label: 'Отчество:', kind: 'longtext', name: 'secondname'},
		{label: 'Возраст:', kind: 'number', name: 'age'},
		{label: 'Зарегистрироваться:', kind: 'submit'},
	];

var action = "http://fe.it-academy.by/TestForm.php";


document.body.appendChild(createForm(action, formDef1));


function createForm(action, arr, name = 'formInfo') {

	var form = document.createElement('form');
	form.setAttribute('action', action);
	form.setAttribute('name', name);
	form.setAttribute('target', '_blank');
	form.setAttribute('method', 'post');
	form.setAttribute('novalidate', '');

	arr.forEach(function (objectProp) {
		switch (objectProp.kind) {
			case 'longtext':
				form.appendChild(makeElementLongText(objectProp));
				break;
			case 'number':
				form.appendChild(makeElementNumber(objectProp));
				break;
			case 'submit':
				form.appendChild(makeElementSubmit(objectProp));
				break;
			case 'shorttext':
				form.appendChild(makeElementShortText(objectProp));
				break;
			case 'combo':
				form.appendChild(makeElementCombo(objectProp));
				break;
			case 'radio':
				form.appendChild(makeElementRadio(objectProp));
				break;
			case 'check':
				form.appendChild(makeElementCheck(objectProp));
				break;
			case 'memo':
				form.appendChild(makeElementMemo(objectProp));
				break;
		}
	});

	function makeElementLongText(obj) {
		var element = document.createElement('lable');
		element.classList.add('lable');
		var nodeTextLable = document.createTextNode(obj.label);
		var nodeElement = document.createElement('input');
		nodeElement.setAttribute('type', 'text');
		nodeElement.setAttribute('name', obj.name);
		nodeElement.setAttribute('placeholder', obj.label);
		nodeElement.setAttribute('data-valid', obj.validate);
		nodeElement.setAttribute('data-submit', '');
		nodeElement.classList.add('input');
		nodeElement.classList.add('inputLong');

		element.appendChild(nodeTextLable);
		element.appendChild(nodeElement);

		element.appendChild(createElementError('errorL', 'Корректно введите значение'));

		return element;
	}

	function makeElementNumber(obj) {
		var element = document.createElement('lable');
		element.classList.add('lable');
		var nodeTextLable = document.createTextNode(obj.label);
		var nodeElement = document.createElement('input');
		nodeElement.setAttribute('type', 'number');
		nodeElement.setAttribute('name', obj.name);
		nodeElement.setAttribute('placeholder', obj.label);
		nodeElement.setAttribute('data-valid', obj.validate);
		nodeElement.setAttribute('data-submit', '');
		nodeElement.classList.add('input');
		nodeElement.classList.add('inputSmall');

		element.appendChild(nodeTextLable);
		element.appendChild(nodeElement);

		element.appendChild(createElementError('errorS', 'Укажите число'));

		return element;
	}

	function makeElementSubmit(obj) {
		var str = obj.label;
		str = str.slice(0, -1);
		var element = document.createElement('input');
		element.setAttribute('type', 'submit');
		element.setAttribute('style', 'display: block');
		element.setAttribute('value', str);

		return element;
	}

	function makeElementShortText(obj) {
		var element = document.createElement('lable');
		element.classList.add('lable');
		var nodeTextLable = document.createTextNode(obj.label);
		var nodeElement = document.createElement('input');
		nodeElement.setAttribute('type', 'text');
		nodeElement.setAttribute('name', obj.name);
		nodeElement.setAttribute('placeholder', obj.label);
		nodeElement.setAttribute('data-valid', obj.validate);
		nodeElement.setAttribute('data-submit', '');
		nodeElement.classList.add('input');
		nodeElement.classList.add('inputShort');

		element.appendChild(nodeTextLable);
		element.appendChild(nodeElement);

		element.appendChild(createElementError('errorS', 'Корректно введите значение'));

		return element;
	}

	function makeElementCombo(obj) {
		var element = document.createElement('lable');
		element.classList.add('lable');
		var nodeTextLable = document.createTextNode(obj.label);
		var nodeElement = document.createElement('select');
		nodeElement.setAttribute('size', '1');
		nodeElement.setAttribute('name', obj.name);
		nodeElement.setAttribute('data-valid', obj.validate);
		nodeElement.setAttribute('data-submit', '');
		nodeElement.classList.add('input');
		nodeElement.classList.add('inputShort');
		obj.variants.forEach(function (itemObj) {
			nodeElement.appendChild(createOption(itemObj));
		});

		element.appendChild(nodeTextLable);
		element.appendChild(nodeElement);

		element.appendChild(createElementError('errorS', 'Выберите значение'));

		function createOption(obj) {
			var option = document.createElement('option');
			option.setAttribute('value', obj.value);
			var textNode = document.createTextNode(obj.text);
			option.appendChild(textNode);
			return option;
		}

		return element;
	}

	function makeElementRadio(obj) {
		var element = document.createElement('div');
		element.classList.add('lable');
		var nodeTextLable = document.createTextNode(obj.label);
		var nodeElement = document.createElement('lable');
		nodeElement.classList.add('input');
		obj.variants.forEach(function (itemObj) {
			nodeElement.appendChild(createOption(itemObj, obj.name));
		});

		element.appendChild(nodeTextLable);
		element.appendChild(nodeElement);

		var nodeElementSpan = document.createElement('span');
		nodeElementSpan.classList.add('errorS');
		nodeElementSpan.setAttribute('id', obj.name);
		var nodeTextError = document.createTextNode('Выберите значение');
		nodeElementSpan.appendChild(nodeTextError);
		element.appendChild(nodeElementSpan);

		function createOption(obj, nameRadio) {
			var lableOption = document.createElement('lable');
			var textNode = document.createTextNode(obj.text);
			var inputRadio = document.createElement('input');
			inputRadio.setAttribute('value', obj.value);
			inputRadio.setAttribute('name', nameRadio);
			inputRadio.setAttribute('type', 'radio');
			lableOption.appendChild(inputRadio);
			lableOption.appendChild(textNode);
			return lableOption;
		}

		return element;
	}

	function makeElementCheck(obj) {
		var element = document.createElement('lable');
		element.classList.add('lable');
		var nodeTextLable = document.createTextNode(obj.label);
		var nodeElement = document.createElement('input');
		nodeElement.setAttribute('type', 'checkbox');
		nodeElement.setAttribute('name', obj.name);
		nodeElement.setAttribute('checked', '');
		nodeElement.setAttribute('data-valid', obj.validate);
		nodeElement.setAttribute('data-submit', '');
		nodeElement.classList.add('input');

		element.appendChild(nodeTextLable);
		element.appendChild(nodeElement);

		element.appendChild(createElementError('errorS', 'Укажите опцию'));

		return element;
	}

	function makeElementMemo(obj) {
		var element = document.createElement('lable');
		element.classList.add('lable');
		var nodeTextLable = document.createTextNode(obj.label + '\n');
		var nodeElement = document.createElement('textarea');
		nodeElement.setAttribute('name', obj.name);
		nodeElement.setAttribute('placeholder', obj.label);
		nodeElement.setAttribute('data-valid', obj.validate);
		nodeElement.setAttribute('data-submit', '');
		nodeElement.classList.add('inputTextarea');

		element.appendChild(nodeTextLable);
		element.appendChild(nodeElement);

		element.appendChild(createElementError('errorL', 'Корректно введите значение'));

		return element;
	}

	function createElementError(style, text) {
		var nodeElementSpan = document.createElement('span');
		nodeElementSpan.classList.add(style);
		var nodeTextError = document.createTextNode(text);
		nodeElementSpan.appendChild(nodeTextError);
		return nodeElementSpan;
	}

	return form;
}

var formTag = document.forms.formInfo;
formTag.addEventListener('blur', addError, true);
formTag.addEventListener('focus', checkError, true);
formTag.addEventListener('submit', checkSubmit);

var checkFlag = false;

function addError(event) {
	var flag = false;
	var elem = event.target;
	if ( elem.name === 'payment' ) {
		validateRadio();
		return;
	}
	var validArray = elem.getAttribute('data-valid').split(',');
	for ( var i = 0; i < validArray.length; i++ ) {
		if ( objFunction[validArray[i]].call(null, elem, event) ) {
			flag = true;
			break;
		}
	}
	if ( flag ) {
		checkFlag = true;
		elem.nextSibling.classList.add("errorVisib");
	}
}

function checkError(event) {
	var elem = event.target;
	if ( elem.name === 'payment' ) {
		if ( payment.classList.contains("errorVisib") ) {
			payment.classList.remove("errorVisib");
		}
		return;
	}
	if ( elem.nextSibling.classList.contains("errorVisib") ) {
		elem.nextSibling.classList.remove("errorVisib");
	}
}

var objFunction = {required: validateRequired, url: validateUrl, mail: validateMail, check: validateCheck};

function validateRequired(elem) {
	return !elem.value;
}

function validateUrl(elem) {
	var value = elem.value;
	var reg = /(http|https)\:\/\//;
	return !(reg.test(value));
}

function validateMail(elem) {
	var value = elem.value;
	var reg = /.+@.+\./;
	return !(reg.test(value));
}

function validateCheck(elem) {
	return !elem.checked;
}

function validateRadio() {
	var form = document.forms.formInfo;
	var arr = form.querySelectorAll("[name = 'payment']:checked");
	if ( arr.length === 0 ) {
		payment.classList.add('errorVisib');
		checkFlag = true;
	}
}

var arrElementsInput = formTag.querySelectorAll('[data-submit]');

function checkSubmit(event) {
	checkFlag = false;
	validateRadio();
	arrElementsInput.forEach(function (item) {
		item.focus();
		item.blur();
	});
	if ( checkFlag ) {
		event.preventDefault();
		//var elem = formTag.querySelector([class="errorVisib"]);
		//console.log(elem);
	}
}