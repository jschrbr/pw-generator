var generateBtn = document.querySelector("#generate");
var passwordText = document.querySelector("#password");
var formEl = document.querySelector("form");
var checkBoxClassEl = document.querySelector(".custom-control-input");
var checkBoxAlert = document.querySelector(".alert");
checkBoxAlert.style.display = "none";

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
  if (!isNaN(len.value) && len.value >= 8 && len.value <= 128) {
    len.setAttribute("class", "form-control is-valid");
    return true;
  }
  len.setAttribute("class", "form-control is-invalid");
  return false;
}

// Check if at least 1 box is selcted
function validateBoxes(event) {
  var i = 0;
  checkBoxAlert.style.display = "none";
  while (i < event.length - 2) {
    event[i].classList.remove("is-invalid");
    if (event[i].checked) {
      while (++i < event.length - 2) {
        event[i].classList.remove("is-invalid");
      }
      return true;
    }
    i++;
  }
  checkBoxAlert.style.display = "block";
  i = 0;
  while (i < event.length - 2) {
    event[i].classList.remove("is-invalid");
    event[i].classList.add("is-invalid");
    i++;
  }
  return false;
}

// Write password to the #password input
function writePassword(event) {
  event.preventDefault();
  var charTypes = [];
  var i = 0;
  while (i < event.target.length - 2) {
    charTypes.push(event.target[i].checked);
    i++;
  }
  var validate = [validateLength(event.target[4]), validateBoxes(event.target)];
  if (validate[0] && validate[1]) {
    var password = generatePassword(event.target[4].value, charTypes);
    passwordText.value = password;
  }
}

// Add event listener to generate button
formEl.addEventListener("submit", writePassword);
