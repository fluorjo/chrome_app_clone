import {API_KEY} from './validation.js'

function onGeoOk(position){
    const lat=position.coords.latitude;
    const lon=position.coords.longitude;

    const url =`https://api.openweathermap.org/data/2.5/weather?lat=${lat}&lon=${lon}&appid=${API_KEY}&units=metric`
    fetch(url)
    .then((Response)=>Response.json())
    .then((data)=>{
        const city=document.querySelector("#weather span:nth-child(1)");
        const weather=document.querySelector("#weather span:nth-child(2)");

        city.innerText=data.name;
        weather.innerText= `${data.weather[0].main} / ${Math.round(data.main.temp)}℃`;
    });
}
function onGeoError(){
    alert("cannot find")
}

navigator.geolocation.getCurrentPosition(onGeoOk,onGeoError);

// 
