
const searchBox = document.getElementById("cityValue");
const searchBtn = document.querySelector(".search button");



searchBtn.addEventListener("click", ()=>{
    
    async function checkWeather(city){
        console.log(city);
const apiKey = "8612fa5e719ab28e09d1e05514ff30d9";
const apiUrl = `https://api.openweathermap.org/data/2.5/weather?units=metric&q=${city}&appid=${apiKey}` ;
const response = await fetch(apiUrl);
var data = await response.json();


console.log(data);
 
document.querySelector(".City").innerHTML = data.name;
document.querySelector(".temp").innerHTML = Math.round(data.main.temp) + "°C";
document.querySelector(".humidity").innerHTML = data.main.humidity + " %";
document.querySelector(".wind").innerHTML = data.wind.speed + " km/h";
document.querySelector(".weather").style.display = "block";

} 
console.log(searchBox.value);

    checkWeather(searchBox.value); 

})


