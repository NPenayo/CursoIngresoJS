function mostrar() {
  let tipoProducto;
  let precioProducto;
  let cantidadProducto;
  let marcaProducto;
  let fabricanteProducto;
  let alcoholBaratoPrecio = 0;
  let alcoholBaratoMarca;
  let alcoholBaratoFabricante;
  let cantidadalcoholes = 0;
  let cantidadBarbijos = 0;
  let cantidadJabones = 0;
  let promedioCompra;

  //Inicia el bucle para solicitar los productos
  for (let index = 0; index <= 5; index++) {
    tipoProducto = prompt(
      "Tipo de producto: (Alcohol/Barbijo/Jabon)"
    ).toLowerCase();
    precioProducto = parseInt(prompt("Precio por unidad:"));
    cantidadProducto = parseInt(prompt("Cantidad de unidades:"));
    marcaProducto = prompt("Marca:");
    fabricanteProducto = prompt("Fabricante:");
    //Hago todas las validaciones correspondientes

    //Validar tipo
    if (
      tipoProducto != "alcohol" ||
      tipoProducto != "jabon" ||
      tipoProducto != "barbijo"
    ) {
      //Validar precio
      if (!(precioProducto < 100 || precioProducto > 300)) {
        //Validar cantidad
        if (!(cantidadProducto <= 0 || cantidadProducto > 1000)) {
          switch (tipoProducto) {
            case "alcohol":
              //Guardo los datos del alcohol mas barato
              if (precioProducto < alcoholBaratoPrecio || index == 0) {
                alcoholBaratoPrecio = precioProducto;
                alcoholBaratoMarca = marcaProducto;
                alcoholBaratoFabricante = fabricanteProducto;
                console.log("Alcohol mas barato: " + alcoholBaratoPrecio);
              }
              cantidadalcoholes += cantidadProducto;
              break;
            case "jabon":
              cantidadJabones += cantidadProducto;
              break;
            case "barbijo":
              cantidadBarbijos += cantidadProducto;
              break;
          }
        } else {
          alert(
            "La cantidad no puede ser negativa, cero o superar las mil unidades"
          );
        }
      } else {
        alert("El rango de precio debe estar entre 100 y 300");
      }
    } else {
      alert("Tipo de producto inválido");
      index--;
    }
  }

  //Muestro los datos del alcohol mas barato
  alert(
    "Alcohol más barato| Marca: " +
      alcoholBaratoMarca +
      " Fabricante: " +
      alcoholBaratoFabricante
  );
  //Analizo cual es el producto con mayor cantidad, calculo el promedio y lo muestro
  if (
    cantidadalcoholes > cantidadBarbijos &&
    cantidadalcoholes > cantidadJabones
  ) {
    promedioCompra = (cantidadalcoholes / 5).toFixed(2);
    alert(
      "Tipo de producto con mayor cantidad: Alcohol " +
        promedioCompra +
        "promedio"
    );
  } else if (
    cantidadBarbijos > cantidadalcoholes &&
    cantidadBarbijos > cantidadJabones
  ) {
    promedioCompra = (cantidadBarbijos / 5).toFixed(2);
    alert(
      "Tipo de producto con mayor cantidad: Barbijos " +
        promedioCompra +
        "promedio"
    );
  } else {
    promedioCompra = (cantidadJabones / 5).toFixed(2);
    alert(
      "Tipo de producto con mayor cantidad: Jabones " +
        promedioCompra +
        "promedio"
    );
  }

  // Muestro el total de jabones
  alert("Cantidad total de jabones comprados: " + cantidadJabones);
}
