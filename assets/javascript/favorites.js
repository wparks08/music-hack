eventFavorites = [];


function toggleEventLike(element) {
    var iconInfo = $(element).attr("data")

    $(element).attr("data", $(element).attr("data-alt"))
    $(element).attr("data-alt", iconInfo)



    var icon = document.getElementById("favorite-icon");
    if (icon.innerHTML === "favorite") {
        icon.innerHTML = "favorite_border";
    }
    else {
        icon.innerHTML = "favorite";
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
$(document).on("click", "#event-like-button", function () {
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

//onclick function that removes the card from eventFavorites array
