// This function returns a Promise that resolves with the user's location coordinates
function getUserLocation() {
  return new Promise((resolve, reject) => {
    // Check if the browser supports Geolocation API
    if (!navigator.geolocation) {
      reject('Geolocation is not supported by your browser');
    } else {
      // Get the user's current location coordinates
      navigator.geolocation.getCurrentPosition(
        position => resolve(position.coords),
        error => reject(error.message)
      );
    }
  });
}

// This function uses the user's location coordinates to get the current weather information
function getCurrentWeather(latitude, longitude) {
  const apiKey = 'YOUR_API_KEY'; // Replace with your own API key
  const apiUrl = `https://api.openweathermap.org/data/2.5/weather?lat=${latitude}&lon=${longitude}&appid=${apiKey}`;
  
  return fetch(apiUrl)
    .then(response => {
      if (!response.ok) {
        throw new Error('Unable to fetch weather data');
      }
      return response.json();
    })
    .then(data => {
      const weather = {
        description: data.weather[0].description,
        temperature: data.main.temp,
        humidity: data.main.humidity
      };
      return weather;
    })
    .catch(error => {
      console.error(error);
    });
}

// Call the getUserLocation function to get the user's location coordinates
getUserLocation()
  .then(coords => {
    // Use the location coordinates to get the current weather information
    return getCurrentWeather(coords.latitude, coords.longitude);
  })
  .then(weather => {
    // Display the weather information to the user
    console.log(`Current weather: ${weather.description}, ${weather.temperature}°C, Humidity: ${weather.humidity}%`);
  })
  .catch(error => {
    console.error(error);
  });
