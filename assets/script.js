// Assignment Code
var generateBtn = document.querySelector("#generate");
var passwordText = document.querySelector("#password");
var lowerCaseCheckBox = document.querySelector("#customControlValidation1");
var upperCaseCheckBox = document.querySelector("#customControlValidation2");
var numericCheckBox = document.querySelector("#customControlValidation3");
var specialCheckBox = document.querySelector("#customControlValidation4");
var passwordLength = document.querySelector("#validationServer01");

function getChars(range) {
  var charset = "";
  var i = 0;

  while (i < range.length) {
    var j = range[i][0];
    while (j <= range[i][1]) {
      charset += String.fromCharCode(j);
      j++;
    }
    i++;
  }
  return charset;
}

function getCharRanges(charTypes) {
  var range = [];
  if (charTypes[0]) {
    //ASCII a-z
    range.push([97, 122]);
  }
  if (charTypes[1]) {
    //ASCII A-Z
    range.push([65, 90]);
  }
  if (charTypes[2]) {
    //ASCII 0-9
    range.push([48, 57]);
  }
  if (charTypes[3]) {
    //ASCII specialCheckBox charTypes.
    range.push([33, 47], [58, 64], [91, 96], [123, 126]);
  }
  return range;
}

function generatePassword(passwordLength, charTypes) {
  var password = "";
  var charset = getChars(getCharRanges(charTypes));
  var i = 0;

  while (i < passwordLength) {
    var num = Math.floor(Math.random() * charset.length);
    password += charset[num];
    i++;
  }

  return password;
}

// Check if the entered password length is a number and between 8 and 128
function validateLength(len) {
  if (!isNaN(len) && len >= 8 && len <= 128) {
    return true;
  }
  return false;
}

// Write password to the #password input
function writePassword() {
  var charTypes = [
    lowerCaseCheckBox.checked,
    upperCaseCheckBox.checked,
    numericCheckBox.checked,
    specialCheckBox.checked
  ];
  if (!(charTypes[0] || charTypes[1] || charTypes[2] || charTypes[3])) {
    alert("Fail - check");
  } else if (validateLength(passwordLength.value)) {
    var password = generatePassword(passwordLength.value, charTypes);
    passwordText.value = password;
  } else {
    alert("Fail - password length");
  }
}

// Add event listener to generate button
generateBtn.addEventListener("click", writePassword);
