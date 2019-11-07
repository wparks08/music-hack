const NEWS_API_KEY = "b8eedf6f42bd4e6b88d88315b2f7c639";
const NEWS_SEARCH_URL = "https://newsapi.org/v2/everything?";

function newsSearch(options) {
    let queryUrl = NEWS_SEARCH_URL + "apikey=" + NEWS_API_KEY;

    let params = Object.entries(options);
    params.forEach(function (param) {
        queryUrl += "&" + param[0] + "=" + param[1];
    });

    console.log(queryUrl);

    $.ajax({
        url: queryUrl,
        method: "GET"
    }).then(function (result) {
        console.log(result);
    }, function (error) {
        console.log(error);
    });
}

function newsSearchByKeyword(keyword) {
    newsSearch({
        q: keyword
    });
}

function displayNewsResult(articles) {
    let target = $("#trending"); //change this
    articles.forEach(function (article) {
        // Available properties:
        // article.author
        // article.content
        // article.description
        // article.publishedAt -- date formatted as YYYY-MM-DDTHH:mm:ssz
        // article.source.name
        // article.title
        // article.url
        // article.urlToImage
    })
}