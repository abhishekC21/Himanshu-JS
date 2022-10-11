function Add() {
  document.getElementById("result").textcontent = "";
  let a = parseInt(prompt("Enter a number"));
  let b = parseInt(prompt("Enter a number"));
  document.getElementById("result").textcontent = a + b;
}
function Substract() {
  let a = parseInt(prompt("Enter a number"));
  let b = parseInt(prompt("Enter a number"));
  document.getElementById("result").textcontent = a - b;
}

function Multiply() {
  let a = parseInt(prompt("Enter a number"));
  let b = parseInt(prompt("Enter a number"));
  document.getElementById("result").textcontent = a * b;
}

function Divide() {
  let a = parseInt(prompt("Enter a number"));
  let b = parseInt(prompt("Enter a number"));
  document.getElementById("result").textcontent = a / b;
}
