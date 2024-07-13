const input = document.querySelector('input');
const btn = document.getElementById('btn');
const icon = document.querySelector('.icon');
const weather = document.querySelector('.weather');
const temperature = document.querySelector('.temperature');
const description = document.querySelector('.description');

const apikey = '';

btn.addEventListener('click', () => {
    // console.log("clicked");
    // console.log(input.value);
    let city = input.value;
    getWeather(city);
});

function getWeather(city) {
    console.log(city);

    fetch(`https://api.openweathermap.org/data/2.5/weather?q=${city}&appid=${apikey}`).then(response => response.json()).then(data => {console.log(data);
const iconCode = data.weather[0].icon;
icon.innerHTML = `<img src = "http://openweathermap.org/img/wn/${iconCode}.png" alt="Weather Icon"/>`;

const weatherCity = data.name;
const weatherCountry = data.sys.country;
weather.innerHTML = `${weatherCity}, ${weatherCountry}`;

let temp = data.main.temp;
temp  = Math.round(temp - 273.15);
temperature.innerHTML = `${temp}°C`;

const weatherDescription = data.weather[0].description;
description.innerHTML = weatherDescription;
});
}

// https://api.openweathermap.org/data/2.5/weather?q={city name}&appid={API key}