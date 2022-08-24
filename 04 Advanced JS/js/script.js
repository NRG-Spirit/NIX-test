function solve(array, number) {
  for (let i = 0; i < array.length; i++) {
    for (let j = i + 1; j < array.length; j++) {
      if (array[i] + array[j] == number) {
        let result = [i,j]
        return result;
      }
    }
  }
  return "[ ]";
}

function handleSolve() {
  const firstInput = document.querySelector('.firstInput').value;
  const secondInput = document.querySelector('.secondInput').value;
  const array = firstInput.split(",").map(item => item = Number(item));
  let outputData = solve(array, secondInput);
  document.querySelector('.firstInput').value = "";
  document.querySelector('.secondInput').value = "";
  document.querySelector('.test-out').innerHTML = firstInput + "<br>" + secondInput + "<br>" + outputData;
}

document.querySelector('.solve-btn').addEventListener('click', handleSolve); 