// var list = document.getElementById('list');
// var add = document.getElementById('addElem');

// add.addEventListener('click', function (e) {
// 	var element = document.createElement('li');
// 	element.innterHTML = 'item';
// });


var list = document.getElementById('list');
var add = document.getElementById('addElem');

add.addEventListener('click', function (e) {
	var element = document.createElement('li');
	var length = document.getElementsByTagName('li').length;
	element.innerHTML = 'item ' + length;
	list.appendChild(element);
});