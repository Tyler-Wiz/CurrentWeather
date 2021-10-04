const pasteError = document.getElementById('error')
const form = document.querySelector('#form')
const inputLocation = document.querySelector('#input_Location')


function addDays(dateObj, numDays) {
    dateObj.setDate(dateObj.getDate() + numDays);
    return dateObj;
 }

  let now = new Date();
  let tomorrow = addDays(new Date(), 1);
  let nexttomorrow = addDays(new Date(), 2);
  let dayAfterNext = addDays(new Date(), 3);
  let toDaysAfterNext = addDays(new Date(), 4); 
  let DayFiveAfter = addDays(new Date(), 5);
  let DaySixAfter = addDays(new Date(), 6);

form.addEventListener('submit', (e) => {
  e.preventDefault()
  async function getData(){
    const res = await fetch(`https://api.openweathermap.org/data/2.5/forecast/daily?q=${inputLocation.value}&units=metric&appid=b6ea019473b1df46a1fa1dac301537dd`)
    let data =  await res.json()
    return data
  }
  
  getData().then(data => {
      let dataList = data.list
      let daytemp = dataList.map(tempFigure => {
          return Math.floor(tempFigure.temp.day) + '°C'
      })
  
      let dayIcon = dataList.map(icon =>{
        return icon.weather[0].icon
      })
      
      let dayWeatherDescription = dataList.map(icon =>{
        return icon.weather[0].description
      })
  
      document.getElementById('today').innerHTML = 
      `
      <div class="temp">
        <h3>Weather Today ' ${now.toLocaleDateString('en-US',{ weekday:'long'})} ' In ${inputLocation.value} </h3>
        <img src="http://openweathermap.org/img/wn/${dayIcon[0]}@2x.png">
        ${daytemp[0]}
        <p>(${dayWeatherDescription[0]})</p>
      </div>
      `
  
      document.getElementById('six_days').innerHTML = 
      `
      <div class="temp">
        <h3>${tomorrow.toLocaleDateString('en-US',{ weekday:'long'})}</h3>
        <img src="http://openweathermap.org/img/wn/${dayIcon[1]}@2x.png">
        ${daytemp[1]}
        <p>(${dayWeatherDescription[1]})</p>
      </div>
      <div class="temp">
        <h3>${nexttomorrow.toLocaleDateString('en-US',{ weekday:'long'})}</h3>
        <img src="http://openweathermap.org/img/wn/${dayIcon[2]}@2x.png">
        ${daytemp[2]}
        <p>(${dayWeatherDescription[2]})</p>
      </div>
      <div class="temp">
        <h3>${dayAfterNext.toLocaleDateString('en-US',{ weekday:'long'})}</h3>
        <img src="http://openweathermap.org/img/wn/${dayIcon[3]}@2x.png">
        ${daytemp[3]}
        <p>(${dayWeatherDescription[3]})</p>
      </div>
      <div class="temp">
       <h3>${toDaysAfterNext.toLocaleDateString('en-US',{ weekday:'long'})}</h3> 
        <img src="http://openweathermap.org/img/wn/${dayIcon[4]}@2x.png">
        ${daytemp[4]}
        <p>(${dayWeatherDescription[4]})</p>
      </div>
      <div class="temp">
      <h3>${DayFiveAfter.toLocaleDateString('en-US',{ weekday:'long'})}</h3> 
        <img src="http://openweathermap.org/img/wn/${dayIcon[5]}@2x.png">
        ${daytemp[5]}
        <p>(${dayWeatherDescription[5]})</p>
      </div>
      <div class="temp">
      <h3>${DaySixAfter.toLocaleDateString('en-US',{ weekday:'long'})}</h3> 
        <img src="http://openweathermap.org/img/wn/${dayIcon[6]}@2x.png">
        ${daytemp[6]}
        <p>(${dayWeatherDescription[6]})</p>
      </div>
      `
      inputLocation.value = ' '
  })
  
})

