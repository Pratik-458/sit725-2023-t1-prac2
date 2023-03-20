async function userAction(apiRoute, num1, num2) {
    
  const url = `http://localhost:3000/${apiRoute}?num1=${num1}&num2=${num2}`;
  const response = await fetch(url);
  const myJson = await response.json();
  return myJson.data;
}

function getResponse(num1, num2, operator){
  switch (operator) {
  case "+":
    return userAction("addtwonumbers", num1, num2); 
  case "-":
    return userAction("subtracttwonumbers", num1, num2);
  case "/":
    return userAction("dividetwonumbers", num1, num2);
  case "*":
    return userAction("multiplytwonumbers", num1, num2);
  default:
    return "Error something is missing!";
  }
}

// Function that evaluates the digit and return result
async function solve() {
  let x = document.getElementById("num1").value;
  let y = document.getElementById("num2").value;
  let opr = document.getElementById("operator").value;
  let response = await getResponse(x, y, opr);
  document.getElementById("result").innerHTML = response;
}

// Function that clear the display
function clr() {
  document.getElementById("result").innerHTML = "Welcome to My calculator";
}