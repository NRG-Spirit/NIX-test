function timeCorrect(data) {
  let incorrectTime = data.split(":");
  for (i = 2; i >= 0; i--) {
    if (i != 0) {
      incorrectTime[i - 1] = Number(incorrectTime[i - 1]) + Math.floor(Number(incorrectTime[i]) / 60);
      incorrectTime[i] = (Number(incorrectTime[i]) % 60).toString();
      if (incorrectTime[i].length == 1) {
        incorrectTime[i] = "0" + incorrectTime[i];
      }
    }
    else {
      incorrectTime[i] = (Number(incorrectTime[i]) % 24).toString();
      if (incorrectTime[i].length == 1) {
        incorrectTime[i] = "0" + incorrectTime[i];
      }
    }
    correctTime = incorrectTime.join(":");
  }
  return correctTime;
}

function handleSolve() {
  const inputData = document.querySelector('.test-input').value.toString();
  let outputData = timeCorrect(inputData);
  document.querySelector('.test-input').value = "";
  document.querySelector('.test-out').innerHTML = "Input: " + inputData + "<br>" + "Out: " + outputData;
}

document.querySelector('.solve-btn').addEventListener('click', handleSolve); 