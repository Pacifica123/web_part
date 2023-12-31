var weatherCodes = [
    'Небо стабильно ясное',
    'Облака рассеиваются',
    'Стабильное состояние неба',
    'Облака формируются',
    'Сниженная видимость из-за дыма',
    'Дымка',
    'Распределенная пыль в воздухе',
    'Пыль или песок подняты ветром',
    'Развитые пылевые или песчаные вихри',
    'Песчаная буря',
    'Туман',
    'Мелкий или ледяной туман',
    'Продолжительный туман',
    'Видна молния, гром не слышен',
    'Осадки в пределах видимости, не достигающие земли',
    'Осадки в пределах видимости, удаленные',
    'Осадки в пределах видимости, близко',
    'Гроза без осадков',
    'Шквалы',
    'Воронкообразные облака',
    'Морось или снежные зерна',
    'Дождь',
    'Снег',
    'Дождь и снег или ледяные гранулы',
    'Морось или ледяной дождь',
    'Ливень',
    'Снежный дождь или дождь со снегом',
    'Град, дождь и град',
    'Туман или ледяной туман',
    'Гроза с осадками или без',
    'Пыльная или песчаная буря уменьшилась',
    'Без изменений в пыльной буре',
    'Усиление пыльной бури',
    'Сильная пыльная буря уменьшилась',
    'Без изменений в сильной пыльной буре',
    'Усиление сильной пыльной бури',
    'Дующий снег, низкий',
    'Сильный занос снега',
    'Дующий снег, высокий',
    'Сильный занос снега',
    'Туман или ледяной туман вдали',
    'Туман в виде пятен',
    'Туман, видное небо стало тоньше',
    'Невидимый туман или ледяной туман',
    'Туман, видное небо без изменений',
    'Невидимый туман или ледяной туман',
    'Туман, видное небо стало гуще',
    'Невидимый туман или ледяной туман',
    'Туман, видное небо',
    'Туман, невидимое небо',
    'Прерывистая морось, без заморозков',
    'Непрерывная морось, без заморозков',
    'Прерывистая умеренная морось, без заморозков',
    'Непрерывная морось, без заморозков',
    'Периодически сильная морось, без заморозков',
    'Непрерывная морось, без заморозков',
    'Морось с заморозками, слабая',
    'Морось с заморозками, умеренная или сильная',
    'Легкий дождь и морось',
    'Умеренный или сильный дождь и морось',
    'Прерывистый легкий дождь',
    'Продолжительный дождь',
    'Прерывистый умеренный дождь',
    'Продолжительный умеренный дождь',
    'Прерывистый сильный дождь',
    'Продолжительный сильный дождь',
    'Дождь со снегом, слабый',
    'Дождь со снегом, умеренный или сильный',
    'Дождь и морось со снегом, небольшой',
    'Дождь и морось со снегом, умеренный или сильный',
    'Прерывистое падение снежинок',
    'Непрерывное падение снежинок',
    'Прерывистое умеренное падение снежинок',
    'Непрерывное умеренное падение снежинок',
    'Прерывистое сильное падение снежинок',
    'Непрерывное сильное падение снежинок',
    'Алмазная пыль',
    'Снежные зерна',
    'Изолированные звездообразные кристаллы снега',
    'Ледяные гранулы',
    'Легкий дождь',
    'Умеренный или сильный дождь',
    'Сильный дождь',
    'Смешанный дождь и снег, небольшой',
    'Смешанный дождь и снег, умеренный или сильный',
    'Снежный дождь, слабый',
    'Снежный дождь, умеренный или сильный',
    'Ливень со снежными гранулами или градом, небольшой',
    'Ливень со снежными гранулами или градом, умеренный или сильный',
    'Ливень с градом, слабый',
    'Ливень с градом, умеренный или сильный',
    'Небольшой дождь, гроза в прошлом часу',
    'Умеренный или сильный дождь',
    'Небольшой снег, дождь со снегом или град',
    'Умеренный или сильный снег, дождь и снег',
    'Гроза со слабыми или умеренными осадками',
    'Гроза с градом',
    'Сильная гроза с дождем и/или снегом',
    'Гроза с пыльной или песчаной бурей',
    'Сильная гроза с градом'
  ]
  function getIPInfo() {
    fetch('https://ipinfo.io/json?token=f295a931127735')
        .then(response => response.json())
        .then(data => {
            // Вывод информации о местоположении и IP-адресе
            console.log('IP адрес:', data.ip);
            console.log('Местоположение:', data.city, data.region, data.country);
            var input = document.querySelector('input[type="text"]');
            input.value = data.city;
            return input.value;
        })
        .catch(error => {
            console.log('Произошла ошибка при получении информации:', error);
        });
  }
  // ------------------------------------------
  function displayWeatherDataForWeek(data) {
    var days = ['ВС', 'ПН', 'ВТ', 'СР', 'ЧТ', 'ПТ', 'СБ'];
    var currentDate = new Date(); // текущая дата
    var currentDayOfWeek = currentDate.getDay(); // текущий день недели (0 - воскресенье, 1 - понедельник, и т.д.)
    
    var buttons = document.querySelectorAll('.right_container button');
    var weatherData = data.data_weekly;
    for (var i = 0; i < days.length; i++) {
      var index = (currentDayOfWeek + i) % 7; // индекс дня недели с учетом текущего дня
      var day = days[index];
      var weatherCode = weatherData.weather_code[i];
      var maxTemp = weatherData.temperature_2m_max[i];
      var minTemp = weatherData.temperature_2m_min[i];
      var sunshineDuration = weatherData.sunshine_duration[i];
  
      var button = buttons[i];

      console.log(weatherCode);

      button.innerHTML = `
        <span style="font-size: 25px; border-right: 2px solid; padding: 5px; color:#70d2ff">${day} </span>
        <span style="padding: 5px">Макс: ${maxTemp}°C</span> 
        <span>Мин: ${minTemp}°C</span>
        <span style="padding: 5px; line-height: 10pt; font-weight: 400">${weatherCodes[weatherCode]}</span>
      `;
    }
  }
  
  // ------------------------------------------
  function displayWeatherData(data) {
    var currentWeatherList = document.getElementById('currentWeather');
    var dailyWeatherList = document.getElementById('dailyWeather');
    var weatherList = document.getElementById('weatherList');
    weatherList.innerHTML = ''; // Clear previous data
    dailyWeatherList.innerHTML = '';
    currentWeatherList.innerHTML = '';


    // Display current data
    var currentData = data;
    var currentDataItem = document.createElement('div');
    currentDataItem.innerHTML = `
        <h3 style="font-size: 25px">Сейчас:</h3>
        <ul style="font-size: 20px">
            <li style="list-style-type: none">Температура: ${currentData["Current temperature_2m"]}°C</li>
            <li style="list-style-type: none">Кажется: ${currentData["Current apparent_tempera8ture"]}°C</li>
        </ul>
    `;
    currentWeatherList.appendChild(currentDataItem);

    // Display daily data
    var dailyDataItem = document.createElement('div');
    daylight_duration = data.daylight_duration

    hours = Math.floor(daylight_duration / 3600)
    minutes = Math.floor((daylight_duration % 3600) / 60)
    seconds = Math.floor(daylight_duration % 60)
    dailyDataItem.innerHTML = `
        <h3 style="font-size: 20px">За день в общем:</h3>
        <ul style="font-size: 15px">
            <li style="list-style-type: none">Максимальная температура: ${data.temperature_2m_max}°C</li>
            <li style="list-style-type: none">Минимальная температура: ${data.temperature_2m_min}°C</li>
            <li style="list-style-type: none">Продолжительность дня: ${hours}ч ${minutes}м ${seconds}с</li>
        </ul>
    `;
    dailyWeatherList.appendChild(dailyDataItem);

    // Display hourly headers
    var hourlyHeaders = document.createElement('div');
    hourlyHeaders.innerHTML = `
        <h3>Почасовые данные:</h3>
        <ul style="white-space: nowrap; line-height: 20pt">
            <li style="list-style-type: none; ">Температура</li>
            <li style="list-style-type: none; ">Влажность</li>
            <li style="list-style-type: none; ">Ощущаемая t</li>
            <li style="list-style-type: none; ">Вероятность осадков</li>
            <li style="list-style-type: none; ">Осадки</li>
            <li style="list-style-type: none">Видимость</li>
            <li style="list-style-type: none">Скорость ветра</li>
            <li style="list-style-type: none">Порывы</li>
        </ul>
    `;
    weatherList.appendChild(hourlyHeaders);

    // Extracting hourly data
    var hourlyData = data.data_hourly;
    console.log(weatherCodes)

    for (var i = 0; i < hourlyData.temperature_2m.length; i++) {
        var listItem = document.createElement('div');
        
        listItem.innerHTML = `
    
            <strong style="margin-left: 30px; ">     ${i + 1}-й час</strong>
            <ul style="margin-top: 37px">
                <li style="list-style-type: none; line-height: 20pt" > ${hourlyData.temperature_2m[i]}°C</li>
                <li style="list-style-type: none; line-height: 20pt"> ${hourlyData.relative_humidity_2m[i]}%</li>
                <li style="list-style-type: none; line-height: 20pt"> ${hourlyData.apparent_temperature[i]}°C</li>
                <li style="list-style-type: none; line-height: 20pt"> ${hourlyData.precipitation_probability[i]}</li>
                <li style="list-style-type: none; line-height: 20pt"> ${hourlyData.precipitation[i]}mm</li>
                <li style="list-style-type: none; line-height: 20pt"> ${hourlyData.visibility[i]}m</li>
                <li style="list-style-type: none; line-height: 20pt"> ${hourlyData.wind_speed_10m[i]}m/s</li>
                <li style="list-style-type: none; line-height: 20pt"> ${hourlyData.wind_gusts_10m[i]}m/s</li>
            </ul>
        `;
        weatherList.appendChild(listItem);
    }

    
  }
  //-----------------------------------------------------------
  document.addEventListener("DOMContentLoaded", function(event) { 
    // Получаем значение из поля ввода
    getIPInfo();
    var input = document.querySelector('input[type="text"]');
    // var input = getIPInfo();

    // Функция для выполнения запроса на погоду
    function fetchWeatherData() {
      var city = input.value;
      fetch("https://pacificaprogram.pythonanywhere.com/polls/get-weather/" + city)
        .then(response => response.json())
        .then(data => {
          // Выводим полученные данные в консоль
          console.log(city);
          console.log(data);
          displayWeatherData(data);
        })
        .catch(error => {
          console.error(error);
      });
    }
    function fetchWeatherDataWeek() {
      var city = input.value;
      fetch("https://pacificaprogram.pythonanywhere.com/polls/get-weather-week/" + city)
        .then(response => response.json())
        .then(data => {
          console.log(city);
          console.log(data);
          displayWeatherDataForWeek(data);
        })
        .catch(error => {
          console.error(error);
      });
    }

    fetchWeatherData();
    fetchWeatherDataWeek();
    setInterval(fetchWeatherData, 600000);
    setInterval(fetchWeatherDataWeek, 600000);

    //---------------------------------------------------------------------------
    // Получаем текущую дату
    var currentDate = new Date();
    var formattedDate = currentDate.toLocaleDateString();
    document.getElementById("currentDate").innerHTML = formattedDate;
    //---------------------------------------------------------------------------
    // Обработчик события "keydown" на поле ввода
    input.addEventListener("keydown", function(event) {
      // Проверяем, нажата ли клавиша "Enter"
      if (event.keyCode === 13) {
        event.preventDefault(); // Отменяем стандартное действие для клавиши "Enter"
        fetchWeatherData(); // Выполняем запрос на погоду
        fetchWeatherDataWeek();
      }
    });
    
  });
  //=============================================================================
  
