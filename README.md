# Weather App

This project is a simple weather app that allows users to check the current weather and a 5-day forecast for a specified city. The app is built using HTML, CSS, and JavaScript, and it fetches weather data using the MetaWeather API (which does not require an API key) or by using simulated data for educational purposes.

## Features

- **Search for a City:** Users can enter a city name to retrieve the current weather and a 5-day forecast.
- **Display Current Weather:** The app displays the temperature, weather conditions, and city name for the specified location.
- **5-Day Forecast:** Users can view a 5-day weather forecast, including temperature and weather conditions for each day.
- **Light-Blue Background:** The app has a visually appealing design with a light-blue background resembling a clear sky over a field.

## Technologies Used

- **HTML:** For the structure of the app.
- **CSS:** For styling the app, including a light-blue background.
- **JavaScript:** For handling user input, fetching weather data, and updating the UI.

## How to Use
**Clone the Repository:**
   ```bash
   git clone https://github.com/your-username/weather-app.git
   cd weather-app
Open the Project:
Open the index.html file in your web browser to use the weather app.

**Search for Weather:**
Enter the name of a city in the search bar and click the "Search" button. The app will display the current weather and a 5-day forecast for the specified city.

**API Information**
This app uses the MetaWeather API, which does not require an API key. The API provides weather data based on the city name entered by the user.

Alternatively, the app can be configured to use simulated data for educational purposes. This allows you to test the app without making real API requests.

Known Issues
CORS Issues: When using MetaWeather or other public APIs, there may be Cross-Origin Resource Sharing (CORS) issues that prevent the app from fetching data. These issues can often be resolved by using a CORS proxy or by running the app on a local server.
License
This project is licensed under the MIT License. Feel free to use, modify, and distribute this code as you see fit.

Acknowledgments
MetaWeather: For providing the free weather data API used in this project.
OpenWeatherMap: Original consideration for weather data API before switching to MetaWeather.
CSS Gradient Backgrounds: For the light-blue background used to create a visually appealing interface.
