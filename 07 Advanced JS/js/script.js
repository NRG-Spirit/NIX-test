function solve(str, num) {
  const alphabet = ['a', 'b', 'c', 'd', 'e', 'f', 'g', 'h', 'i', 'j', 'k', 'l', 'm', 'n', 'o', 'p', 'q', 'r', 's', 't', 'u', 'v', 'w', 'x', 'y', 'z']
  while ((num > 0) && (str.length > 0)) {
    for (let i = 0; i < alphabet.length; i++) {
      const index = str.toLowerCase().indexOf(alphabet[i]);
      if (index >= 0) {
        str = str.slice(0, index) + str.slice(index + 1);
        num--;
        break;
      }
    }
  }
  return str;
}

function handleSolve() {
  const str = document.querySelector('.test-input').value.toString();
  const num = Number(document.querySelector('.secondInput').value);
  let outputData = solve(str, num);
  document.querySelector('.test-input').value = "";
  document.querySelector('.secondInput').value = "";
  document.querySelector('.test-out').innerHTML = str + "<br>" + num + "<br>" + "Out : " + outputData;
}

document.querySelector('.solve-btn').addEventListener('click', handleSolve); 