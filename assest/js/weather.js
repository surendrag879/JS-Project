// https://api.openweathermap.org/data/2.5/weather?q={city name}&appid={API key}
// key : 77a97069fcd0d900a1d2c5abc27f4d38

function getWeather() {
    let cityname = document.getElementById('text').value;
    fetch(' https://api.openweathermap.org/data/2.5/weather?q=' + cityname + '&appid=77a97069fcd0d900a1d2c5abc27f4d38')
        .then(response => response.json())
        .then(data => {
            
            console.log("in response", data);
            if(data?.cod === '404') {
                alert(data.message);
            }
            else {
                let city = document.querySelector('.city');
                city.innerHTML = data.name;

                let temp = document.querySelector('.temp');
                temp.innerHTML = data.main.temp;

                let min = document.querySelector('.min');
                min.innerHTML = data.main.temp_min;

                let max = document.querySelector('.max');
                max.innerHTML = data.main.temp_max;

                let cloud = document.querySelector('.cloud');
                cloud.innerHTML = data.weather[0].main;

                 let des = document.querySelector('.des');
                 des.innerHTML = data.weather[0].description;

            }
            
        })
        .catch(error => {
            alert(error.message);
            console.error(error);
        });

}
 