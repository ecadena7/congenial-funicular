var APIKey = "18a9e871fb1ccecbbb6d422025312c61";

// Get location of city
var getLocation = function () {
    var city = document.getElementById("city").value.trim();
    console.log(city);
    var queryURL = "http://api.openweathermap.org/data/2.5/weather?q=" + city + "&appid=" + APIKey;
    fetch(queryURL).then(function (response) {
        return response.json()
    }).then(function (data) {
        console.log(data.coord.lat)
        var lat = data.coord.lat;
        var lon = data.coord.lon;
        getWeather(lat, lon)
    })
}

// Get the weather by lat/lon (data)

var getWeather = function (lat, lon) {

    var queryURL = `http://api.openweathermap.org/data/2.5/forecast?lat=${lat}&lon=${lon}&appid=${APIKey}&units=imperial`;
    fetch(queryURL).then(function (response) {
        return response.json()
    }).then(function (data) {
        console.log(data)
        
    })

}

// Show the weather 
var displayWeather = function () {

}

document.getElementById("search-form").addEventListener('submit', function(e) {
    e.preventDefault();
    getLocation();
})
