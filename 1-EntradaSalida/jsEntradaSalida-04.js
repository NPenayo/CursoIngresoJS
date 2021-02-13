/* 
Debemos lograr tomar un dato por 'PROMPT' 
y lo muestro por 'ID' al presionar el botón 'mostrar'
*/
function mostrar()
{
	let entrada = prompt("Ingrese un nombre")
	document.querySelector("#txtIdNombre").value = entrada;
}

