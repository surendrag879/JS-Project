// https://api.openweathermap.org/data/2.5/weather?q={city name}&appid={API key}
// key : 77a97069fcd0d900a1d2c5abc27f4d38
let ResponseData = {
    "coord": {
        "lon": 75.8333,
        "lat": 25.1833
    },
    "weather": [
        {
            "id": 804,
            "main": "Clouds",
            "description": "overcast clouds",
            "icon": "04n"
        }
    ],
    "base": "stations",
    "main": {
        "temp": 299.53,
        "feels_like": 299.53,
        "temp_min": 299.53,
        "temp_max": 299.53,
        "pressure": 1005,
        "humidity": 80,
        "sea_level": 1005,
        "grnd_level": 979
    },
    "visibility": 10000,
    "wind": {
        "speed": 3.92,
        "deg": 227,
        "gust": 8.07
    },
    "clouds": {
        "all": 93
    },
    "dt": 1661353030,
    "sys": {
        "country": "IN",
        "sunrise": 1661301254,
        "sunset": 1661347467
    },
    "timezone": 19800,
    "id": 1266049,
    "name": "Kota",
    "cod": 200
}
ResponseData.forEach(function(x) {
    datax(x);
  });
  
  function datax(x) {
    var div = document.createElement('div');
    div.setAttribute('id', x.id);
    div.innerHTML = x.address + '<br />' + x.city + x.state + x.zip;
    document.body.appendChild(div);
  }
  
function getWeather() {
    let cityname = document.getElementById('text').value;
    fetch(' https://api.openweathermap.org/data/2.5/weather?q=' + cityname + '&appid=77a97069fcd0d900a1d2c5abc27f4d38')
        .then(Response => Response.json())
        .then(data => {
            console.log(data);
            
        })
        .catch(error => console.error(error));

}
 