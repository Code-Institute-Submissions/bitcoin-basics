/*-------------------------Chart---------------------------*/

// Historical data from:https://api.coindesk.com/v1/bpi/historical/close.json Powered by CoinDesk:https://www.coindesk.com/price/bitcoin,
// Chart JS Tutorial info from Excellence in Excel:https://www.youtube.com/watch?v=4jfcxxTT8H0
// Chart JS Tutorial info from Arslan:https://www.youtube.com/watch?v=mlSKLmG80Us&t=259s
// Api Powered by CoinDesk:https://www.coindesk.com/price/bitcoin

//Variables
const xAxis = [];
const yRates = [];

//Display API data in the chart.
function chartBitcoin(data) {
    const ctx = document.getElementById('histData').getContext('2d');
    const chart = new Chart(ctx, {
        type: 'line',
        data: {
            labels: xAxis,

            datasets: [{
                label: 'Bitcoin Rates For The Previous 31 Days',

                data: yRates,
                fill: false,

                borderColor: 'rgb(255,153,0)',
            }]
        },
    });
}

// Call API data, convert JSON object into a string and split the data so the date can be pushed to the X axis and 
// the rate can be pushed to the Y axis.

function fetchHist() {
    fetch('https://api.coindesk.com/v1/bpi/historical/close.json').then(response => {
            if (!status == 200) {
                alert("ERROR");
            }
            return response.json();
        }).then(function (data) {
            bitArray = data.bpi;
            let bitString = JSON.stringify(bitArray);
            let bitItem = bitString.split(',');
            bitItem.forEach(itemObj => {
                const bpiItem = itemObj.split(':');
                const date = bpiItem[0];
                xAxis.push(date);
                const rate = bpiItem[1];
                yRates.push(rate);

            });
            chartBitcoin(data);
        })
        .catch(error => {
            alert("ERROR, api failed to load data");
        });
}
fetchHist();