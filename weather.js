const apiKey = 'b6d6b63e29c52002ad6bebb4779b4d2c';
const actualApi= 'https://api.openweathermap.org/data/2.5/weather?units=metric&q=';
const searchInput = document.querySelector('.text');
const searchBtn = document.querySelector('.btn');
const image = document.querySelector('.weather-icon');
const error = document.querySelector('.error');

async function fetchApi(city) {
    const responce = await fetch(actualApi + city +`&appid=${apiKey}`);
    if(responce.status == 404){
        error.style.display = 'block';
        document.querySelector('.weather').style.display = 'none';
    }
    else{
        error.style.display = 'none';
        const data = await responce.json();
      
        document.querySelector('.city'). innerHTML= data.name;
        document.querySelector('.temp'). innerHTML = Math.round(data.main.temp)+ '°C';
        document.querySelector('.humidity'). innerHTML = data.main.humidity + '%';
        document.querySelector('.wind'). innerHTML = data.wind.speed + 'Km/h';
       if(data.weather[0].main == 'Clouds'){
      image.src = 'weather-app-img/images/clouds.png';
       }
       if(data.weather[0].main == 'Rain'){
      image.src = 'weather-app-img/images/rain.png';
       }
       if(data.weather[0].main == 'Clear'){
      image.src = 'weather-app-img/images/clear.png';
       }
       if(data.weather[0].main == 'Drizzle'){
      image.src = 'weather-app-img/images/drizzle.png';
       }
       if(data.weather[0].main == 'Snow'){
      image.src = 'weather-app-img/images/snow.png';
       }
       if(data.weather[0].main == 'Mist'){
      image.src = 'weather-app-img/images/mist.png';
       }
       document.querySelector('.weather').style.display = 'block';
    }
   
}
searchBtn.addEventListener('click',()=>{
fetchApi(searchInput.value);



});