//Variables
let tableBody = document.getElementById("coinPriceTable");
let currencyListCodes = document.getElementById("currencyList");
const currencies = ["AUD", "CNY", "EUR", "GBP", "INR", "JMD", "JPY", "NGN", "RUB", "USD", "XAU"];

/*-------------------------Checkboxes---------------------------*/

// Calls API and iterates over each country code, displaying each country Code as a checkbox.

function fillArray(currency) {
    fetch(`https://api.coindesk.com/v1/bpi/currentprice/${currency}.json`).then(response => {
        if (!status == 200) {
            alert("ERROR, api failed to load data");
        }
        return response.json();
    }).then(data => {
        $(currencyListCodes).append(`<tr><td><input id="currencyList" type="checkbox" class="currencyCheck" value="${data.bpi[`${currency}`].code}">(${data.bpi[`${currency}`].code}) ${data.bpi[`${currency}`].description}</td></tr>`);
    });
}
currencies.forEach((checkedCurrencies) => {
    fillArray(checkedCurrencies);
});

/*-------------------------Submit Checked Boxes Button---------------------------*/

//Pushes API data for checked checkboxes into display table.

let checkedCurrencies = [];
$(document).ready(function () {
    $("#currButton").click(function () {
        resetTable();
        $.each($("input[type='checkbox']:checked"), function () {
            checkedCurrencies.push($(this).val());
        });
        checkedCurrencies.forEach((currency) => {
            fetchApi(currency);
        });
        checkedCurrencies = [];
    });
});

/*-------------------------Reset Table Button---------------------------*/

//Clears any data in the table and any checked checkboxes.

$(document).ready(function () {
    $("#clearButton").click(function () {
        resetTable();
        $(".currencyCheck").prop("checked", false);
    });
});

/*-------------------------Select All Button---------------------------*/

//Selects all the checkboxes.

$(document).ready(function () {
    $("#selectAll").click(function () {
        resetTable();
        $(".currencyCheck").prop("checked", true);
    });
});

//BUG Fix: Add this function to clear the results from the table and prevent the results accumulating.
function resetTable() {
    document.getElementById("coinPriceTable").innerHTML = "";
}

/*-------------------------Display Checked Boxes In Table---------------------------*/

//Calls the API data and appends it in rows of the table.
function fetchApi(currency) {
    fetch(`https://api.coindesk.com/v1/bpi/currentprice/${currency}.json`).then(response => {
            if (!status == 200) {
                alert("ERROR, api failed to load data");
            }
            return response.json();
        }).then(data => {
            $(tableBody).append(`<tr><td>${data.bpi[`${currency}`].code}</td><td>${data.bpi[`${currency}`].description}</td><td>${data.bpi[`${currency}`].rate}</td></tr>`);
        })
        .catch(error => {
            alert("ERROR, api failed to load data");
        });
}