const btcNews = document.getElementById("newsArticle");

//Calls the API data (News Articles of Bitcoin) and appends them in a list.
function newsApi() {

    fetch('https://data.messari.io/api/v1/news/btc')
        .then((res) => {
            return res.json();
        })
        .then((data => {
            data.data.forEach(data => {
                let li = document.createElement('li');
                let a = document.createElement('a');
                a.setAttribute('href', data.url);
                a.setAttribute('target', '_blank');
                //BUG Fix: Add style to alter text colour into JavaScript
                a.style.color = 'black';
                a.textContent = data.title;
                li.appendChild(a);
                newsContent(li);
            });
        }));

    function newsContent(li) {
        btcNews.appendChild(li);
    }
}
newsApi();