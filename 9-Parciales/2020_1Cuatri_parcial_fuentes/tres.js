function mostrar() {
  //------------------ Declarar variables --------------------------
  let nombre;
  let edad;
  let sexo;
  let estCivil;
  let temperatura;
  let mayorTemperaturaValor = 0;
  let mayorTemperaturaNombre;
  let cantidadViudos = 0;
  let cantHombresSoV = 0;
  let cantidadAncianos = 0;
  let promedioEdadHS;
  let sumaEdadHombresS = 0;
  let cantidadHombresS = 0;
  let flag;
  let index = 0;

  do {
    //------------------ Obtener los datos de entrada---------------------

    nombre = prompt("Nombre del pasajero:");
    edad = parseInt(prompt("Edad:"));
    sexo = prompt("Sexo:").toLowerCase();
    estCivil = prompt("Estado civil:").toLowerCase();
    temperatura = parseInt(prompt("Temperatura corporal:"));

    //------------------ Validar los datos de entrada---------------------

    //Validar sexo
    if (sexo == "f" || sexo == "m") {
      //Validar estado civil
      if (
        estCivil == "soltero" ||
        estCivil == "casado" ||
        estCivil == "viudo"
      ) {
        //Validar la edad
        if (edad > 0) {
          //Validar la temperatura
          if (temperatura > 35 && temperatura < 45) {
            //Con cada iteración establecemos la mayor temperatura
            if (mayorTemperaturaValor < temperatura || index == 0) {
              mayorTemperaturaValor = temperatura;
              mayorTemperaturaNombre = nombre;
              index = 1;
            }
            //Mayores de edad viudos
            if (edad >= 18 && estCivil == "viudo") {
              cantidadViudos++;
            }

            // Hombres solteros o viudos

            if (sexo == "m" && (estCivil == "soltero" || estCivil == "viudo")) {
              cantHombresSoV++;
            }

            // Personas de la 3ra edad con mas de 38 de temperatura
            if (edad > 60 && temperatura > 38) {
              cantidadAncianos++;
            }
            // Cuento los hombres solteros y sumo sus edades para luego obtener un promedio
            if (sexo == "m" && estCivil == "soltero") {
              sumaEdadHombresS += edad;
              cantidadHombresS++;
            }
          } else {
            alert("El pasajero está muerto o a punto de morir");
          }
        } else {
          alert("Error al cargar la edad");
        }
      } else {
        alert("Estado civil inválido");
      }
    } else {
      alert("El sexo debe ser F o M");
    }

    flag = confirm("¿Cargar los datos de otro pasajero?");
  } while (flag);

  // --------- PUNTO A ----------------
  alert("Persona con más temperatura: " + mayorTemperaturaNombre);

  //---------- PUNTO B -----------------
  alert("Mayores de edad viudos: " + cantidadViudos);

  // ---------- PUNTO C ----------------
  alert("Cantidad de hombres no casados: " + cantHombresSoV);

  // ----------- PUNTO D ----------------
  alert("Mayores de 60 con más de 38 de temperatura: " + cantidadAncianos);

  // ----------- PUNTO E ------------------
  promedioEdadHS = sumaEdadHombresS / cantidadHombresS;
  alert("Promedio de edad de los hombres solteros: " + promedioEdadHS);
}
