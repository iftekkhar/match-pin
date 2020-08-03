function pinGenerator() {
    // const pin = 2000;
    const pin = Math.floor(Math.random() * (0 - 9 + 1)) + 9;
    document.getElementById('generated-pin-value').value = pin;
}

const numbers = document.getElementsByClassName('number-buttons');
for (let i = 0; i < numbers.length; i++) {
    numbers[i].addEventListener('click', function () {
        let values = numbers[i].innerText;
        document.getElementById('typed-input-value').value = values;
    })
}

function numberInput(x) {
    
}

function pinMatch() {
    const pin = document.getElementById('generated-pin-value').value;
    const inputValue = document.getElementById('typed-input-value').value;
    if (inputValue == pin) 
        document.getElementById('success').style.display = "block";
    else document.getElementById('failed').style.display = "block";
}