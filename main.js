document.getElementById("submit").addEventListener("click", function (e) {
    e.preventDefault();
    const resultDiv = document.getElementById("result");
    const getNumberFromInput = document.getElementById("numberInput").value;

    if (getNumberFromInput == "") {
        resultDiv.innerHTML = `<div class="alert alert-warning">Please field is empty!</div>`;
    } else {
        // Check if the number is even or odd
        if (getNumberFromInput % 2 === 0) {
            resultDiv.innerHTML = `<div class="alert alert-success">The number <strong>${getNumberFromInput}</strong> is <strong>Even</strong>.</div>`;
        } else {
            resultDiv.innerHTML = `<div class="alert alert-info">The number <strong>${getNumberFromInput}</strong> is <strong>Odd</strong>.</div>`;
        }
    }
});





document.getElementById("reset").addEventListener("click", function (e) {
    document.getElementById("numberInput").value='';
    document.getElementById("result").innerHTML='';
});