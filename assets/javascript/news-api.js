const NEWS_API_KEY = "b8eedf6f42bd4e6b88d88315b2f7c639";
const NEWS_SEARCH_URL = "https://newsapi.org/v2/everything?";
const TRENDING_CONTAINER = "#trending-container";

function newsSearch(options) {
    let queryUrl = NEWS_SEARCH_URL + "apikey=" + NEWS_API_KEY;

    options.pageSize = 20;
    options.page = 1;
    options.sources = "buzzfeed,entertainment-weekly,mashable,mtv-news,mtv-news-uk,the-lad-bible";

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
        displayNewsResult(result.articles, TRENDING_CONTAINER);
    }, function (error) {
        console.log(error);
    });
}

function newsSearchByKeyword(keyword) {
    newsSearch({
        q: keyword
    });
}

function displayNewsResult(articles, target) {
        // Available properties:
        // article.author
        // article.content
        // article.description
        // article.publishedAt -- date formatted as YYYY-MM-DDTHH:mm:ssz
        // article.source.name
        // article.title
        // article.url
        // article.urlToImage
    let targetElement = $(target);
    targetElement.empty();
        articles.forEach(function (article) {
            let container = $("<div>")
                .addClass("card sticky-action");
            let imageDiv = $("<div>")
                .addClass("card-image");
            let image = $("<img>")
                .attr("src", article.urlToImage);
            let iconLink = $("<a>")
                .attr("id", "article-like-button")
                .addClass("halfway-fab btn-floating green pulse");
            let icon = $("<i>")
                .addClass("material-icons")
                .html("check");
            let cardContentDiv = $("<div>")
                .addClass("card-content")
            let artistSpan = $("<span>")
                .addClass("card-title")
                .html(article.title);
            let detailsIconSpan = $("<span>")
                .addClass("card-title activator grey-text text-darken-4")
                .html("Details");
            let detailsIcon = $("<i>")
                .addClass("material-icons right")
                .html("more_vert");
            let locationSpan = $("<span>")
                .attr("id", "author")
                .html(article.author);
            let dateSpan = $("<span>")
                .attr("id", "date")
            let cardActionDiv = $("<div>")
                .addClass("card-action")
            let ticketsLink = $("<a>")
                .attr("href", article.url)
                .attr("target", "_blank")
                .html("View Article");
            let cardRevealDiv = $("<div>")
                .addClass("card-reveal");
            let cardRevealSpan = $("<span>")
                .addClass("card-title grey-text text-darken-4")
                .html(article.title);
            let closeIcon = $("<i>")
                .addClass("material-icons right")
                .html("close");
            
            container.append(
                imageDiv.append(
                    image, iconLink.append(icon)
                ),
                cardContentDiv.append(
                    artistSpan, detailsIconSpan.append(detailsIcon), locationSpan, dateSpan
                ),
                cardActionDiv.append(ticketsLink),
                cardRevealDiv.append(
                    [cardRevealSpan.append(closeIcon), article.description]
                )
            );
    
            targetElement.append(container);
        });
}