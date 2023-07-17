const numbers = document.querySelectorAll(".number");
const operators = document.querySelectorAll(".operator");
const equals = document.querySelector(".equals");
const result = document.querySelector("#result");
const clearBtn = document.querySelector(".clear");

let num1 = "";
let num2 = "";
let changed = false;
let operation = "";

numbers.forEach((number) => {
  number.addEventListener("click", (e) => {
    if (!changed) {
      num1 += e.target.innerHTML; //num1 = num1 + e.target.innerHtml
      result.value = num1;
    } else {
      num2 += e.target.innerHTML; //num1 = num1 += e.target.innerHtml
      result.value = num2;
    }
  });
});

operators.forEach((operator) => {
  operator.addEventListener("click", (e) => {
    if (!changed) {
      change = true;
    }

    switch (e.target.innerHTML) {
      case "+":
        operation = "add";
        break;

      case "-":
        operation = "minus";
        break;

      case "*":
        operation = "times";
        break;

      case "/":
        operation = "division";
        break;
    }
  });
});

equals.addEventListener("click", () => {
  switch (operation) {
    case "add":
      result.value = Number(num1) + Number(num2);
      break;

    case "minus":
      result.value = Number(num1) - Number(num2);
      break;

    case "times":
      result.value = Number(num1) * Number(num2);
      break;

    case "division":
      result.value = Number(num1) / Number(num2);
      break;
  }
});

clearBtn.addEventListener("click", () => {
  result.value = "";
  num1 = "";
  num2 = "";
  changed = false;
});
