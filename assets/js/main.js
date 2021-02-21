let tableBody = document.getElementById("coinPriceTable");
let currencyListCodes = document.getElementById("currencyList")



const currencies = ["AUD", "CNY", "EUR", "GBP", "INR", "JMD", "JPY", "NGN", "RUB", "USD", "XAU"];


/*-------------------------Checkboxes---------------------------*/

function fillArray(currency) {
    fetch(`https://api.coindesk.com/v1/bpi/currentprice/${currency}.json`).then(response => {
        if (!status == 200) {
            console.error("ERROR");
        }
        return response.json();
    }).then(data => {
        $(currencyListCodes).append(`<tr><td><input id="currencyList" type="checkbox" class="currencyCheck" value="${data.bpi[`${currency}`].code}">(${data.bpi[`${currency}`].code}) ${data.bpi[`${currency}`].description}</td></tr>`);
    })
}
currencies.forEach((checkedCurrencies) => {
    fillArray(checkedCurrencies);
});

/*-------------------------Submit Checked Boxes Button---------------------------*/
const checkedCurrencies = [];
$(document).ready(function () {
    $("#currButton").click(function () {
        $.each($("input[type='checkbox']:checked"), function () {
            checkedCurrencies.push($(this).val());
        });
        checkedCurrencies.forEach((currency) => {
            fetchApi(currency);
        });
    });
});

/*-------------------------Reset Table Button---------------------------*/

$(document).ready(function () {
    $("#clearButton").click(function () {
        $(".currencyCheck").prop("checked", false);
        document.getElementById("coinPriceTable").innerHTML = "";
    });
});

/*-------------------------Select All Button---------------------------*/

$(document).ready(function () {
    $("#selectAll").click(function () {
        $(".currencyCheck").prop("checked", true);
        document.getElementById("coinPriceTable").innerHTML = "";
    });
});

/*-------------------------Display Checked Boxes In Table---------------------------*/

function fetchApi(currency) {
    fetch(`https://api.coindesk.com/v1/bpi/currentprice/${currency}.json`).then(response => {
            if (!status == 200) {
                console.error("ERROR");
            }
            return response.json();
        }).then(data => {
            $(tableBody).append(`<tr><td>${data.bpi[`${currency}`].code}</td><td>${data.bpi[`${currency}`].description}</td><td>${data.bpi[`${currency}`].rate}</td></tr>`);
        })
        .catch(error => {
            console.log(error);
        });
}