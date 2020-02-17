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

function validateInputs() {
  return true;
}

// Write password to the #password input
function writePassword() {
  var passwordText = document.querySelector("#password");

  if (validateInputs()) {
    var password = generatePassword();

    passwordText.value = password;
  } else {
  }
}

// Add event listener to generate button
generateBtn.addEventListener("click", writePassword);
