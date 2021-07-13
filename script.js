"use strict";
const ac = document.getElementById("allClear");
const plusMinus = document.getElementById("plusMinus");
const percentage = document.getElementById("percentage");
const divide = document.getElementById("divide");
const seven = document.getElementById("seven");
const eight = document.getElementById("eight");
const nine = document.getElementById("nine");
const multiply = document.getElementById("multiply");
const four = document.getElementById("four");
const five = document.getElementById("five");
const six = document.getElementById("six");
const minus = document.getElementById("minus");
const one = document.getElementById("one");
const two = document.getElementById("two");
const three = document.getElementById("three");
const plus = document.getElementById("plus");
const zero = document.getElementById("zeroo");
const decimal = document.getElementById("decimal");
const equal = document.getElementById("equal");

let input = document.getElementById("text");
let firstValue = 0;
let secondValue = 0;
let operator = 0;
let result = 0;

const clear = function () {
  firstValue = 0;
  operator = 0;
  secondValue = 0;
  result = 0;
  input.value = 0;
};
clear();

ac.addEventListener("click", clear);

one.onclick = function () {
  if (input.value == 0) {
    firstValue = input.value = 1;
    firstValue = Number(firstValue);
  } else {
    firstValue = input.value = "" + firstValue + 1;
    firstValue = Number(firstValue);
  }
};
two.onclick = function () {
  if (input.value == 0) {
    firstValue = input.value = 2;
    firstValue = Number(firstValue);
  } else {
    firstValue = input.value = "" + firstValue + 2;
    firstValue = Number(firstValue);
  }
};
three.onclick = function () {
  if (input.value == 0) {
    firstValue = input.value = 3;
    firstValue = Number(firstValue);
  } else {
    firstValue = input.value = "" + firstValue + 3;
    firstValue = Number(firstValue);
  }
};
four.onclick = function () {
  if (input.value == 0) {
    firstValue = input.value = 4;
    firstValue = Number(firstValue);
  } else {
    firstValue = input.value = "" + firstValue + 4;
    firstValue = Number(firstValue);
  }
};
five.onclick = function () {
  if (input.value == 0) {
    firstValue = input.value = 5;
    firstValue = Number(firstValue);
  } else {
    firstValue = input.value = "" + firstValue + 5;
    firstValue = Number(firstValue);
  }
};
six.onclick = function () {
  if (input.value == 0) {
    firstValue = input.value = 6;
    firstValue = Number(firstValue);
  } else {
    firstValue = input.value = "" + firstValue + 6;
    firstValue = Number(firstValue);
  }
};
seven.onclick = function () {
  if (input.value == 0) {
    firstValue = input.value = 7;
    firstValue = Number(firstValue);
  } else {
    firstValue = input.value = "" + firstValue + 7;
    firstValue = Number(firstValue);
  }
};
eight.onclick = function () {
  if (input.value == 0) {
    firstValue = input.value = 8;
    firstValue = Number(firstValue);
  } else {
    firstValue = input.value = "" + firstValue + 8;
    firstValue = Number(firstValue);
  }
};
nine.onclick = function () {
  if (input.value == 0) {
    firstValue = input.value = 9;
    firstValue = Number(firstValue);
  } else {
    firstValue = input.value = "" + firstValue + 9;
    firstValue = Number(firstValue);
  }
};
zero.onclick = function () {
  if (input.value == 0) {
    firstValue = input.value = 0;
    firstValue = Number(firstValue);
  } else {
    firstValue = input.value = "" + firstValue + 0;
    firstValue = Number(firstValue);
  }
};
decimal.onclick = function () {
  firstValue = input.value = "" + firstValue + ".";
};
plusMinus.onclick = function () {
  if (input.value == 0) {
    firstValue = input.value = 0 * -1;
    firstValue = Number(firstValue);
  } else {
    firstValue = input.value = "" + firstValue * -1;
    firstValue = Number(firstValue);
  }
};
plus.onclick = function () {
  if (input.value == 0) {
  } else if (secondValue == 0) {
    secondValue = firstValue;
    input.value = "";
    operator = "+";
  } else {
    if (operator == "+") {
      result = secondValue + firstValue;
      secondValue = input.value = result;
      firstValue = "";
      operator = "+";
    } else if (operator == "-") {
      result = secondValue - firstValue;
      secondValue = input.value = result;
      firstValue = "";
      operator = "+";
    } else if (operator == "*") {
      result = secondValue * firstValue;
      secondValue = input.value = result;
      firstValue = "";
      operator = "+";
    } else if (operator == "/") {
      result = secondValue / firstValue;
      secondValue = input.value = result;
      firstValue = "";
      operator = "+";
    }
  }
};
minus.onclick = function () {
  if (input.value == 0) {
  } else if (secondValue == 0) {
    secondValue = firstValue;
    input.value = "";
    operator = "-";
  } else {
    if (operator == "+") {
      result = secondValue + firstValue;
      secondValue = input.value = result;
      firstValue = "";
      operator = "-";
    } else if (operator == "-") {
      result = secondValue - firstValue;
      secondValue = input.value = result;
      firstValue = "";
      operator = "-";
    } else if (operator == "*") {
      result = secondValue * firstValue;
      secondValue = input.value = result;
      firstValue = "";
      operator = "-";
    } else if (operator == "/") {
      result = secondValue / firstValue;
      secondValue = input.value = result;
      firstValue = "";
      operator = "-";
    }
  }
};
multiply.onclick = function () {
  if (input.value == 0) {
  } else if (secondValue == 0) {
    secondValue = firstValue;
    input.value = "";
    operator = "*";
  } else {
    if (operator == "+") {
      result = secondValue + firstValue;
      secondValue = input.value = result;
      firstValue = "";
      operator = "*";
    } else if (operator == "-") {
      result = secondValue - firstValue;
      secondValue = input.value = result;
      firstValue = "";
      operator = "*";
    } else if (operator == "*") {
      result = secondValue * firstValue;
      secondValue = input.value = result;
      firstValue = "";
      operator = "*";
    } else if (operator == "/") {
      result = secondValue / firstValue;
      secondValue = input.value = result;
      firstValue = "";
      operator = "*";
    }
  }
};
divide.onclick = function () {
  if (input.value == 0) {
  } else if (secondValue == 0) {
    secondValue = firstValue;
    input.value = "";
    operator = "/";
  } else {
    if (operator == "+") {
      result = secondValue + firstValue;
      secondValue = input.value = result;
      firstValue = "";
      operator = "/";
    } else if (operator == "-") {
      result = secondValue - firstValue;
      secondValue = input.value = result;
      firstValue = "";
      operator = "/";
    } else if (operator == "*") {
      result = secondValue * firstValue;
      secondValue = input.value = result;
      firstValue = "";
      operator = "/";
    } else if (operator == "/") {
      result = secondValue / firstValue;
      secondValue = input.value = result;
      firstValue = "";
      operator = "/";
    }
  }
};
percentage.onclick = function () {
  if (input.value == 0) {
  } else {
    result = input.value = firstValue / 100;
    firstValue = 0;
  }
};

equal.onclick = function () {
  if (operator == "+") {
    result = secondValue + firstValue;

    input.value = result;
    firstValue = "";
  } else if (operator == "-") {
    result = secondValue - firstValue;

    input.value = result;
    firstValue = 0;
  } else if (operator == "*") {
    result = secondValue * firstValue;
    input.value = result;
    firstValue = 0;
  } else if (operator == "/") {
    result = secondValue / firstValue;
    input.value = result;
    firstValue = 0;
  }
};
