function daysRepresented(data) {
  const count = data.reduce((accum, item) => {
    return accum = accum + (item[1] - item[0] + 1)
  }, 0);
  return count;
}

function handleSolve() {
  const inputData = document.querySelector('.test-input').value;
  array = JSON.parse(inputData)
  let outputData = daysRepresented(array);
  document.querySelector('.test-input').value = "";
  document.querySelector('.test-out').innerHTML = "Input: " + inputData + "<br>" + "Out: " + outputData;
}

document.querySelector('.solve-btn').addEventListener('click', handleSolve); 