function Reset() {
    document.getElementsByClassName("bill-input")[0].value = '0 ';
    document.getElementsByClassName("people-input")[0].value = '0 ';
    document.getElementsByClassName("total")[0].innerText = '$0.00';
    document.getElementsByClassName("pay-person")[0].innerText = '$0.00';
    document.getElementsByClassName("custom-input")[0].value = 'Custom';
}

function calc(tipP) {
    var billVal = parseFloat(billInput.value);
    var personVal = parseFloat(personInput.value);
    var tipAmountPerPerson = (((billVal / personVal) * (tipP / 100)));
    var totalPerPerson = (billVal / personVal) + tipAmountPerPerson;
    document.getElementsByClassName("total")[0].innerText = "$" + totalPerPerson.toLocaleString("en-US", { maximumFractionDigits: 2, minimumFractionDigits: 2 });
    document.getElementsByClassName("pay-person")[0].innerText = "$" + tipAmountPerPerson.toLocaleString("en-US", { maximumFractionDigits: 2, minimumFractionDigits: 2 });
}


var reset = document.getElementsByClassName("reset")[0];
var billInput = document.getElementsByClassName("bill-input")[0];
var personInput = document.getElementsByClassName("people-input")[0];
var total = document.getElementsByClassName("total")[0];
var payPerson = document.getElementsByClassName("pay-person")[0];
var precent = document.querySelectorAll(".num-precent");
var customInput = document.getElementsByClassName("custom-input")[0];
var calculatorBtn = document.querySelector(".calc");
var tipPrecent = 0;


reset.addEventListener("click", function () {
    Reset();
});

precent.forEach(function (e) {
    e.addEventListener("click", function () {
        tipPrecent = e.innerText.slice(0, -1);
        tipPrecent = parseFloat(tipPrecent);
    });
});

var clicks = 0;

customInput.addEventListener("click", function () {
    if (clicks === 0) {
        document.getElementsByClassName("custom-input")[0].value = '';
    }
    clicks++;
});

billInput.addEventListener("click", function () {
    document.getElementsByClassName("bill-input")[0].value = '';
});

personInput.addEventListener("click", function () {
    document.getElementsByClassName("people-input")[0].value = '';
});

calculatorBtn.addEventListener("click", function () {
    if (clicks > 0) {
        tipPrecent = customInput.value.slice(0, -1);
        tipPrecent = parseFloat(tipPrecent);
        clicks = 0;
    }
    calc(tipPrecent);
});