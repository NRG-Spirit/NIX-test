function solve(str1, str2) {
  if (str1.length > str2.length + 1 || str1.length < str2.length - 1) {
    return false;
  }
  else {
    let count = 0;
    for (let i = 0; i < str1.length; i++) {
      if (str1[i] != str2[i]) {
        break;
      }
      count++;
    }
    str1=str1.split("").reverse().join("");
    str2=str2.split("").reverse().join("");    
    for (let i = 0; i < str1.length; i++) {
      if (str1[i] != str2[i]) {
        break;
      }
      count++;
    }
    if (count >= str1.length - 1 && count >= str2.length - 1 ) {
      return true;
    }
    else {
      return false;
    }
  }
}

function handleSolve() {
  const firstInput = document.querySelector('.firstInput').value;
  const secondInput = document.querySelector('.secondInput').value;
  let outputData = solve(firstInput, secondInput);
  document.querySelector('.firstInput').value = "";
  document.querySelector('.secondInput').value = "";
  document.querySelector('.test-out').innerHTML = firstInput+"<br>"+secondInput+"<br>"+outputData;
}

document.querySelector('.solve-btn').addEventListener('click', handleSolve); 