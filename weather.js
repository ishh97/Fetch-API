//Complete the Weather API Backend part using openweathermap api

// Progression 1: Create a function and fetch data using "fetch" from openweathermap api and display the data as given in reference image.
fetch(
  'https://api.openweathermap.org/data/2.5/weather?q=London,uk&APPID=1342f8dd595eda677ca40143519800de'
)
  .then((data) => data.json())
  .then((dataParsed) => {
    console.log(dataParsed);
    const loction = document.getElementById('location');
    const text = document.getElementById('loc');
    const day = document.getElementById('day');
    const date = document.getElementById('date');
    const temp = document.getElementById('temp');
    const minTemp = document.getElementById('mintemp');
    const maxTemp = document.getElementById('maxtemp');
    const sky = document.getElementById('sky');
    loction.innerHTML = dataParsed.name;
    // console.log(dataParsed.name)
    // loc.innerHTML =dataParsed.name
    temp.innerHTML = Math.floor(dataParsed.main.temp - 273);
    minTemp.innerHTML = Math.floor(dataParsed.main.temp_min - 273);
    maxTemp.innerHTML = Math.floor(dataParsed.main.temp_max - 273);
    sky.innerHTML = dataParsed.weather[0].main;
    // console.log(dataParsed.weather[0].main)
    var date1 = dataParsed.dt;
    var date2 = new Date(date1 * 1000);
    var mainDate = date2.getDate();
    var month = date2.getMonth();
    var year = date2.getFullYear();
    var days = date2.getDay();
    const Alldays = [
      'Monday',
      'Tuesday',
      'Wednesday',
      'Thursday',
      'Friday',
      'Saturday',
      'Sunday',
    ];
    day.innerHTML = Alldays[days - 1];
    // console.log(days)
    // var weather =
    date.innerHTML = mainDate + '/' + month + '/' + year;
    // var mainDate1 =mainDate+"/"+month+"/"+year
    // console.log(month)
  });
