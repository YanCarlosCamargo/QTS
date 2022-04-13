const btnCalcular = document.getElementById("btnCalcular");
const divResultado = document.getElementById('badgeResultado');
const btnTeste = document.getElementById('btnTeste');
const opSelect = document.getElementById('styledSelect');

const handleCalc = function (e) {
  e.preventDefault();
  var valor01 = document.getElementById("valor01").value;
  var valor02 = document.getElementById("valor02").value;
  var operador = document.getElementById("operador").value;
  var resultado;

  switch (operador) {
    case "/":
      resultado = valor01 / valor02;
      divResultado.innerHTML = `<h1>Resultado: ${resultado}</h1>`
      
      break;
    case "*":
      resultado = valor01 * valor02;
      divResultado.innerHTML = `<h1>Resultado: ${resultado}</h1>`

      break;
    case "-":
      resultado = valor01 - valor02;
      divResultado.innerHTML = `<h1>Resultado: ${resultado}</h1>`

      break;
    case "+":
      resultado = valor01 + valor02;
      divResultado.innerHTML = `<h1>Resultado: ${resultado}</h1>`

      break;
    case '':
      resultado = valor01 + valor02;
      divResultado.innerHTML = `<h1>Resultado: ${resultado}</h1>`

      break;
    default:
      alert("insira um operador válido!")
      break;
  }

};

btnCalcular.addEventListener("click", handleCalc);

btnTeste.addEventListener('click', function() {
  const opSelect = document.getElementById('styledSelect');
  console.log(opSelect[opSelect.selectedIndex].value);
  switch (opSelect.selectedIndex) {
    case 1:
      caso1();
      break;
    case 2:
      caso2();
      break;
    case 3:
      caso3();
      break;
      case 4:
      caso4();
      break;
      case 5:
      caso5();
      break;
      case 6:
      caso6();
      break;
      case 7:
      caso7();
      break;
      case 8:
      caso8();
      break;
      case 9:
      caso9();
      break;
      case 10:
      caso10();
      break;
  
    default:
      break;
  }
})


function caso1() {
  var valor01 = document.getElementById("valor01");
  var valor02 = document.getElementById("valor02");
  var operador = document.getElementById("operador");
  valor01.value = '';
  valor02.value = 3;
  operador.value = '/';
  divResultado.innerHTML = `<h1>Resultado: null</h1>`;
}


function caso2() {
  var valor01 = document.getElementById("valor01");
  var valor02 = document.getElementById("valor02");
  var operador = document.getElementById("operador");
  valor01.value = 'A';
  valor02.value = 5;
  operador.value = '+';
  divResultado.innerHTML = `<h1>Resultado: A5</h1>`;
}


function caso3() {
  var valor01 = document.getElementById("valor01");
  var valor02 = document.getElementById("valor02");
  var operador = document.getElementById("operador");
  valor01.value = 5;
  valor02.value = 4;
  operador.value = '*/';
  divResultado.innerHTML = `<h1>Resultado: Invalid Operator</h1>`;
}

function caso4() {
  var valor01 = document.getElementById("valor01");
  var valor02 = document.getElementById("valor02");
  var operador = document.getElementById("operador");
  valor01.value = 3;
  valor02.value = 5;
  operador.value = 9;
  divResultado.innerHTML = `<h1>Resultado: 359</h1>`;
}

function caso5() {
  var valor01 = document.getElementById("valor01");
  var valor02 = document.getElementById("valor02");
  var operador = document.getElementById("operador");
  valor01.value = 3;
  valor02.value = 5;
  operador.value = '';
  divResultado.innerHTML = `<h1>Resultado: 35</h1>`;
}

function caso6() {
  var valor01 = document.getElementById("valor01");
  var valor02 = document.getElementById("valor02");
  var operador = document.getElementById("operador");
  valor01.value = 2;
  valor02.value = 0;
  operador.value = '/';
  divResultado.innerHTML = `<h1>Resultado: Infinity</h1>`;
}

function caso7() {
  var valor01 = document.getElementById("valor01");
  var valor02 = document.getElementById("valor02");
  var operador = document.getElementById("operador");
  valor01.value = '';
  valor02.value = '';
  operador.value = '';
  divResultado.innerHTML = `<h1>Resultado: </h1>`;
}

function caso8() {
  var valor01 = document.getElementById("valor01");
  var valor02 = document.getElementById("valor02");
  var operador = document.getElementById("operador");
  valor01.value = 9;
  valor02.value = 3;
  operador.value = 'soma';
  divResultado.innerHTML = `<h1>Resultado: 93soma</h1>`;
}

function caso9() {
  var valor01 = document.getElementById("valor01");
  var valor02 = document.getElementById("valor02");
  var operador = document.getElementById("operador");
  valor01.value = 0.1;
  valor02.value = 0.2;
  operador.value = '/';
  divResultado.innerHTML = `<h1>Resultado: 0.3</h1>`;
}

function caso10() {
  var valor01 = document.getElementById("valor01");
  var valor02 = document.getElementById("valor02");
  var operador = document.getElementById("operador");
  valor01.value = 0.4;
  valor02.value = 0.9;
  operador.value = '/';
  divResultado.innerHTML = `<h1>Resultado: 0.44</h1>`; 
}