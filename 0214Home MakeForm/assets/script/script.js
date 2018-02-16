var formDef1 =
	[
		{label: 'Название сайта:', kind: 'longtext', name: 'sitename'},
		{label: 'URL сайта:', kind: 'longtext', name: 'siteurl'},
		{label: 'Посетителей в сутки:', kind: 'number', name: 'visitors'},
		{label: 'E-mail для связи:', kind: 'shorttext', name: 'email'},
		{
			label: 'Рубрика каталога:', kind: 'combo', name: 'division',
			variants: [{text: 'здоровье', value: 1}, {text: 'домашний уют', value: 2}, {
				text: 'бытовая техника',
				value: 3
			}]
		},
		{
			label: 'Размещение:', kind: 'radio', name: 'payment',
			variants: [{text: 'бесплатное', value: 1}, {text: 'платное', value: 2}, {text: 'VIP', value: 3}]
		},
		{label: 'Разрешить отзывы:', kind: 'check', name: 'votes'},
		{label: 'Описание сайта:', kind: 'memo', name: 'description'},
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


function createForm(action, arr, name = 'form') {

	var form = document.createElement('form');
	form.setAttribute('action', action);
	form.setAttribute('name', name);
	form.setAttribute('target', '_blank');
	form.setAttribute('method', 'post');

	arr.forEach(function (objectProp) {
		switch (objectProp.kind){
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
		nodeElement.classList.add('input');
		nodeElement.classList.add('inputLong');

		element.appendChild(nodeTextLable);
		element.appendChild(nodeElement);
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
		nodeElement.classList.add('input');
		nodeElement.classList.add('inputSmall');

		element.appendChild(nodeTextLable);
		element.appendChild(nodeElement);
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
		nodeElement.classList.add('input');
		nodeElement.classList.add('inputShort');

		element.appendChild(nodeTextLable);
		element.appendChild(nodeElement);
		return element;
	}
	function makeElementCombo(obj) {
		var element = document.createElement('lable');
		element.classList.add('lable');
		var nodeTextLable = document.createTextNode(obj.label);
		var nodeElement = document.createElement('select');
		nodeElement.setAttribute('size', '1');
		nodeElement.setAttribute('name', obj.name);
		nodeElement.classList.add('input');
		nodeElement.classList.add('inputShort');
		obj.variants.forEach(function (itemObj) {
			nodeElement.appendChild(createOption(itemObj));
		});

		element.appendChild(nodeTextLable);
		element.appendChild(nodeElement);

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
		nodeElement.classList.add('input');

		element.appendChild(nodeTextLable);
		element.appendChild(nodeElement);
		return element;
	}
	function makeElementMemo(obj) {
		var element = document.createElement('lable');
		element.classList.add('lable');
		var nodeTextLable = document.createTextNode(obj.label + '\n');
		var nodeElement = document.createElement('textarea');
		nodeElement.setAttribute('name', obj.name);
		nodeElement.setAttribute('placeholder', obj.label);
		nodeElement.classList.add('inputTextarea');
		//nodeElement.classList.add('inputLong');

		element.appendChild(nodeTextLable);
		element.appendChild(nodeElement);
		return element;
	}

	return form;
}