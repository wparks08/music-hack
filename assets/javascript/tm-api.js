const API_KEY = "aogXWkLZYoHL6VP33CSwmGxFBaI7KfRK";
const ROOT_URL = "https://app.ticketmaster.com/discovery/v2/";
const EVENT_BY_ID_URL = "https://app.ticketmaster.com/discovery/v2/events/"
const EVENT_SEARCH = "events.json?";

/**
 * Search using the parameters defined in @options
 * @param {Object} options 
 */
function search(options, target) {
    let queryUrl = ROOT_URL + EVENT_SEARCH + "apikey=" + API_KEY;

    options.classificationName = "music";
    options.sort = "date,asc";

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
        displayResult(result, target);
    }, function (error) {
        console.log(error);
    });
}

/**
 * get an event by the supplied ID, and display it in the "target" element
 * "target" should be an element id, eg "#target-element"
 * @param {string} id 
 * @param {string} target 
 */
function getEventById(id, target) {
    let queryUrl = EVENT_BY_ID_URL + id + "?apikey=" + API_KEY;

    $.ajax({
        url: queryUrl,
        method: "GET"
    }).then(function (result) {
        console.log(result);
        let properties = getEventProperties(result);
        //DO STUFF TO DISPLAY
    }, function (error) {
            console.log(error);
    })
}

/**
 * Search for music event by a keyword
 * @param {string} keyword 
 * @param {string} target
 */
function searchByKeyword(keyword, target) {
    search({
        keyword: keyword
    }, target);
}

/**
 * Search for a music event by city
 * @param {string} city 
 * @param {string} target
 */
function searchByCity(city, target) {
    search({
        city: city
    }, target)
}

/**
 * Search by both keyword and city, and display the result in "target"
 * @param {string} keyword 
 * @param {string} city 
 * @param {string} target 
 */
function searchByKeywordAndCity(keyword, city, target) {
    search({
        keyword: keyword,
        city: city
    }, target);
}

//onclick function to push data information into upcoming events cards
$("#hack-it").on("click", function (event) {
    event.preventDefault();
    console.log("this kind of works")
    // $(".card--content").empty();
    $("#card-row-container").empty();
    var valueArtist = $("#artistSearch").val().trim();
    searchByKeyword(valueArtist, "#card-row-container");
})



function displayResult(result, target) {
    let targetElement = $(target);
    result["_embedded"].events.forEach(function (event) {
        var properties = getEventProperties(event);

        // let sectionCard = $("<section>")
        //     .addClass("card");
        let container = $("<div>")
            .addClass("card");
        let imageDiv = $("<div>")
            .addClass("card-image");
        let image = $("<img>")
            .attr("src", properties.imageUrl);
        let iconLink = $("<a>")
            .attr("href", "#")
            .addClass("halfway-fab btn-floating pink pulse");
        let icon = $("<i>")
            .addClass("material-icons")
            .html("favorite");
        let cardContentDiv = $("<div>")
            .addClass("card-content")
        let artistSpan = $("<span>")
            .addClass("card-title")
            .html(properties.name);
        let locationSpan = $("<span>")
            .attr("id", "location")
            .html(properties.location.city + ", " + properties.location.state);
        let venueSpan = $("<span>")
            .attr("id", "venue")
            .html(properties.location.venue);
        let dateSpan = $("<span>")
            .attr("id", "date")
        let cardActionDiv = $("<div>")
            .addClass("card-action")
        let detailsLink = $("<a>")
            .attr("href", "#")
            .html("details");
        let ticketsLink = $("<a>")
            .attr("href", "#")
            .html("Buy Tickets");

        container.append(
            imageDiv.append(
                image, iconLink.append(icon)
            ),
            cardContentDiv.append(
                artistSpan, locationSpan, venueSpan, dateSpan
            ),
            cardActionDiv.append(
                detailsLink, ticketsLink
            )
        );

        targetElement.append(container);



    });
}

function getEventProperties(event) {
    let properties = {
        name: getName(event),
        imageUrl: getImageUrl(event),
        location: getLocation(event),
        eventUrl: getEventUrl(event, this)
    }


    return properties
}

function getName(event) {
    try {
        return event.name;
    } catch (error) {
        console.debug(error);
        return "";
    }
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