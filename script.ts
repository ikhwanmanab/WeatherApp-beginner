document.addEventListener('DOMContentLoaded', () => {
    const cityInput = document.getElementById('cityInput');
    const searchBtn = document.getElementById('searchBtn');
    const cityName = document.getElementById('cityName');
    const temperature = document.getElementById('temperature');
    const conditions = document.getElementById('conditions');
    const forecastList = document.getElementById('forecastList');

    searchBtn.addEventListener('click', () => {
        const city = cityInput.value.trim();
        if (city === '') {
            alert('Please enter a city name');
            return;
        }

        fetch(`https://www.metaweather.com/api/location/search/?query=${city}`)
            .then(response => response.json())
            .then(data => {
                if (data.length === 0) {
                    throw new Error('City not found');
                }
                const woeid = data[0].woeid;

                fetch(`https://www.metaweather.com/api/location/${woeid}/`)
                    .then(response => response.json())
                    .then(data => {
                        cityName.textContent = data.title;
                        temperature.textContent = `Temperature: ${data.consolidated_weather[0].the_temp.toFixed(1)}°C`;
                        conditions.textContent = `Conditions: ${data.consolidated_weather[0].weather_state_name}`;

                        forecastList.innerHTML = ''; // Clear previous forecast
                        data.consolidated_weather.slice(1).forEach(day => {
                            const forecastItem = document.createElement('div');
                            forecastItem.innerHTML = `
                                <p>${new Date(day.applicable_date).toLocaleDateString()}</p>
                                <p>${day.the_temp.toFixed(1)}°C</p>
                                <p>${day.weather_state_name}</p>
                            `;
                            forecastList.appendChild(forecastItem);
                        });
                    });
            })
            .catch(error => {
                alert(error.message);
            });
    });
});
