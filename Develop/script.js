//Check checks
//import regex
//declare a-z upper and lower
//declare 0-9
// declare special chars
//array of letters, numbers and specials
// get pwlength

// 

// Assignment Code
var generateBtn = document.querySelector("#generate");

// Write password to the #password input
function writePassword() {
  var password = generatePassword();
  var passwordText = document.querySelector("#password");

  passwordText.value = password;

}

// Add event listener to generate button
generateBtn.addEventListener("click", writePassword);
