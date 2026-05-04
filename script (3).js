function calculateNumber() {
  let num1 = (document.getElementById("num1").value);
  let num2 = (document.getElementById("num2").value);

  let res = Number(num1) + Number(num2)

  document.getElementById("result").textContent = res;
}

function calculateMinus() {
  let num3 = document.getElementById("num3").value;
  let num4 = document.getElementById('num4').value;

  let res = Number(num3) - Number(num4)

  document.getElementById("result2").textContent = res;
}

function calculateMultiply() {
  let num1 = document.getElementById("num5").value;
  let num2 = document.getElementById("num6").value;

  let res = Number(num1) * Number(num2)

  document.getElementById("result3").textContent = res;
}

function calculateDivision(){
  let num1 = document.getElementById("num7").value;
  let num2 = document.getElementById("num8").value;

  let res = Number(num1) / Number(num2)

  document.getElementById("result4").textContent = res;
}
//john Doe

// htoo thar



