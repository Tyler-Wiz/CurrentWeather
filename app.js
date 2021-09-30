const pasteError = document.getElementById('error')
const form = document.querySelector('#form')
const inputLocation = document.querySelector('#input_Location')
const forecast = document.querySelectorAll('#temp')
const dayWeather = document.querySelector('#weather_today')
let weatherDescription = document.querySelectorAll('#weather_Desc')
const icons = document.querySelectorAll('#icon')  
const weatherToday = document.querySelector('#today_date')
const temperature_Today = document.querySelector('#tempOne')
const daysOfWeek = document.querySelectorAll('#determine_day')

 form.addEventListener('submit', (e) => {
       e.preventDefault()
      fetch(`https://api.openweathermap.org/data/2.5/forecast/daily?q=${inputLocation.value}&units=metric&appid=b6ea019473b1df46a1fa1dac301537dd`)
      .then(res => {
        if(res.ok){
          return res.json()
        } else {
          throw new Error("Your Location Is Not Recognized")
        }
      }).then(data => {

        // get array of days from Data // 
        const daysData = data.list

        //get day 2 to 7 //
        const sixFollowingDays = daysData.slice(1,7)
        const [one, two, three, four, five, six] = sixFollowingDays
            
        // Weather and Icon For Present Day //
        let todayTemp = Math.floor(daysData[0].temp.day)
        dayWeather.innerHTML = `
         <img src="http://openweathermap.org/img/wn/${daysData[0].weather[0].icon}@2x.png">
        `
        // Add Input value to Html and temperature for Present day // 
        weatherToday.innerHTML = ` In ${inputLocation.value}`
        temperature_Today.textContent = `${todayTemp}°C`  
     
        // Call Day of The week function // 
        dayOfWeek()

        // Loop Through array of each day and add temperature for each day // 
        forecast.forEach((cast, index) => {
              switch(index){
                case 0:
                  cast.textContent = Math.floor(one.temp.day) + '°C'  
                break;
                case 1:
                  cast.textContent = Math.floor(two.temp.day) + '°C'  
                break;
                case 2:
                  cast.textContent = Math.floor(three.temp.day) + '°C'  
                break;
                case 3:
                  cast.textContent = Math.floor(four.temp.day) + '°C'  
                break;
                case 4:
                  cast.textContent = Math.floor(five.temp.day) + '°C'  
                break;
                case 5:
                  cast.textContent = Math.floor(six.temp.day) + '°C'  
                break;
              }
        })


        weatherDescription.forEach((mainDesc,  index) => {
            switch(index){
               case 0:
                mainDesc.innerHTML = `(${one.weather[0].description})`
               break;
               case 1:
                mainDesc.innerHTML = `(${two.weather[0].description})`
               break;
               case 2:
                mainDesc.innerHTML = `(${three.weather[0].description})`
               break;
               case 3:
                mainDesc.innerHTML = `(${four.weather[0].description})`
               break;
               case 4:
                mainDesc.innerHTML = `(${five.weather[0].description})`
               break;
               case 5:
                mainDesc.innerHTML = `(${six.weather[0].description})`
               break;
            }
         })

        icons.forEach((icon, index) => {
            if(index === 0){
             icon.innerHTML = `<img src="http://openweathermap.org/img/wn/${one.weather[0].icon}@2x.png">`
            }
            if(index === 1){
              icon.innerHTML = `<img src="http://openweathermap.org/img/wn/${two.weather[0].icon}@2x.png">`            
            }
            if(index === 2){
              icon.innerHTML = `<img src="http://openweathermap.org/img/wn/${three.weather[0].icon}@2x.png">`   
            }
            if(index === 3){
              icon.innerHTML = `<img src="http://openweathermap.org/img/wn/${four.weather[0].icon}@2x.png"> `   
            }
            if(index === 4){
              icon.innerHTML = `<img src="http://openweathermap.org/img/wn/${five.weather[0].icon}@2x.png">`   
            }
            if(index === 5){
              icon.innerHTML = `<img src="http://openweathermap.org/img/wn/${six.weather[0].icon}@2x.png">`   
            }
         })
         inputLocation.value = ''  
      }).catch(error => {
        pasteError.textContent = error
        });

        pasteError.textContent = ''
    }) 
    
  // Day of The Week function //
  function dayOfWeek() {
    let d = new Date();
    let weekday = ['Sunday','Monday','Tuesday','Wednesday','Thursday','Friday','Saturday'];
  
    daysOfWeek.forEach((day, index) =>{
       switch(index){
          case 0:
            day.innerHTML = weekday[d.getDay()]
          break;
          case 1:
            day.innerHTML = weekday[d.getDay()+1]
          break;
          case 2:
            day.innerHTML = weekday[d.getDay()+2]
          break; 
          case 3:
            day.innerHTML = weekday[d.getDay()-2]
          break; 
          case 4:
            day.innerHTML = weekday[d.getDay()]
          break; 
          case 5:
            day.innerHTML = weekday[d.getDay()]
          break; 
       }
    })
  }


function addDays(dateObj, numDays) {
    dateObj.setDate(dateObj.getDate() + numDays);
    return dateObj;
 }

 let now = new Date();
 var tomorrow = addDays(new Date(), 1);
 var nextWeek = addDays(new Date(), 7);

 console.log(nextWeek.toLocaleDateString('en-US',{ weekday:'long'}))
 
console.log(
     'Today: ' + now +
     '\nTomorrow: ' + tomorrow +
     '\nNext week: ' + nextWeek
 );

 