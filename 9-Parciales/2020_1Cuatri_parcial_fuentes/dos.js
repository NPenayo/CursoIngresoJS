function mostrar() {
  let tipoProducto;
  let precioProducto;
  let cantidadBolsas;
  let descuento = 0;
  let precioTotal = 0;
  let precioDescuento = 0;
  let totalBolsas = 0;
  let masCaroPrecio = 0;
  let masCaroTipo;
  let totalCemento = 0;
  let totalCal = 0;
  let totalArena = 0;
  let index = 0;
  let flag;

  do {
    tipoProducto = prompt(
      "Tipo de producto: (Arena|Cal|Cemento)"
    ).toLowerCase();
    precioProducto = parseInt(prompt("Precio por bolsa:"));
    cantidadBolsas = parseInt(prompt("Cantidad de bolsas:"));

    //Validacion de datos

    //Validar tipo
    if (
      tipoProducto == "arena" ||
      tipoProducto == "cal" ||
      tipoProducto == "cemento"
    ) {
      //Validar Precio
      if (precioProducto >= 0) {
        //Validar que la cantidad de bolsas no sea un numero negativo
        if (cantidadBolsas > 0) {
          totalBolsas += cantidadBolsas;
          precioTotal += precioProducto * cantidadBolsas;
          switch (tipoProducto) {
            case "arena":
              totalArena += cantidadBolsas;
              break;
            case "cal":
              totalCal += cantidadBolsas;
              break;
            case "cemento":
              totalCemento += cantidadBolsas;
              break;
          }
          if (masCaroPrecio < precioProducto || index == 0) {
            masCaroPrecio = precioProducto;
            masCaroTipo = tipoProducto.toUpperCase();
            index = 1;
          }
        } else {
          alert("La cantidad de bolsas debe ser 0 o mayor");
        }
      } else {
        alert("El precio debe ser mayor a 0");
      }
    } else {
      alert("Tipo de producto no disponible");
    }
    flag = confirm("¿Desea agregar otro producto?");
  } while (flag);

  //Analizo si corresponde un tipo de descuento y muestro el precio total
  if (totalBolsas > 10 && totalBolsas <= 30) {
    descuento = precioTotal * 0.15;
    precioDescuento = precioTotal - descuento;
    alert(
      "Por comprar más de 10 bolsas tiene un 15% de descuento: Precio total $" +
        precioTotal +
        ", Precio con descuento: $" +
        precioDescuento
    );
  } else if (totalBolsas > 30) {
    descuento = precioTotal * 0.25;
    precioDescuento = precioTotal - descuento;
    alert(
      "Por comprar más 30 bolsas tiene un 25% de descuento: Precio total $" +
        precioTotal +
        ", Precio con descuento: $" +
        precioDescuento
    );
  } else {
    alert("Precio total: $" + precioTotal);
  }

  //Busco el producto con mayor cantidad de bolsas

  if (totalArena > totalCal && totalArena > totalCemento) {
    alert("Se compró mas cantidad de arena");
  } else if (totalCal > totalArena && totalCal > totalCemento) {
    alert("Se compró mas cantidad de cal");
  } else {
    alert("Se compró mas cantidad de cemento");
  }

  //Tipo mas caro
  alert("El producto más caro es " + masCaroTipo);
}
