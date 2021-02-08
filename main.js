/*let tableBody = document.getElementById("coinPriceTable");
const currencies = ["barbadian-dollar", "malawian-kwacha", "south-african-rand", "salvadoran-colón", "indian-rupee", "chinese-yuan-renminbi",
    "chilean-unit-of-account-(uf)", "bosnia-herzegovina-convertible-mark", "cfa-franc-beac", "armenian-dram", "czech-republic-koruna",
    "kazakhstani-tenge", "chilean-peso", "bahraini-dinar", "guyanaese-dollar", "dominican-peso", "cuban-peso", "swazi-lilangeni", "cfa-franc-bceao",
    "cambodian-riel", "thai-baht", "moldovan-leu", "eritrean-nakfa", "mongolian-tugrik", "euro", "azerbaijani-manat", "costa-rican-colón",
    "mozambican-metical", "gibraltar-pound", "manx-pound", "sierra-leonean-leone", "ugandan-shilling", "argentine-peso", "north-korean-won",
    "russian-ruble", "canadian-dollar", "australian-dollar", "israeli-new-sheqel", "saint-helena-pound", "zimbabwean-dollar", "fijian-dollar",
    "surinamese-dollar", "icelandic-króna", "lebanese-pound", "uruguayan-peso", "hong-kong-dollar", "bolivian-boliviano", "serbian-dinar",
    "peruvian-nuevo-sol", "mexican-peso", "tanzanian-shilling", "comorian-franc", "guatemalan-quetzal", "japanese-yen", "congolese-franc",
    "indonesian-rupiah", "danish-krone", "bangladeshi-taka", "georgian-lari", "south-korean-won", "somali-shilling", "maldivian-rufiyaa",
    "east-caribbean-dollar", "vietnamese-dong", "lesotho-loti", "saudi-riyal", "botswanan-pula", "cayman-islands-dollar", "libyan-dinar",
    "paraguayan-guarani", "belarusian-ruble", "waves", "croatian-kuna", "qtum", "binance-coin", "special-drawing-rights", "brazilian-real",
    "papua-new-guinean-kina", "iranian-rial", "burundian-franc", "yemeni-rial", "malagasy-ariary", "ethiopian-birr", "bitcoin", "silver-ounce",
    "mauritian-rupee", "romanian-leu", "macanese-pataca", "dogecoin", "british-pound-sterling", "solomon-islands-dollar", "myanma-kyat", "cfp-franc",
    "platinum-ounce", "jersey-pound", "jordanian-dinar", "kenyan-shilling", "belize-dollar", "nepalese-rupee", "dash", "rwandan-franc",
    "mauritanian-ouguiya", "namibian-dollar", "hungarian-forint", "turkish-lira", "tajikistani-somoni", "new-taiwan-dollar",
    "trinidad-and-tobago-dollar", "iraqi-dinar", "macedonian-denar", "vanuatu-vatu", "omani-rial", "malaysian-ringgit", "ethereum", "litecoin",
    "zambian-kwacha", "kyrgystani-som", "singapore-dollar", "gambian-dalasi", "angolan-kwanza", "ghanaian-cedi", "liberian-dollar",
    "united-arab-emirates-dirham", "afghan-afghani", "bitcoin-cash", "panamanian-balboa", "honduran-lempira", "guernsey-pound", "colombian-peso",
    "egyptian-pound", "aruban-florin", "polish-zloty", "bulgarian-lev", "laotian-kip", "nigerian-naira", "djiboutian-franc", "ves", "bermudan-dollar",
    "zcash", "swedish-krona", "united-states-dollar", "tether", "new-zealand-dollar", "kuwaiti-dinar", "cape-verdean-escudo", "swiss-franc",
    "uzbekistan-som", "jamaican-dollar", "algerian-dinar", "chinese-yuan-(offshore)", "tunisian-dinar", "norwegian-krone", "falkland-islands-pound",
    "venezuelan-bolívar-fuerte", "pakistani-rupee", "sri-lankan-rupee", "philippine-peso", "netherlands-antillean-guilder", "brunei-dollar",
    "samoan-tala", "haitian-gourde", "ukrainian-hryvnia", "cuban-convertible-peso", "syrian-pound", "guinean-franc", "qatari-rial", "sudanese-pound"
];

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
});*/

let tableBody = document.getElementById("coinPriceTable");
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

function fetchApi(currency) {
    fetch(`https://api.coindesk.com/v1/bpi/currentprice/${currency}.json`).then(response => {
            //console.log(response);
            if (!status == 200) {
                console.error("ERROR");
            }
            return response.json();
        }).then(data => {
            console.log(data.bpi[`${currency}`].code);
            $(tableBody).append(`<tr><td>${data.bpi[`${currency}`].code}</td><td>${data.bpi[`${currency}`].description}</td><td>${data.bpi[`${currency}`].rate}</td></tr>`);

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