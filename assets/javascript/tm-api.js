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

function searchByKeywordAndCity(keyword, city) {
    search({
        keyword: keyword,
        city: city,
        classificationName: "music"
    });
}

//onclick function to push data information into upcoming events cards
$(".hack-it").on("click", function (event) {
    event.preventDefault();
    $(".card--content").empty();
    var value = $("#user-input").val().trim();
    searchByKeyword(value);
})



function displayResult(result) {
    let target = $("#upcoming-events");
    result["_embedded"].events.forEach(function (event) {
        var properties = getEventProperties(event);

        let sectionCard = $("<section>")
            .addClass("card");
        let container = $("<div>")
            .addClass("card--content");
        let card = $("<div>")
            .addClass("card");
        let cardBody = $("<div>")
            .addClass("card-body");
        let image = $("<img>")
            .attr("src", properties.imageUrl)
            .attr("width", "100")
            .addClass("card-img-top");
        let name = $("<h5>")
            .html(event.name);
        let location = $("<p>")
            .addClass("card-text")
            .html(properties.location.venue);
        let cityState = $("<p>")
            .addClass("card-text")
            .html(properties.location.city + ", " + properties.location.state)
        let details = $("<a>")
            .attr("href", properties.eventUrl)
            .attr("target", "_blank")
            .addClass("btn btn-primary")
            .html("Details");
        sectionCard.append(
            container.append(
                card.append(
                    [image,
                        cardBody.append(
                            [name, location, cityState, details]
                        )]
                )
            )
        );
        target.append(sectionCard);
    });
}

function getEventProperties(event) {
    let properties = {
        imageUrl:  getImageUrl(event),
        location: getLocation(event),
        eventUrl: getEventUrl(event, this)
    }


    return properties
}

function getImageUrl(event) {
    try {
        return event.images[0].url;
    } catch (error) {
        console.debug(error);
        return "";
    }
}

function getLocation(event) {
    return {
        venue: getVenue(event, this),
        city: getCity(event, this),
        state: getState(event, this)
    };
}

function getVenue(event) {
    try {
        return event["_embedded"].venues[0].name;
    } catch (error) {
        console.debug(error);
        return "";
    }
}

function getCity(event) {
    try {
        return event["_embedded"].venues[0].city.name;
    } catch (error) {
        console.debug(error);
        return "";
    }
}

function getState(event) {
    try {
        return event["_embedded"].venues[0].state.stateCode;
    } catch (error) {
        console.debug(error);
        return "";
    }
}

function getEventUrl(event) {
    try {
        return event.url;
    } catch (error) {
        console.debug(error);
        return "#";
    }
}