var btn = document.getElementById('btn');
btn.addEventListener('click', function(){
	// lo primero que hago es guardar en una variable mi contenedor de posteos que está vacío en el html
	var containerPosts = document.getElementById('contenedor-posteos');
	//rescatar los textos que ingresó el usuario en input
	var nick = document.getElementById('nombre').value;
	//limpiar el input
	document.getElementById('nombre').value = '';
	//rescatar los textos que ingresó el usuario en textarea
	var comment = document.getElementById('cajaposteos').value;
	//limpiar el textarea
	document.getElementById('cajaposteos').value = '';
	//crear elementos necesarios
	var post = document.createElement('div');
	var elementName = document.createElement('strong');
	var elementComment = document.createElement('p');
	var elementLine = document.createElement('hr');
	//crear nodos de texto
	var textNameNode = document.createTextNode(nick);
	var textCommentNode = document.createTextNode(comment);
	//appencheando "padre.appendChild(suhijo)"
	elementName.appendChild(textNameNode);
	elementComment.appendChild(textCommentNode);
	
	post.appendChild(elementName);
	post.appendChild(elementComment);
	post.appendChild(elementLine);

	post.setAttribute('class', 'posteo');

	containerPosts.appendChild(post);

	var counter = getElementById('counter-characters');
	counter.innerHTML = '<span>Hermààààn@ eScRiBiSTèèèè --> </span> 0 <span><-- caRàààCTeREzzZZz oe ZZzzZììììì</span>';
})

var textArea = document.getElementById('cajaposteos');
textArea.onkeydown = function() {
	//rescatando valor del textarea
	var comment = document.getElementById('cajaposteos').value;
	//obtener la longitud del mensaje
	var long = comment.length;
	//rescatando párrafo con span
	var counter = document.getElementById('counter-characters');
	counter.innerHTML = '<span>Hermààààn@ eScRiBiSTèèèè --> </span> ' + long + ' <span><-- caRàààCTeREzzZZz oe ZZzzZììììì</span>';
};