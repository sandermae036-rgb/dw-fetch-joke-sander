const place = document.querySelector("div");
console.log(place);

fetch("https://icanhazdadjoke.com").then(function (response){
    console.log(response)
})