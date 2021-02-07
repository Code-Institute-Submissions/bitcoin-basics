let tableBody = document.getElementById("coinPriceTable");
const currencies = ["barbadian-dollar", "malawian-kwacha", "south-african-rand"];

function fetchApi(currency) {
    fetch(`https://api.coincap.io/v2/rates/${currency}`).then(response => {
            //console.log(response);
            if (!status == 200) {
                console.error("ERROR");
            }
            return response.json();
        }).then(data => {
            console.log(data.data.symbol);
            $(tableBody).append(`<tr><td>${data.data.symbol}</td><td>${data.data.currencySymbol}</td><td>${data.data.rateUsd}</td></tr>`);

        })
        .catch(error => {
            console.log(error);
        });
}

currencies.forEach((currency) => {
    fetchApi(currency);
});





/*--------------Currency Calc---------


const select = document.querySelectorAll('select');
const input = document.querySelectorAll('input');
const API_URL = "https://api.coincap.io/v2/assets/bitcoin";
let html = "";
async function calcCurrency() {
    const res = await fetch(API_URL);
    const data = await res.json();

    const arrKeys = Object.keys(currencyRates);
    const currencyRates = data;
    console.log(arrKeys)

    arrKeys.map(item => {
        return html += `<option value=${item}>${item}</option>`;
    });
    console.log(html)
    for (let i = 0; i < select.length; i++) {
        select[i].innerHTML = html;
    }
};

calcCurrency();*/