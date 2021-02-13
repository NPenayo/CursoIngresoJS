function mostrar() {
  //Declarar variables
  let lista_materiales = new Array();
  let flag;
  let tipo_material;
  let cantidad;
  let total_bolsas = 0;
  let precio_unitario;
  let precio_total = 0;
  let precio_descuento;

  do {
    tipo_material = prompt("Material");
    precio_unitario = parseInt(prompt("Precio unitario"));
    cantidad = parseInt(prompt("Cantidad x bolsa"));
    flag = confirm("Seguir comprando?");
    if (
      (tipo_material == "arena" ||
        tipo_material == "cal" ||
        tipo_material == "cemento") &&
      precio_unitario > 0
    ) {
      lista_materiales.push({
        Tipo: tipo_material,
        Precio: precio_unitario,
        Cantidad: cantidad,
      });
    }
  } while (flag);

  //Calculo total de bolsas y precio total
  for (let index = 0; index < lista_materiales.length; index++) {
    total_bolsas += lista_materiales[index].Cantidad;
    precio_total +=
      lista_materiales[index].Cantidad * lista_materiales[index].Precio;
    //Busco el producto con mayor cantidad ordenando el array
    for (let j = index + 1; j < lista_materiales.length; j++) {
      if (lista_materiales[index].Cantidad < lista_materiales[j].Cantidad) {
        let temp = lista_materiales[j];
        lista_materiales[j] = lista_materiales[index];
        lista_materiales[index] = temp;
      }
    }
  }
  alert("Producto con mas cantidad: " + lista_materiales[0].Tipo);

  //Busco el producto mas caro ordenando el array
  for (let index = 0; index < lista_materiales.length; index++) {
    for (let j = index + 1; j < lista_materiales.length; j++) {
      if (lista_materiales[index].Precio < lista_materiales[j].Precio) {
        let temp = lista_materiales[j];
        lista_materiales[j] = lista_materiales[index];
        lista_materiales[index] = temp;
      }
    }
  }
  alert("Producto mas caro: " + lista_materiales[0].Tipo);

  alert("Precio total: " + precio_total);
  if (total_bolsas >= 10 && total_bolsas < 30) {
    precio_descuento = precio_total - precio_total * 0.15;
    alert("Precio con decuento: " + precio_descuento);
  } else if (total_bolsas >= 30) {
    precio_descuento = precio_total - precio_total * 0.3;
    alert("Precio con decuento: " + precio_descuento);
  }
}
