(function() {

	document.getElementById('operar_json').onclick = function() { 
		var json_texto = '{ "employees" : [' +
		'{ "firstName":"John" , "lastName":"Doe" },' +
		'{ "firstName":"Anna" , "lastName":"Smith" },' +
		'{ "firstName":"Peter" , "lastName":"Jones" } ]}';

		var objeto = JSON.parse(json_texto); 
		empleados = objeto.employees;
		cantidad_empleados = objeto.employees.length;

		for (var e=0; e<cantidad_empleados; e++) {
			alert("Mi nombre es: "+empleados[e].firstName+" y mi apellido es: "+empleados[e].lastName);
		}
	}; 

	document.getElementById('sintaxis_javascript').addEventListener('click', section_one);
	document.getElementById('dom_javascript').addEventListener('click', section_two);
	document.getElementById('eventos_javascript').addEventListener('click', section_three); 
	document.getElementById('inclusion_javascript').addEventListener('click', section_four);  
	document.getElementById('json_javascript').addEventListener('click', section_five);  
	
})();

// function operarJson() {
// 	var json_texto = '{ "employees" : [' +
// 	'{ "firstName":"John" , "lastName":"Doe" },' +
// 	'{ "firstName":"Anna" , "lastName":"Smith" },' +
// 	'{ "firstName":"Peter" , "lastName":"Jones" } ]}';

// 	var objeto = JSON.parse(json_texto); 
// 	empleados = objeto.employees;
// 	cantidad_empleados = objeto.employees.length;

// 	for (var e=0; e<cantidad_empleados; e++) {
// 		alert("Mi nombre es: "+empleados[e].firstName);
// 		alert("Mi apellido es: "+empleados[e].lastName);
// 	}
// }

function section_one() {
	document.getElementById('section_one').style.display = 'block';
	document.getElementById('section_two').style.display = 'none';
	document.getElementById('section_three').style.display = 'none';
	document.getElementById('section_four').style.display = 'none';
	document.getElementById('section_five').style.display = 'none';
}

function section_two() {
	document.getElementById('section_two').style.display = 'block';
	document.getElementById('section_one').style.display = 'none';
	document.getElementById('section_three').style.display = 'none';
	document.getElementById('section_four').style.display = 'none';
	document.getElementById('section_five').style.display = 'none';
}

function section_three() {
	document.getElementById('section_three').style.display = 'block';
	document.getElementById('section_one').style.display = 'none';
	document.getElementById('section_two').style.display = 'none';
	document.getElementById('section_four').style.display = 'none';
	document.getElementById('section_five').style.display = 'none';
}

function section_four() {
	document.getElementById('section_four').style.display = 'block';
	document.getElementById('section_one').style.display = 'none';
	document.getElementById('section_two').style.display = 'none';
	document.getElementById('section_three').style.display = 'none';
	document.getElementById('section_five').style.display = 'none';
}

function section_five() {
	document.getElementById('section_five').style.display = 'block';
	document.getElementById('section_one').style.display = 'none';
	document.getElementById('section_two').style.display = 'none';
	document.getElementById('section_three').style.display = 'none';
	document.getElementById('section_four').style.display = 'none';
}

function mostrar_ocultar(valor, elemento_DOM) {
	id_lista = elemento_DOM.parentNode.parentNode.parentNode.id;
	var elemento = document.getElementById(id_lista);
	var elementos = elemento.children;
	var cantidad_elementos = elemento.childElementCount;

	for (var e=0; e<cantidad_elementos; e++) {
		element = elementos[e];
		
		if (e == valor) {
			element.style.display='block';
			element.childNodes[3].style.display= 'block';
		} else {
			element.style.display='none';
			element.childNodes[3].style.display= 'none';
		}
	} 
}

function mostrar_todos(elemento_DOM) {
	id_lista = elemento_DOM.parentNode.children[0].id;
	var elemento = document.getElementById(id_lista);
	var elementos = elemento.children;
	var cantidad_elementos = elemento.childElementCount;

	for (var e=0; e<cantidad_elementos; e++) {
		element = elementos[e];

		element.style.display='block';
		element.childNodes[3].style.display= 'none';
	} 
}
