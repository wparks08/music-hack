eventFavorites = [];


function toggleEventLike(element) {
    var eventIconInfo = $(element).attr("data")

    $(element).attr("data", $(element).attr("data-alt"))
    $(element).attr("data-alt", eventIconInfo)



    var eventIcon = $(element).attr("id", "favorite-icon");
    if (eventIcon.html() === "favorite") {
        eventIcon.html("favorite_border");
    }
    else {
        eventIcon.html("favorite");
    }

}

function toggleTrendingLike(element) {
    var trendingIconInfo = $(element).attr("data")
    $(element).attr("data", $(element).attr("data-alt"))
    $(element).attr("data-alt", trendingIconInfo)



    var icon = $(element).attr("id", "check-icon");
    if (icon.html() === "done") {
        icon.html("done_all");
    }
    else {
        icon.html("done");
    }
}









//onclick button function that takes the contents of the entire event card and pushes up to
//event favorites array 
//for loop that displays contents of look in carousel card 
//check for repeats in cards??
// var eventFavorites = JSON.parse(localStorage.getItem("eventFavorites"))

// if (!eventFavorites) {
//     eventFavorites = [];
// }
$(document).on("click", "#event-like-button", function (event) {
    event.preventDefault();
    console.log($(this).children()[0]);
    console.log($(this).data("id"));
    toggleEventLike($(this).children()[0]);

    //var cartoonFormatted = $("#cartoon-input").val().toString().replace(/ /g, "+");
    // var eventFave = $(this).data("id");

    // if (eventFave.indexOf(eventFavorites) === -1) {
    //     console.log("button works")

    //     console.log(eventFave);
    //     toggleEventLike();

    //     eventFavorites.push(eventFave.toString());
    //     localStorage.setItem("eventFavorites", JSON.stringify(eventFavorites));
    // }
    // else {

    // }

})

$(document).on("click", "#like-button", function (event) {
    event.preventDefault();
    console.log(this)
    console.log($(this).children()[0]);
    console.log($(this).data("id"));
    toggleTrendingLike($(this).children()[0]);
})

//onclick function that removes the card from eventFavorites array
