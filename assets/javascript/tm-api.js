const API_KEY = "aogXWkLZYoHL6VP33CSwmGxFBaI7KfRK";
const ROOT_URL = "https://app.ticketmaster.com/discovery/v2/";
const EVENT_SEARCH = "events.json?";

/**
 * Search using the parameters defined in @options
 * @param {Object} options 
 */
function search(options) {
    let queryUrl = ROOT_URL + EVENT_SEARCH + "apikey=" + API_KEY;
    let params = Object.entries(options);
    params.forEach(function (param) {
        queryUrl += "&" + param[0] + "=" + param[1];
    });
    console.log(queryUrl);

    $.ajax({
        url: queryUrl,
        method: "GET"
    }).then(function (result) {
        // return result
        console.log(result);
        displayResult(result);
    }, function (error) {
        console.log(error);
    });
}

/**
 * Search for music event by a keyword
 * @param {string} keyword 
 */
function searchByKeyword(keyword) {
    search({
        keyword: keyword,
        classificationName: "music"
    });
}

/**
 * Search for a music event by city
 * @param {string} city 
 */
function searchByCity(city) {
    search({
        city: city,
        classificationName: "music"
    })
}

//onclick function to push data information into upcoming events cards
$(".hack-it").on("click", function (event) {
    event.preventDefault();
    $(".card--content").empty();
    var value = $("#user-input").val().trim();
    searchByKeyword(value);
    displayResult();
})



function displayResult(result) {
    //Update UI from HERE
    // <section class="card">
    //    <div class="card--content">
    //        <div class="card" style="width: 18rem;">
    //            <img src="..." class="card-img-top" alt="...">
    //            <div class="card-body">
    //                <h5 class="card-title">Adele</h5>
    //                <p class="card-text">Location: <span id="location"></span></p>
    //                <a href="#" class="btn btn-primary">Details</a>
    //            </div>
    //        </div>
    //    </div>
    //    <div class="card--content"></div>
    //</section>
    let target = $(".card--content");
    result["_embedded"].events.forEach(function (event) {
        let sectionCard = $("<section>")
            .addClass("card");
        let container = $("<div>")
            .addClass("card--content");
        let card = $("<div>")
            .addClass("card");
        let cardBody = $("<div>")
            .addClass("card-body");
        let image = $("<img>")
            .attr("src", event.images[0].url)
            .attr("width", "100")
            .addClass("card-img-top");
        let name = $("<h5>")
            .html(event.name);
        let location = $("<p>")
            .addClass("card-text")
            .html(event["_embedded"].venues[0].name);
        let details = $("<a>")
            .attr("href", event.url)
            .attr("target", "_blank")
            .addClass("btn btn-primary")
            .html("Details");
        sectionCard.append(
            container.append(
                card.append(
                    [image,
                        cardBody.append(
                            [name, location, details]
                        )]
                )
            )
        );
        // container.append(name);
        target.append(sectionCard);
    });
}
