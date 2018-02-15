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


document.body.appendChild(makeForm(action, formDef1));


function makeForm(action, arr, name = 'form') {

	var form = document.createElement('form');
	form.setAttribute('action', action);
	form.setAttribute('name', name);
	form.setAttribute('target', '_blank');
	form.setAttribute('method', 'post');
	form.setAttribute('style', 'position: relative');

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
		}
	});

	function makeElementLongText(obj) {
		var element = document.createElement('lable');
		element.setAttribute('style', 'display: block; margin: 3px')
		var nodeTextLable = document.createTextNode(obj.label);
		var nodeElement = document.createElement('input');
		nodeElement.setAttribute('type', 'text');
		nodeElement.setAttribute('name', obj.name);
		nodeElement.setAttribute('placeholder', obj.label);
		nodeElement.setAttribute('style', 'position: absolute; left: 150px');
		nodeElement.setAttribute('size', '50');

		element.appendChild(nodeTextLable);
		element.appendChild(nodeElement);
		return element;
	}
	function makeElementNumber(obj) {
		var element = document.createElement('lable');
		element.setAttribute('style', 'display: block; margin: 3px')
		var nodeTextLable = document.createTextNode(obj.label);
		var nodeElement = document.createElement('input');
		nodeElement.setAttribute('type', 'number');
		nodeElement.setAttribute('name', obj.name);
		nodeElement.setAttribute('placeholder', obj.label);
		nodeElement.setAttribute('style', 'position: absolute; left: 150px');

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



	
	
	console.log(form);
	return form;
}





























