eventFavorites = [];


function toggleEventLike(element) {
    if (eventFavorites.includes(element.data("id"))) {
        fillFavoriteStar(element);
    } else {
        outlineFavoriteStar(element);
    }
}

function fillEventLike(element) {
    element.empty();
    element.append(
        $("<i>")
            .addClass("material-icons")
            .text("favorite_border")
    );
}

function outlineEventLike(element) {
    element.empty();
    element.append(
        $("<i>")
            .addClass("material-icons")
            .text("favorite")
    );
}






//onclick button function that takes the contents of the entire event card and pushes up to
//event favorites array 
//for loop that displays contents of look in carousel card 
//check for repeats in cards??
var eventFavorites = JSON.parse(localStorage.getItem("eventFavorites"))

if (!eventFavorites) {
    eventFavorites = [];
}
$(document).on("click", "#event-like-button", function () {
    console.log($(this).data("id"));
    event.preventDefault();
    //var cartoonFormatted = $("#cartoon-input").val().toString().replace(/ /g, "+");
    var eventFave = $(this).data("id");

    if (eventFave.indexOf(eventFavorites) === -1) {
        console.log("button works")

        console.log(eventFave);

        eventFavorites.push(eventFave.toString());
        localStorage.setItem("eventFavorites", JSON.stringify(eventFavorites));
    }
    else {

    }

})

//onclick function that removes the card from eventFavorites array
