var placesAutocomplete = places({
    appId: 'plJSZ70TRW98',
    apiKey: '2d0f18528b7a32f114dfb004c6261a95',
    container: document.querySelector('#locationSearch'),
    templates: {
        value: function(suggestion) {
            return suggestion.name + ", " + suggestion.administrative;
        }
    }
});

var options = {
    type: "city"
}

placesAutocomplete.configure(options);