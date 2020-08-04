// Random Pin Number Generator
function pinGenerator() {
  const initialValue = document.getElementById("generated-pin-value");
  const pin = Math.floor(Math.random() * (9999 - 1000 + 1)) + 1000;
  initialValue.value = pin;
  document.getElementById("trial-left").innerText = 3;
}

// Input Number Button Function
const numbers = document.getElementsByClassName("number-buttons");
for (let i = 0; i < numbers.length; i++) {
  numbers[i].addEventListener("click", function () {
    var output = document.getElementById("typed-input-value").value;
    let values = numbers[i].innerText;
    if (output != NaN) {
      //if output is a number
      output = output + values;
      document.getElementById("typed-input-value").value = output;
    }
  });
}

// Clear Button
function clearField() {
  document.getElementById("typed-input-value").value = "";
}

//Backspace Button
function backspaceButton() {
  var output = document.getElementById("typed-input-value").value.toString();
  if (output) {
    //if output has a value
    output = output.substr(0, output.length - 1);
    document.getElementById("typed-input-value").value = output;
  }
}

// Pin Matcher
function pinMatch() {
  //Pin Compare
    if () {
        
    }
  const pin = document.getElementById("generated-pin-value").value;
  const inputValue = document.getElementById("typed-input-value").value;

  //Success/Fail Notification
  if (inputValue == pin && inputValue != "") {
    document.getElementById("success").style.display = "block";
    setTimeout(function () {
      document.getElementById("success").style.display = "none";
    }, 1000);
    document.getElementById("generated-pin-value").value = "";
  } else {
    document.getElementById("failed").style.display = "block";
    setTimeout(function () {
      document.getElementById("failed").style.display = "none";
    }, 1000);

    // Trail Number Updater
    const numberofTrials = document.getElementById("trial-left").innerText;
    const trialsLeft = numberofTrials - 1;
    document.getElementById("trial-left").innerText = trialsLeft;

    // Disbale Submit Button
    if (trialsLeft == 0) {
      document.getElementById("submit-button").disabled = true;
      document.getElementById("random-pin-generator").disabled = true;
      document.getElementById("submit-button").style.backgroundColor = "#9e9e9e";
      document.getElementById("random-pin-generator").style.backgroundColor = "#9e9e9e";
    }
  }
  clearField();
}
