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