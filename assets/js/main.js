let tableBody = document.getElementById("coinPriceTable");
let currencyListCodes = document.getElementById("currencyList")



const currencies = ["AED", "AFN", "ALL", "AMD", "ANG", "AOA", "ARS", "AUD", "AWG", "AZN", "BAM", "BBD", "BDT", "BGN", "BHD", "BIF", "BMD", "BND",
    "BOB", "BRL", "BSD", "BTN", "BWP", "BYR", "BZD", "CAD", "CDF", "CHF", "CLF", "CLP", "CNY", "COP", "CRC", "CUP", "CVE", "CZK", "DJF",
    "DKK", "DOP", "DZD", "EEK", "EGP", "ERN", "ETB", "EUR", "FJD", "FKP", "GBP", "GEL", "GHS", "GIP", "GMD", "GNF", "GTQ", "GYD", "HKD", "HNL",
    "HRK", "HTG", "HUF", "IDR", "ILS", "INR", "IQD", "IRR", "ISK", "JEP", "JMD", "JOD", "JPY", "KES", "KGS", "KHR", "KMF", "KPW", "KRW", "KWD",
    "KYD", "KZT", "LAK", "LBP", "LKR", "LRD", "LSL", "LTL", "LVL", "LYD", "MAD", "MDL", "MGA", "MKD", "MMK", "MNT", "MOP", "MRO", "MTL", "MUR",
    "MVR", "MWK", "MXN", "MYR", "MZN", "NAD", "NGN", "NIO", "NOK", "NPR", "NZD", "OMR", "PAB", "PEN", "PGK", "PHP", "PKR", "PLN", "PYG", "QAR",
    "RON", "RSD", "RUB", "RWF", "SAR", "SBD", "SCR", "SDG", "SEK", "SGD", "SHP", "SLL", "SOS", "SRD", "STD", "SVC", "SYP", "SZL", "THB", "TJS",
    "TMT", "TND", "TOP", "TRY", "TTD", "TWD", "TZS", "UAH", "UGX", "USD", "UYU", "UZS", "VEF", "VND", "VUV", "WST", "XAF", "XAG", "XAU", "XBT",
    "XCD", "XDR", "XOF", "XPF", "YER", "ZAR", "ZMK", "ZMW", "ZWL"
];


/*-------------------------Checkboxes---------------------------*/

function fillArray(currency) {
    fetch(`https://api.coindesk.com/v1/bpi/currentprice/${currency}.json`).then(response => {
        //console.log(response);
        if (!status == 200) {
            console.error("ERROR");
        }
        return response.json();
    }).then(data => {
        //console.log(data.bpi[`${currency}`].code);
        $(currencyListCodes).append(`<tr><td><input id="currencyList" type="checkbox" class="currencyCheck" value="${data.bpi[`${currency}`].code}">${data.bpi[`${currency}`].code}</td></tr>`);
        //console.log(currencyListCodes);
    })

}

currencies.forEach((checkedCurrencies) => {

    fillArray(checkedCurrencies);
    //console.log(fillArray(currency));
});

/*-------------------------Table Buttons---------------------------*/

/*-------------------------Submit Checked Boxes Button---------------------------*/
const checkedCurrencies = [];
$(document).ready(function () {

    $("#currButton").click(function () {


        $.each($("input[type='checkbox']:checked"), function () {

            checkedCurrencies.push($(this).val());


        });
        checkedCurrencies.forEach((currency) => {

            fetchApi(currency);
            //console.log(fillArray(currency));
        });
    });
});


/*-------------------------Display Checked Boxes In Table---------------------------*/


function fetchApi(currency) {
    fetch(`https://api.coindesk.com/v1/bpi/currentprice/${currency}.json`).then(response => {
            //console.log(response);
            if (!status == 200) {
                console.error("ERROR");
            }
            return response.json();
        }).then(data => {
            //console.log(data.bpi[`${currency}`].code);

            $(tableBody).append(`<tr><td>${data.bpi[`${currency}`].code}</td><td>${data.bpi[`${currency}`].description}</td><td>${data.bpi[`${currency}`].rate}</td></tr>`);

        })
        .catch(error => {
            console.log(error);
        });
}


/*-------------------------Reset Table Button---------------------------*/

$(document).ready(function () {
    $("#clearButton").click(function () {
        $(".currencyCheck").prop("checked", false);
        document.getElementById("coinPriceTable").innerHTML = "";

    });

});


/*-------------------------Navbar BitPrice---------------------------*/
let bPrice = document.getElementById("bitNavPrice");

function navbarPrice() {
    fetch('https://api.coindesk.com/v1/bpi/currentprice/BTC.json').then(response => {
            //console.log(response);
            if (!status == 200) {
                console.error("ERROR");
            }
            return response.json();
        }).then(data => {
            //console.log(data.bpi.USD.rate);
            $(`<a><div>${data.bpi.USD.code}:${data.bpi.USD.rate}</div></a>`);

        })
        .catch(error => {
            console.log(error);
        });

}
//console.log(navbarPrice());


/*-------------------------News---------------------------*/
const btcNews = document.getElementById("newsArticle");

function newsApi() {

    fetch('https://data.messari.io/api/v1/news/btc')
        .then((res) => {
            //console.log(res);
            if (!status == 200) {
                console.error("ERROR");
            }
            return res.json()
        })
        .then((data => {
            console.log(data);
            data.data.forEach(data => {
                let li = document.createElement('li');
                let a = document.createElement('a');
                a.setAttribute('href', data.url);
                a.setAttribute('target', '_blank')
                a.textContent = data.title;
                li.appendChild(a);
                newsContent(li);
            })

        }))

    function newsContent(li) {
        btcNews.appendChild(li);
    }

    newsApi();
}
/*-------------------------Chart---------------------------*/

//Historical data from:https://api.coindesk.com/v1/bpi/historical/close.json Powered by CoinDesk:https://www.coindesk.com/price/bitcoin,
//Chart JS Tutorial info from Excellence in Excel:https://www.youtube.com/watch?v=4jfcxxTT8H0
//Chart JS Tutorial info from Arslan:https://www.youtube.com/watch?v=mlSKLmG80Us&t=259s
//Api Powered by CoinDesk:https://www.coindesk.com/price/bitcoin

const xAxis = [];
const yRates = [];

chartBitcoin();

function chartBitcoin() {
    fetchHist();
    const ctx = document.getElementById('histData').getContext('2d');

    const chart = new Chart(ctx, {
        type: 'line',

        // The data for our dataset
        data: {
            labels: xAxis,
            datasets: [{
                fill: false,
                label: 'Bitcoin Rates For The Previous 31 Days',
                borderColor: 'rgb(255,153,0)',
                data: yRates,

            }]
        },

        // Configuration options go here
        options: {}
    });
}






function fetchHist() {
    fetch('https://api.coindesk.com/v1/bpi/historical/close.json').then(response => {
            //console.log(response);
            if (!status == 200) {
                console.error("ERROR");
            }
            return response.json();
        }).then(function (data) {
            //console.log(data);
            bitArray = data.bpi;
            let bitString = JSON.stringify(bitArray);
            //console.log(bitString);
            let bitItem = bitString.split(',');
            bitItem.forEach(itemObj => {
                const bpiItem = itemObj.split(':');
                const date = bpiItem[0];
                xAxis.push(date);
                const rate = bpiItem[1];
                yRates.push(rate);
                console.log(date, rate);
            });


        })

        .catch(error => {
            console.log(error);
        });
}