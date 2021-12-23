function results()
{
	var rest = 0;
	for (var i = 0; i < 10; i++) {
		rest = rest + parseInt(document.querySelector('input[name="q' + (i+1) + '"]:checked').value);
		//rest.push(document.querySelector('input[name="q' + i + '"]:checked').value);
	}
	console.log(rest);
 
	info = document.getElementById('test');
	tit = document.getElementById('titCuest');
	info.innerHTML	= "<h3 id='restCuest'>Has acertado en " + rest + "/10 preguntas</h3>";
	tit.innerHTML	= "Resultados";
	window.location = "#activity"
}