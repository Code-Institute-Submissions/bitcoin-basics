let tableBody = document.getElementById("coinPriceTable");
let currencyListCodes = document.getElementById("currencyList")



const currencies = ["AUD", "CAD", "CNY", "EUR", "GBP", "INR", "JMD", "JPY", "NGN", "RSD", "RUB", "USD", "XAG", "XAU", "XBT", "ZAR"];


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
            //console.log(res);
            return res.json()
        })
        .then((data => {
            //console.log(data);
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
newsApi();