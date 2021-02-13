function mostrar() {
  //Declaro variables
  let lista_productos = new Array();
  let producto;
  let entrada_tipo;
  let entrada_precio;
  let entrada_cantidad;
  let entrada_marca;
  let entrada_fabricante;
  let valido;
  let lista_alcoholes = new Array();
  let alcohol_barato;
  let cantidad_jabones;

  for (let index = 0; index < 5; index++) {
    //Entrada de datos
    entrada_tipo = prompt("Tipo de producto (Alcohol,Jabon,Barbijo)");
    entrada_precio = parseInt(prompt("Precio (Entra 100 y 300)"));
    entrada_cantidad = parseInt(
      prompt("Cantidad de unidades (Entre 1 y 1000)")
    );
    entrada_marca = prompt("Marca");
    entrada_fabricante = prompt("Fabricante");

    //Validar tipo:
    if (
      entrada_tipo == "Alcohol" ||
      entrada_tipo == "Jabon" ||
      entrada_tipo == "Barbijo"
    ) {
      valido = true;
    } else {
      valido = false;
      alert("Tipo de producto inválido");
    }

    //Validar precio:
    if (entrada_precio < 100 || entrada_precio > 300) {
      valido = false;
      alert("El rango de precio es entra 100 y 300");
    }

    //Validad cantidad:
    if (entrada_cantidad <= 0 || entrada_cantidad > 1000) {
      valido = false;
      alert("La cantidad debe estar entre 1 y 1000");
    }

    // Agrego el producto al array de lista_productos
    if (!valido) {
      alert("Producto mal cargado");
    } else {
      switch (entrada_tipo) {
        case "Alcohol":
          producto = {
            Tipo: entrada_tipo,
            Precio: entrada_precio,
            Cantidad: entrada_cantidad,
            Marca: entrada_marca,
            Fabricante: entrada_fabricante,
          };
          lista_productos.push(producto);
          break;
        case "Jabon":
          producto = {
            Tipo: entrada_tipo,
            Precio: entrada_precio,
            Cantidad: entrada_cantidad,
            Marca: entrada_marca,
            Fabricante: entrada_fabricante,
          };
          lista_productos.push(producto);
          break;
        case "Barbijo":
          producto = {
            Tipo: entrada_tipo,
            Precio: entrada_precio,
            Cantidad: entrada_cantidad,
            Marca: entrada_marca,
            Fabricante: entrada_fabricante,
          };
          lista_productos.push(producto);
          break;
      }
      alert("Producto cargado correctamente!!");
    }
  }

  cantidad_jabones = 0;
  //Itero lista de productos cargados
  for (let index = 0; index < lista_productos.length; index++) {
    // Si el producto es de tipo jabon, sunmo el valor de cantidad
    if (lista_productos[index].Tipo == "Jabon") {
      cantidad_jabones += lista_productos[index].Cantidad;
    }
    if (lista_productos[index].Tipo == "Alcohol") {
      lista_alcoholes.push(lista_productos[index]);
    }
  }

  //Obtengo alcohol barato
  alcohol_barato = lista_alcoholes.find((elemento) =>
    Math.min(elemento.Precio)
  );

  //Respuesta a
  alert(
    "Alcohol mas barato -Fabricante: " +
      alcohol_barato.Fabricante +
      " Cantidad: " +
      alcohol_barato.Cantidad +
      " de unidades"
  );
  //Repuuesta c
  alert("Cantidad de jabones: " + cantidad_jabones);
}
