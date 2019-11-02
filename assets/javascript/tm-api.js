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
    params.forEach(function(param) {
        queryUrl += "&" + param[0] + "=" + param[1];
    });
    console.log(queryUrl);

    $.ajax({
        url: queryUrl,
        method: "GET" 
    }).then(function(result) {
        console.log(result);
    }, function(error) {
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