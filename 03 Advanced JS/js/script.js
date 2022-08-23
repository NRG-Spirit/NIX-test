function solve(str) {
  const isUpperCase = (letter) => /^[A-ZА-ЯІЄҐ]*$/.test(letter);
  let count = 0;
  for (let i = 0; i < str.length; i++) {
    if (isUpperCase(str[i]) == true) count++
  }
  if (count >= str.length / 2) {
    str = str.toUpperCase()
  }
  else {
    str = str.toLowerCase()
  }
  return str;
}

function handleSolve() {
  const inputData = document.querySelector('.test-input').value.toString();
  let outputData = solve(inputData);
  document.querySelector('.test-input').value = "";
  document.querySelector('.test-out').innerHTML = "Input: " + inputData + "<br>" + "Out: " + outputData;
}

document.querySelector('.solve-btn').addEventListener('click', handleSolve); 