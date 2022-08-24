function solveRegExp(str) {
  return str.match(/[АЕЄИІЇОУЮЯЫ]/gi || []).length;
}

function solveFilter (str) { 
  return Array.from(str).filter(letter => "АЕЄИІЇОУЮЯаеєиіїоуюяЫы".includes(letter)).length;
}

function solveFunc(str) {
  const isVowel = (letter) => /^[АЕЄИІЇОУЮЯаеєиіїоуюяЫы]*$/.test(letter);
  let count = 0;
  for (let i = 0; i < str.length; i++) {
    if (isVowel(str[i]) == true) count++
  }
   return count;
} 

function handleSolve() {
  const inputData = document.querySelector('.test-input').value.toString();
  let outputData = solveRegExp(inputData);
  let outputData2 = solveFilter(inputData);
  let outputData3 = solveFunc(inputData);  
  document.querySelector('.test-input').value = "";
  document.querySelector('.test-out').innerHTML = "Input: " + inputData + "<br>" + "str.match(/[^АЕЄИІЇОУЮЯЫ]/gi || []).length : " + outputData + "<br>" + "Array.from(str).filter(letter => 'АЕЄИІЇОУЮЯаеєиіїоуюяЫы'.includes(letter)).length : " + outputData2 + "<br>" + "isVowel = (letter) => /^[АЕЄИІЇОУЮЯаеєиіїоуюяЫы]*$/.test(letter) : " + outputData3;
}

document.querySelector('.solve-btn').addEventListener('click', handleSolve); 