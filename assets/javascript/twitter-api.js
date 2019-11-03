const API_KEY = "QI216OMoMHN78IzFdDir86A4k";
const SEARCH_URL = "https://api.twitter.com/1.1/search/tweets.json";

function search(options) {
    let queryUrl = SEARCH_URL;
    let params = Object.entries(options);
    params.forEach(function (param) {
        queryUrl += "&" + param[0] + "=" + param[1];
    });

    //ajax call
    //need to dive into docs to figure out oAuth for Twitter authentication...
}

function searchByKeyword(keyword) {
    search({
        q: keyword,
        count: 20
    })
}