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
        $(currencyListCodes).append(`<tr><td><input id="currencyList" type="checkbox" class="currencyCheck" value="${data.bpi[`${currency}`].code}">(${data.bpi[`${currency}`].code}) ${data.bpi[`${currency}`].description}</td></tr>`);
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

/*-------------------------News---------------------------*/
const btcNews = document.getElementById("newsArticle");

function newsApi() {

    fetch('https://data.messari.io/api/v1/news/btc')
        .then((res) => {
            console.log(res);
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
}
console.log(newsApi());





/*-------------------------Light/Dark Toggle---------------------------*/

document.addEventListener("keyup", function (event) {

    if (event.key == "l" || event.key == "L") {
        lightTheme();
    }
    if (event.key == "d" || event.key == "D") {
        darkTheme();
    }
});

function lightTheme() {
    el = document.getElementById("mainDiv");
    el.classList.remove("dark");
    el.classList.add("light");
}

function darkTheme() {
    el = document.getElementById("mainDiv");
    el.classList.remove("light");
    el.classList.add("dark");
}