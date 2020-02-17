// Assignment Code
var generateBtn = document.querySelector("#generate");
var passwordText = document.querySelector("#password");
var lower = document.querySelector("#customControlValidation1");
var upper = document.querySelector("#customControlValidation2");
var numeric = document.querySelector("#customControlValidation3");
var special = document.querySelector("#customControlValidation4");
var len = document.querySelector("#validationServer01");

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

function getCharRanges(chars) {
  var range = [];
  if (chars[0]) {
    //ASCII a-z
    range.push([97, 122]);
  }
  if (chars[1]) {
    //ASCII A-Z
    range.push([65, 90]);
  }
  if (chars[2]) {
    //ASCII 0-9
    range.push([48, 57]);
  }
  if (chars[3]) {
    //ASCII special chars.
    range.push([33, 47], [58, 64], [91, 96], [123, 126]);
  }
  return range;
}

function generatePassword(len, chars) {
  var password = "";
  var range = getCharRanges(chars);
  var charset = getChars(range);
  var i = 0;

  while (i < len) {
    var num = Math.floor(Math.random() * charset.length);
    password += charset[num];
    i++;
  }
  return password;
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
    var password = generatePassword(len.value, chars);
    passwordText.value = password;
  } else {
    alert("Fail - password length");
  }
}

// Add event listener to generate button
generateBtn.addEventListener("click", writePassword);
