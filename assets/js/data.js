function sumar() {
  var num1 = Number(document.getElementById('n1').value);
  var num2 = Number(document.getElementById('n2').value);
  var res = num1 + num2;
  document.getElementById('re').value = res;
};

function dividir() {
  var num1 = Number(document.getElementById('n1').value);
  var num2 = Number(document.getElementById('n2').value);
  var res = num1 / num2;
  document.getElementById('re').value = res;
};

function multiplicar() {
  var num1 = Number(document.getElementById('n1').value);
  var num2 = Number(document.getElementById('n2').value);
  var res = num1 * num2;
  document.getElementById('re').value = res;
};

function restar() {
  var num1 = Number(document.getElementById('n1').value);
  var num2 = Number(document.getElementById('n2').value);
  var res = num1 - num2;
  document.getElementById('re').value = res;
};
