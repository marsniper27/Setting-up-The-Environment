
const city = document.getElementById('city').value;
const lon = document.getElementById('lon').value;
const lat = document.getElementById('lat').value;
const apiKey = 'b678a66b2dea97235ddd14b609ad9b14'
const apiUrl = `https://api.openweathermap.org/data/2.5/weather?q=${city}&appid=b678a66b2dea97235ddd14b609ad9b14`
const llApiUrl = `https://api.openweathermap.org/data/2.5/weather?lat=${lat}&lon=${lon}&appid=${apiKey}`


function showweatherDetails(event) {
    const city = document.getElementById('city').value;
    const lon = document.getElementById('lon').value;
    const lat = document.getElementById('lat').value;
    const weatherInfo = document.getElementById('weatherInfo');
    event.preventDefault();
    console.log('city:', city)
    console.log('lon:', lon)
    console.log('lat:', lat)
    if (city) {
        console.log('fetching City')
        fetch(apiUrl)
            .then(response => response.json())
            .then(data => {
                const weatherInfo = document.getElementById('weatherInfo');
                weatherInfo.innerHTML = `<h2>Weather in ${data.name}</h2>
                            <p>Temperature: ${data.main.temp} &#8451;</p>
                            <p>Weather: ${data.weather[0].description}</p>`;
            }).catch(error => {
                console.error('Error fetching weather:', error);
                weatherInfo.innerHTML = `<p>Failed to fetch weather. Please try again.</p>
        <p>${error.message}</p>`;
            });
    }
    else if (lon && lat) {
        console.log('fetching Long Lat')
        fetch(llApiUrl)
            .then(response => response.json())
            .then(data => {
                const weatherInfo = document.getElementById('weatherInfo');
                weatherInfo.innerHTML = `<h2>Weather at lon:${lon} lat: ${lat}</h2>
                            <p>Temperature: ${data.main.temp} &#8451;</p>
                            <p>Weather: ${data.weather[0].description}</p>`;
            }).catch(error => {
                console.error('Error fetching weather:', error);
                weatherInfo.innerHTML = `<p>Failed to fetch weather. Please try again.</p>
        <p>${error.message}</p>`;
            });
    }
    else {
        weatherInfo.innerHTML = `<p>Please enter a City Name or Longitude and Latitude</p>`
    }
}


document.getElementById('weatherForm').addEventListener('submit', showweatherDetails);