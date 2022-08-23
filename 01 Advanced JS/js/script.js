function solve(inputData) {
  let numbers = inputData.split(/[-+*/]+/);
  let result = inputData.split("").reverse().join("");
  for (let i = 0; i < numbers.length; i++) {
    number = numbers[i].split("").reverse().join("")
    result = result.replace(number, numbers[i])
  }
  return result;
}

function handleSolve() {
  const inputData = document.querySelector('.test-input').value.toString();
  let outputData = solve(inputData);
  document.querySelector('.test-input').value = "";
  document.querySelector('.test-out').innerHTML = "Input: " + inputData + "<br>" + "Out: " + outputData;
}

document.querySelector('.solve-btn').addEventListener('click', handleSolve); 