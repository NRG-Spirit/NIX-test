function solve(str, num) {
  if (str.length > num) {
    str = str.slice(0, num)+'...'
  }
  return str
}

function handleSolve() {
  const str = document.querySelector('.firstInput').value;
  const num = Number(document.querySelector('.secondInput').value);
  let outputData = solve(str, num);
  document.querySelector('.firstInput').value = "";
  document.querySelector('.secondInput').value = "";
  document.querySelector('.test-out').innerHTML = str + "<br>" + num + "<br>" + outputData;
}

document.querySelector('.solve-btn').addEventListener('click', handleSolve); 