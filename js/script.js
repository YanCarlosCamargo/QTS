const btnCalcular = document.getElementById("btnCalcular");

const handleCalc = function (e) {
  var valor01 = document.getElementById("valor01").value;
  var valor02 = document.getElementById("valor02").value;
  var operador = document.getElementById("operador").value;
  var resultado;

  switch (operador) {
    case "/":
      resultado = valor01 / valor02;
      alert(resultado);
      break;
    case "*":
      resultado = valor01 * valor02;
      alert(resultado);
      break;
    case "-":
      resultado = valor01 - valor02;
      alert(resultado);
      break;
    case "+":
      resultado = valor01 + valor02;
      alert(resultado);
      break;
    default:
      alert("insira um operador válido!")
      break;
  }

};

btnCalcular.addEventListener("click", handleCalc);
