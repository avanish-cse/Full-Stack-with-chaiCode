document.addEventListener("DOMContentLoaded", () => {
  const cityInput = document.querySelector("#city-input");
  const getWeatherBtn = document.querySelector("#get-weather-btn");
  const weatherInfo = document.querySelector("#weather-info");
  const cityNameDisplay = document.querySelector("#city-name");
  const temperatureDisplay = document.querySelector("#temperature");
  const discriptionDisplay = document.querySelector("#description");
  const errorMessage = document.querySelector("#error-message");
  const API_KEY = "9a35507ad43609e4a0cf8dbc3e2939ad";
  const API_KEY2 = "8ec03ea3c02617dcebd4f2ba8ff65eb7";

  getWeatherBtn.addEventListener("click", async () => {
    const city = cityInput.value.trim();
    if (!city) return;

    try {
      //get latitude and longtitude of the city..
      const latAndLong = await getLatAndLong(city);

      const latitude = await latAndLong[0].lat;
      const longtitude = await latAndLong[0].lon;

      // get weather data

      const weatherData = await getWeatherData(latitude, longtitude);

      displayWeatherData(weatherData);
    } catch (error) {
      showError();
    }
  });

  async function getLatAndLong(city) {
    const country = "IN";
    const limit = 1;
    const getLangLongUrl = `http://api.openweathermap.org/geo/1.0/direct?q=${city},${country}&limit=${limit}&appid=${API_KEY}`;

    const response = await fetch(getLangLongUrl);

    if (!response.ok) {
      throw new Error("city not found");
    }

    const data = await response.json();
    return data;
  }

  async function getWeatherData(lat, long) {
    // const cityUrl = `https://api.openweathermap.org/data/2.5/weather?q=${city},IN&units=metric&appid=${API_KEY}`; // End-point with only city_name parameter.

    const weatherUrl = `https://api.openweathermap.org/data/2.5/weather?lat=${lat}&lon=${long}&units=metric&appid=${API_KEY}`; //  this end-point takes lat and long as parameter.

    const response = await fetch(weatherUrl);

    if (!response.ok) {
      throw new Error("city not found");
    }

    if (response.ok) {
      errorMessage.classList.add("hidden");
    }

    const weatherData = await response.json();
    return weatherData;
  }

  function displayWeatherData(data) {
    const { name, weather, main, wind } = data;

    cityNameDisplay.textContent = name;
    temperatureDisplay.textContent = ` ${main.temp} °C`;
    discriptionDisplay.textContent = weather[0].description;

    weatherInfo.classList.remove("hidden");
  }

  function showError() {
    weatherInfo.classList.add("hidden");
    errorMessage.classList.remove("hidden");
  }
});
