const place = document.querySelector("div");
console.log(place);

fetch("https://icanhazdadjoke.com", {
    headers: {
        "accept": "application/json"
    }
}


).then(function (response) {
    return response.json();
}).then(function (data) {
    place.textContent = data.joke
})