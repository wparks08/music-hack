// eventFavorites = [];
// savedEvents = [];

// function toggleEventLike(element) {
//     var eventIconInfo = $(element).attr("data")

//     $(element).attr("data", $(element).attr("data-alt"))
//     $(element).attr("data-alt", eventIconInfo)



//     var eventIcon = $(element).attr("id", "favorite-icon");
//     if (eventIcon.html() === "favorite") {
//         eventIcon.html("favorite_border");
//     }
//     else {
//         eventIcon.html("favorite");
//     }

// }

// function toggleTrendingLike(element) {
//     var trendingIconInfo = $(element).attr("data")
//     $(element).attr("data", $(element).attr("data-alt"))
//     $(element).attr("data-alt", trendingIconInfo)



//     var icon = $(element).attr("id", "check-icon");
//     if (icon.html() === "done") {
//         icon.html("done_all");
//     }
//     else {
//         icon.html("done");
//     }
// }









// //onclick button function that takes the contents of the entire event card and pushes up to
// //event favorites array 
// //for loop that displays contents of look in carousel card 
// //check for repeats in cards??
// var eventFavorites = JSON.parse(localStorage.getItem("eventFavorites"))

// // if (!eventFavorites) {
// if (!eventFavorites) {
//     var favoriteEventsText = $("<h3>");
//     favoriteEventsText.html("You don't have any items saved.");
//     $("#favorite-events").append(favoriteEventsText);
//     eventFavorites = [];
// }
// console.log("eventFavorites array:" + eventFavorites)
// var savedEvents = [];
// for (var i = 0; i < eventFavorites.length; i++) {
//     savedEvents.push(eventFavorites[i])

// }
// console.log("savedEvents array: " + savedEvents)
// //     eventFavorites = [];
// // }
// $(document).on("click", "#event-like-button", function (event) {
//     event.preventDefault();
//     console.log($(this).children()[0]);
//     console.log($(this).data("id"));


//     if (savedEvents.includes($(this).data("id"))) {
//         //use a popup modal to display "wou've already saved this event"
//         //popup modal should include option to remove saved item or not
//         //if confirms removal{remove item from savedEvents[], eventFavorites[], and card display}

//     }
//     else {
//         eventFavorites.push($(this).data("id"),
//             savedEvents.push($(this).data("id")),
//             localStorage.setItem("eventFavorites", JSON.stringify(eventFavorites)),
//             // createSavedEventCards();
//             toggleEventLike($(this).children()[0]))
//     }



// })

// function createSavedEventCards() {
//     console.log("this function works")
//     $("#favorite-events").empty();
//     for (var i = 0; i < eventFavorites.length; i++)
//         getEventById(eventFavorites[i], "#favorite-events"); { return displayResult(result, "#favorite-events") };
// }
// createSavedEventCards();



// $(document).on("click", "#like-button", function (event) {
//     event.preventDefault();
//     console.log(this)
//     console.log($(this).children()[0]);
//     console.log($(this).data("id"));
//     toggleTrendingLike($(this).children()[0]);
// })

// // //onclick function that removes the card from eventFavorites array
