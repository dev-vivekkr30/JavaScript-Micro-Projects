function getData(){
    // Getting City name form user input
    const cityName = document.querySelector('#search-bar').value;
    const appBody = document.querySelector('#app-body');

    // API details
    const apiKey = "d16269608f3f9dbb840d5021d953a621";
    const apiUrl = `https://api.openweathermap.org/data/2.5/weather?q=${cityName}&units=metric&appid=${apiKey}`;

    const fetchWeatherData = async ()=>{
        try{
            // Getting API Response
            const response = await fetch(apiUrl);
            const data = await response.json();
            // Fetching and adding API response
            const temp = document.querySelector('.temp');
            const city = document.querySelector('.city');
            // const cityTime = document.querySelector('.city-time');
            const humidValue = document.querySelector('.humidity');
            const windValue = document.querySelector('.wind');
            const weatherIcon = document.querySelector('.weather-icon');

            // Setting Values
            temp.innerHTML = Math.round(data.main.temp) + '°C';
            city.innerHTML = data.name;
            humidValue.innerHTML = data.main.humidity + '%';
            windValue.innerHTML = data.wind.speed + 'km/h';
            const weatherType = data.weather[0].main;
            console.log(weatherType)

            if(data.weather[0].main === 'Clouds'){
                appBody.style.backgroundImage = 'url("images/cloudy.jpg")';
                weatherIcon.src = 'images/cloudy-icon.svg';
            }
            else if(data.weather[0].main === 'Clear'){
                appBody.style.backgroundImage = 'url("images/clear.jpg")';
                weatherIcon.src = 'images/clear-icon.svg';
            }
            else if(data.weather[0].main === 'Haze'){
                appBody.style.backgroundImage = 'url("images/Haze.jpg")';
                weatherIcon.src = 'images/Haze-icon.svg';
            }
            else if(data.weather[0].main === 'Mist'){
                appBody.style.backgroundImage = 'url("images/Mist.jpg")';
                weatherIcon.src = 'images/mist-icon.svg';
            }
            else if(data.weather[0].main === 'Rain'){
                appBody.style.backgroundImage = 'url("images/Rain.jpg")';
                weatherIcon.src = 'images/rain-icon.svg'
            }
            else if(data.weather[0].main === 'Snow'){
                appBody.style.backgroundImage = 'url("images/Rain.jpg")';
                weatherIcon.src = 'images/rain-icon.svg'
            }
            else{
                appBody.style.backgroundImage = 'url("images/clear.jpg")';
                weatherIcon.src = 'images/clear-icon.svg';
            }
        }
        catch{
            console.log("Error: Fetching API")
        }
    }

    
    fetchWeatherData();
}