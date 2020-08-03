function pinGenerator() {
    // const pin = 2000;
    const pin = Math.floor(Math.random() * (9999 - 1000 + 1)) + 1000;
    document.getElementById('generated-pin-value').value = pin;
}

function pinMatch(value) {
    const pin = document.getElementById('generated-pin-value').value;
    if (value == pin) 
        document.getElementById('success').style.display = "block";
    else document.getElementById('failed').style.display = "block";
}