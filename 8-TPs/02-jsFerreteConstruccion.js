/*2.	Para el departamento de Construcción:
A.	 mostrar la cantidad de alambre a comprar  si se ingresara el largo y el ancho de un terreno rectangular y se debe alambra con tres hilos de alambre.
B.	mostrar la cantidad de alambre a comprar  si se ingresara el radio  de un terreno circular y se debe alambra con tres hilos de alambre.
C.	Para hacer un contrapiso de 1m x 1m se necesitan 2 bolsas de cemento y 3 de cal, debemos mostrar cuantas bolsas se necesitan de cada uno para las medidas que nos ingresen.
*/

function Rectangulo() {
  let ancho;
  let largo;
  let cantidad_alambre;
  ancho = parseInt(document.querySelector("#txtIdAncho").value);
  largo = parseInt(document.querySelector("#txtIdLargo").value);
  cantidad_alambre = (2 * ancho + 2 * largo) * 3;
  alert(cantidad_alambre);
}
function Circulo() {
  let radio;
  let cantidad_alambre;
  radio = parseInt(document.querySelector("#txtIdRadio").value);
  cantidad_alambre = Math.round(2 * Math.PI * radio * 3);
  alert(cantidad_alambre);
}
function Materiales() {
  let ancho;
  let largo;
  let area_rectangulo;
  let cemento;
  let cal;
  ancho = parseInt(document.querySelector("#txtIdAncho").value);
  largo = parseInt(document.querySelector("#txtIdLargo").value);
  area_rectangulo = ancho + largo;
  cemento = 2 * area_rectangulo;
  cal = 3 * area_rectangulo;
  alert(cemento + " Bolsas de cemento y " + cal + " Bolsas de cal");
}
