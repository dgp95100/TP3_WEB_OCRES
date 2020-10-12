
// Fonction appelée lors du click du bouton
function start() {
  // Création de l'objet apiWeather
  const apiWeather = new API_WEATHER();
  // Appel de la fonction fetchTodayForecast

  apiWeather
    .fetchTodayForecast()
    .then(function(response) {
      // Récupère la donnée d'une API
      const data = response.data;

      // On récupère l'information principal
      const main = data.weather[0].main;
      const description = data.weather[0].description;
      const temp = data.main.temp;
      const icon = apiWeather.getHTMLElementFromIcon(data.weather[0].icon);

      /*const main1 = data.list[1].weather[0].main;
      const description1 = data.list[1].weather[0].description;
      const temp1 = data.list[1].temp.day;
      const icon1 = apiWeather.getHTMLElementFromIcon(data.list[1].weather[0].icon);

      const main2 = data.list[2].weather[0].main;
      const description2 = data.list[2].weather[0].description;
      const temp2 = data.list[2].temp.day;
      const icon2 = apiWeather.getHTMLElementFromIcon(data.list[2].weather[0].icon);

      const main3 = data.list[3].weather[0].main;
      const description3 = data.list[3].weather[0].description;
      const temp3 = data.list[3].temp.day;
      const icon3 = apiWeather.getHTMLElementFromIcon(data.list[3].weather[0].icon);*/

      // Modifier le DOM
      document.getElementById('today-forecast-main').innerHTML = main;
      document.getElementById('today-forecast-more-info').innerHTML = description;
      document.getElementById('icon-weather-container').innerHTML = icon;
      document.getElementById('today-forecast-temp').innerHTML = `${temp}°C`;
     
      /*document.getElementById('today-forecast-main-1').innerHTML = main1;
      document.getElementById('today-forecast-more-info-1').innerHTML = description1;
      document.getElementById('icon-weather-container-1').innerHTML = icon1;
      document.getElementById('today-forecast-temp-1').innerHTML = `${temp1}°C`;

      document.getElementById('today-forecast-main-2').innerHTML = main2;
      document.getElementById('today-forecast-more-info-2').innerHTML = description2;
      document.getElementById('icon-weather-container-2').innerHTML = icon2;
      document.getElementById('today-forecast-temp-2').innerHTML = `${temp2}°C`;

      document.getElementById('today-forecast-main-3').innerHTML = main3;
      document.getElementById('today-forecast-more-info-3').innerHTML = description3;
      document.getElementById('icon-weather-container-3').innerHTML = icon3;
      document.getElementById('today-forecast-temp-3').innerHTML = `${temp3}°C`;*/
      
    })
    .catch(function(error) {
      // Affiche une erreur
      console.error(error);
    });
}

// Fonction appelée lors du click du bouton
function getThreeDayForecast() {

  const city = document.getElementById('city-input').value;
  // Création de l'objet apiWeather
  const apiWeather = new API_WEATHER(city);
  // Appel de la fonction fetchTodayForecast

  apiWeather
    .fetchNextDayForecast()
    .then(function(response) {
      // Récupère la donnée d'une API
      const data = response.data;
      console.log(data);

      const main = data.list[0].weather[0].main;
      const description = data.list[0].weather[0].description;
      const temp = data.list[0].temp.day;
      const icon = apiWeather.getHTMLElementFromIcon(data.list[0].weather[0].icon);

      const main1 = data.list[1].weather[0].main;
      const description1 = data.list[1].weather[0].description;
      const temp1 = data.list[1].temp.day;
      const icon1 = apiWeather.getHTMLElementFromIcon(data.list[1].weather[0].icon);

      const main2 = data.list[2].weather[0].main;
      const description2 = data.list[2].weather[0].description;
      const temp2 = data.list[2].temp.day;
      const icon2 = apiWeather.getHTMLElementFromIcon(data.list[2].weather[0].icon);

      const main3 = data.list[3].weather[0].main;
      const description3 = data.list[3].weather[0].description;
      const temp3 = data.list[3].temp.day;
      const icon3 = apiWeather.getHTMLElementFromIcon(data.list[3].weather[0].icon);


      // Modifier le DOM

      document.getElementById('today-forecast-main').innerHTML = main;
      document.getElementById('today-forecast-more-info').innerHTML = description;
      document.getElementById('icon-weather-container').innerHTML = icon;
      document.getElementById('today-forecast-temp').innerHTML = `${temp}°C`;

      document.getElementById('today-forecast-main-1').innerHTML = main1;
      document.getElementById('today-forecast-more-info-1').innerHTML = description1;
      document.getElementById('icon-weather-container-1').innerHTML = icon1;
      document.getElementById('today-forecast-temp-1').innerHTML = `${temp1}°C`;

      document.getElementById('today-forecast-main-2').innerHTML = main2;
      document.getElementById('today-forecast-more-info-2').innerHTML = description2;
      document.getElementById('icon-weather-container-2').innerHTML = icon2;
      document.getElementById('today-forecast-temp-2').innerHTML = `${temp2}°C`;

      document.getElementById('today-forecast-main-3').innerHTML = main3;
      document.getElementById('today-forecast-more-info-3').innerHTML = description3;
      document.getElementById('icon-weather-container-3').innerHTML = icon3;
      document.getElementById('today-forecast-temp-3').innerHTML = `${temp3}°C`;

      
    })
    .catch(function(error) {
      // Affiche une erreur
      console.error(error);
    });
}

