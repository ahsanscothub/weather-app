const apiKey = "c97468359f30a1d7065deb0f670d6751";
      const apiUrl = "https://api.openweathermap.org/data/2.5/weather?units=metric&q=";

      const searchBox = document.querySelector(".search input");
      const searchBtn = document.querySelector(".search button");
      const weatherIcon = document.querySelector(".weather-icon");

      async function checkWeather(city) {
        const response = await fetch(apiUrl + city + `&appid=${apiKey}`);
        const data = await response.json(); // Parse JSON here

        if (response.ok) {
          document.querySelector(".city").innerHTML = data.name;
          document.querySelector(".temp").innerHTML = Math.round(data.main.temp) + "°c";
          document.querySelector(".humidity").innerHTML = data.main.humidity + "%";
          document.querySelector(".wind").innerHTML = data.wind.speed + " km/h";

          // Set weather icon based on conditions
          if (data.weather[0].main == "Clouds") {
            weatherIcon.src = "images/clouds.png";
          } else if (data.weather[0].main == "Clear") {
            weatherIcon.src = "images/clear.png";
          } else if (data.weather[0].main == "Rain") {
            weatherIcon.src = "images/rain.png";
          } else if (data.weather[0].main == "Drizzle") {
            weatherIcon.src = "images/drizzle.png";
          } else if (data.weather[0].main == "Mist") {
            weatherIcon.src = "images/mist.png";
          }

          // Show weather and hide error
          document.querySelector(".weather").style.display = "block";
          document.querySelector(".error").style.display = "none";
        } else {
          // Hide weather and show error
          document.querySelector(".weather").style.display = "none";
          document.querySelector(".error").style.display = "block";
        }
      }

      searchBtn.addEventListener("click", () => {
        checkWeather(searchBox.value);
      });
