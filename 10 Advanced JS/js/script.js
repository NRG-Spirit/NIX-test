function check_password(pass) {
  if (pass.length > 20) return false;
  const re = new RegExp(/(?=.*[A-Z])(?=.*[a-z])(?=.*\d)(?=.*[!@#$%^&*?])[a-zA-Z0-9!@#$%^&*?]{8,20}/);
  return re.test(pass);
}

function handleSolve() {
  const pass = document.querySelector('.test-input').value;
  let outputData = check_password(pass);
  document.querySelector('.test-input').value = "";
  document.querySelector('.test-out').innerHTML = "Input: " + pass + "<br>" + "Out: " + outputData;
}

document.querySelector('.solve-btn').addEventListener('click', handleSolve); 