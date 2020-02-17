//declare a-z upper and lower
//declare 0-9
// declare special chars
//array of letters, numbers and specials

//scratch that ascii 32 -> 126
// lower 97-122
// upper 65-90
// special 33-47,58-64,91-96,123-126

// Assignment Code
var generateBtn = document.querySelector("#generate");
var passwordText = document.querySelector("#password");
var lower = document.querySelector("#customControlValidation1");
var upper = document.querySelector("#customControlValidation2");
var numeric = document.querySelector("#customControlValidation3");
var special = document.querySelector("#customControlValidation4");
var len = document.querySelector("#validationServer01");

function generatePassword(len, chars) {
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
  var chars = [lower.checked, upper.checked, numeric.checked, special.checked];

  if (!(chars[0] || chars[1] || chars[2] || chars[3])) {
    alert("Fail - check");
  } else if (validateLength(len.value)) {
    alert("generate password!");
    var password = generatePassword(len.value, chars);
    passwordText.value = password;
  } else {
    alert("Fail - password length");
  }
}

// Add event listener to generate button
generateBtn.addEventListener("click", writePassword);
