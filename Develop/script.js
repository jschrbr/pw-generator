//Check checks
//import regex
//declare a-z upper and lower
//declare 0-9
// declare special chars
//array of letters, numbers and specials
// get pwlength

//

//scratch that ascii 32 -> 126
// lower 97-122
// upper 65-90
// special 33-47,58-64,91-96,123-126

// Assignment Code
var generateBtn = document.querySelector("#generate");

function generatePassword() {
  return;
}

function validateLength(len) {
  if (!isNaN(len) && len > 7 && len < 129) {
    return true;
  }
  return false;
}

// Write password to the #password input
function writePassword() {
  var passwordText = document.querySelector("#password");
  var lower = document.querySelector("#customControlValidation1").checked;
  var upper = document.querySelector("#customControlValidation2").checked;
  var numeric = document.querySelector("#customControlValidation3").checked;
  var special = document.querySelector("#customControlValidation4").checked;
  var len = document.querySelector("#validationServer01").value;
  if (!(upper || lower || numeric || special)) {
    alert("Fail - check");
  } else if (validateLength(len)) {
      alert("generate password!")
    //     var password = generatePassword();
    // passwordText.value = password;
  } else {
    alert("Fail - password length");
  }
}

// Add event listener to generate button
generateBtn.addEventListener("click", writePassword);
