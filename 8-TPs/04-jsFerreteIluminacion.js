/*4.	Para el departamento de iluminación:
Tomando en cuenta que todas las lámparas están en oferta al mismo precio de $35 pesos final.
A.	Si compra 6 o más  lamparitas bajo consumo tiene un descuento del 50%. 
B.	Si compra 5  lamparitas bajo consumo marca "ArgentinaLuz" se hace un descuento del 40 % y si es de otra marca el descuento es del 30%.
C.	Si compra 4  lamparitas bajo consumo marca "ArgentinaLuz" o “FelipeLamparas” se hace un descuento del 25 % y si es de otra marca el descuento es del 20%.
D.	Si compra 3  lamparitas bajo consumo marca "ArgentinaLuz"  el descuento es del 15%, si es  “FelipeLamparas” se hace un descuento del 10 % y si es de otra marca un 5%.
E.	Si el importe final con descuento suma más de $120  se debe sumar un 10% de ingresos brutos en informar del impuesto con el siguiente mensaje:
 ”Usted pago X de IIBB.”, siendo X el impuesto que se pagó. 

 */
function CalcularPrecio() {
  let cantidad = parseInt(document.getElementById("txtIdCantidad").value);
  let marca = document.getElementById("Marca").value;
  let precio = document.getElementById("txtIdprecioDescuento").value;
  let lampara = cantidad * 35;

  switch (marca) {
    case "ArgentinaLuz":
      if (cantidad == 5) {
        document.getElementById("txtIdprecioDescuento").value =
          lampara - (lampara * 40) / 100;
      } else if (cantidad == 4) {
        document.getElementById("txtIdprecioDescuento").value =
          lampara - (lampara * 25) / 100;
      } else {
        lampara == 3;
        document.getElementById("txtIdprecioDescuento").value =
          lampara - (lampara * 15) / 100;
      }
      break;

    case "FelipeLamparas":
      if (cantidad == 5) {
        document.getElementById("txtIdprecioDescuento").value =
          lampara - (lampara * 30) / 100;
      } else if (cantidad == 4) {
        document.getElementById("txtIdprecioDescuento").value =
          lampara - (lampara * 25) / 100;
      } else {
        lampara == 3;
        document.getElementById("txtIdprecioDescuento").value =
          lampara - (lampara * 10) / 100;
      }
      break;

    case "JeLuz":
      if (cantidad == 5) {
        document.getElementById("txtIdprecioDescuento").value =
          lampara - (lampara * 30) / 100;
      } else if (cantidad == 4) {
        document.getElementById("txtIdprecioDescuento").value =
          lampara - (lampara * 20) / 100;
      } else {
        lampara == 3;
        document.getElementById("txtIdprecioDescuento").value =
          lampara - (lampara * 5) / 100;
      }
      break;

    case "HazIluminacion":
      if (cantidad == 5) {
        document.getElementById("txtIdprecioDescuento").value =
          lampara - (lampara * 30) / 100;
      } else if (cantidad == 4) {
        document.getElementById("txtIdprecioDescuento").value =
          lampara - (lampara * 20) / 100;
      } else {
        lampara == 3;
        document.getElementById("txtIdprecioDescuento").value =
          lampara - (lampara * 5) / 100;
      }
      break;

    case "Osram ":
      if (cantidad == 5) {
        document.getElementById("txtIdprecioDescuento").value =
          lampara - (lampara * 30) / 100;
      } else if (cantidad == 4) {
        document.getElementById("txtIdprecioDescuento").value =
          lampara - (lampara * 20) / 100;
      } else {
        lampara == 3;
        document.getElementById("txtIdprecioDescuento").value =
          lampara - (lampara * 5) / 100;
      }
      break;
    default:
      document.getElementById("txtIdprecioDescuento").value =
        lampara - (lampara * 50) / 100;
      break;
  }
}
