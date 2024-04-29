function getWeather() {
    const city = document.getElementById("cityInput").value
  
    fetch(
      ` https://api.openweathermap.org/data/2.5/weather?q=${city}&appid=382c22dd35577bcd6b412ab42e903705 `
    )
      .then((response) => response.json())
      .then((data) => {
        displayWeather(data)
      })
      .catch((error) => {
        console.error("Error fetching weather data:", error)
        alert("Error fetching weather data. Please try again.")
      })
  }
  
  function displayWeather(data) {
    const weatherDataContainer = document.getElementById("weatherData")
    weatherDataContainer.innerHTML = `
          <h2>Weather in ${data.name}</h2>
          <p>Temperature: ${data.main.temp}°C</p>
          <p>Description: ${data.weather[0].description}</p>
      `
  }