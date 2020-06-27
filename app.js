//square
function square() {
  var a = document.calculator.display.value;
  var sq = a * a;
  document.calculator.display.value = sq;
}
//cube
function cubee() {
  var a = document.calculator.display.value;
  var cub = a * a * a;
  document.calculator.display.value = cub;
}
//root
function sqRoot() {
  var c = document.calculator.display.value;
  document.calculator.display.value = eval(c * 0.5);
}
function fact() {
  var n = document.calculator.display.value;
  var c, r = 1;
  for (c = 1; c <= n; c++)
    r = r * c;
  document.calculator.display.value = r;
}
function del() {
  var result = document.getElementById('cButton');
  document.calculator.result.display.value = result.display.value.slice(0, -1);
}
function per() {
  var x = document.calculator.display.value;
  document.calculator.display.value = Math.per(x);
}
function pii() {
  var n = document.calculator.display.value;
  var pi = n * 3.14;
  document.calculator.display.value = pi;
}
function sinn() {
  var x = document.calculator.display.value;
  document.calculator.display.value = Math.sin(x);
}
function coss() {
  var x = document.calculator.display.value;
  document.calculator.display.value = Math.cos(x);
}
function tann() {
  var x = document.calculator.display.value;
  document.calculator.display.value = Math.tan(x);
}
function rad() {
  var x = document.calculator.display.value;
  var rad = x * (3.14 / 180);
  document.calculator.display.value = rad;
}
function rad() {
  var x = document.calculator.display.value;
  var deg = x * (180 / 3.14);
  document.calculator.display.value = deg;
}
function log() {
  var x = document.calculator.display.value;
  document.calculator.display.value = Math.log(x);
}
function inv() {
  var x = document.calculator.display.value;
  document.calculator.display.value = eval(x * 1 / x);
}
function power(x, y) {
  var x = document.calculator.display.value;
  var y = document.calculator.display.value;
  document.calculator.display.value = Math.pow(x, y);
}