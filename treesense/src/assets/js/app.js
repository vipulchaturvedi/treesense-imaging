console.log("Script is running!");

document.addEventListener('DOMContentLoaded', () => {
  const getWeatherButton = document.getElementById('get-weather');
  const locationInput = document.getElementById('location');
  const currentWeatherDiv = document.getElementById('current-weather');
  const weatherDiv = document.getElementById('weather');

  getWeatherButton.addEventListener('click', async () => {
    const location = locationInput.value;

    if (!location) {
      alert('Please enter a location.');
      return;
    }

    try {
      // Fetch current weather data from OpenWeather API
      const currentWeatherResponse = await fetch(`https://api.openweathermap.org/data/2.5/weather?q=${location}&appid=6557810176c36fac5f0db536711a6c52&units=metric`);
      const currentWeatherData = await currentWeatherResponse.json();

      console.log('Current Weather Data:', currentWeatherData);

      // Check if current weather data is valid
      if (currentWeatherData.cod !== 200) {
        alert('Error fetching current weather data. Please check the location.');
        return;
      }

     

      // Display current weather
      currentWeatherDiv.innerHTML = `
        <p>Temperature: ${currentWeatherData.main.temp}°C</p>
        <p>Humidity: ${currentWeatherData.main.humidity}%</p>
        <p>Weather: ${currentWeatherData.weather[0].description}</p>
      `;


      // Show weather information
      weatherDiv.style.display = 'block';
    } catch (error) {
      alert('An error occurred while fetching weather data.');
      console.error(error);
    }
  });
});