function results()
{
	var rest = [0,0,0,0,0,0,0];
	for (var i = 0; i < 21; i++) {
		rest[i%7] = rest[i%7] + parseInt(document.querySelector('input[name="q' + (i+1) + '"]:checked').value);
		//rest.push(document.querySelector('input[name="q' + i + '"]:checked').value);
	}
	console.log(rest);
 
	var del = ["requiere ser trabajada", "puede mejorar", "es aceptable", "es excelente"];

	info = document.getElementById('test');
	info.innerHTML	= "<h2 id='titleTest'>Resultados</h2><div class='resText'>Tu desempeño en el hábito \"proactividad\" " + del[rest[0]] + "<br />" +
		"Tu desempeño en el hábito \"tener un fin en mente\" " + del[rest[1]] + "<br />" +
		"Tu desempeño en el hábito \"primero lo primero\" " + del[rest[2]] + "<br />" +
		"Tu desempeño en el hábito \"ganar-ganar\" " + del[rest[3]] + "<br />" +
		"Tu desempeño en el hábito \"entender primero para ser entendido\" " + del[rest[4]] + "<br />" +
		"Tu desempeño en el hábito \"sinergia\" " + del[rest[5]] + "<br />" +
		"Tu desempeño en el hábito \"afilar la sierra\" " + del[rest[6]] + "</div>";
	window.location = "#test"
}