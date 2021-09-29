const pasteError = document.getElementById('error')
const form = document.querySelector('#form')
const inputLocation = document.querySelector('#input_Location')
const forecast = document.querySelectorAll('#temp')
const dayWeather = document.querySelector('#weather_today')
let weatherDescription = document.querySelectorAll('#weather_Desc')
const icons = document.querySelectorAll('#icon')  
const weatherToday = document.querySelector('#today_date')
const temperature_Today = document.querySelector('#tempOne')
let condition = []
let desc = []

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
        const listDays = data.list
         
        //get day 2 to 7 //
        const fiveDays = listDays.slice(1,7)
        const [one, two, three, four, five, six] = fiveDays
            
        // Weather and Icon For Present Day //

        let todayTemp = listDays[0].temp.day
        let todayWeather = listDays[0].weather[0].main

        // Add Input value to Html and temperature for Present day // 
        weatherToday.innerHTML = ` In ${inputLocation.value}`
        temperature_Today.textContent = `${todayTemp} C`
     
        // Condition for Icon for Present Day //
        if(todayWeather === 'Rain'){
          dayWeather.classList.add('rain')
        } else if(todayWeather === 'Clouds'){
          dayWeather.classList.add('cloudy')
        } else if(todayWeather === 'Clear'){
          dayWeather.classList.add('sunny')
        } 

        // Call Day of The week function // 
        dayOfWeek()

        // Loop Through array of each day and add temperature for each day // 
        forecast.forEach((cast, index) => {
              switch(index){
                case 0:
                  cast.textContent = `${one.temp.day}  C` 
                break;
                case 1:
                  cast.textContent = `${two.temp.day} C`
                break;
                case 2:
                  cast.textContent = `${three.temp.day} C`
                break;
                case 3:
                  cast.textContent = `${four.temp.day} C`
                break;
                case 4:
                  cast.textContent = `${five.temp.day} C`
                break;
                case 5:
                  cast.textContent = `${six.temp.day} C`
                break;
              }
        })
         

        let condition = []
        let desc = []
  
        for(let main of fiveDays){
          let weather = main.weather
          for(let weathers of weather) {
            condition.push(weathers.main)
            desc.push(weathers.description)
         }
        }
         
  

        weatherDescription.forEach((mainDesc,  index) => {
            switch(index){
               case 0:
                mainDesc.innerHTML = `(${desc[0]})`
               break;
               case 1:
                mainDesc.innerHTML = `(${desc[1]})`
               break;
               case 2:
                mainDesc.innerHTML = `(${desc[2]})`
               break;
               case 3:
                mainDesc.innerHTML = `(${desc[3]})`
               break;
               case 4:
                mainDesc.innerHTML = `(${desc[4]})`
               break;
               case 5:
                mainDesc.innerHTML = `(${desc[5]})`
               break;
            }
         })

        icons.forEach((icon, index) => {
            //day one //
            if(index === 0){
              if(condition[0] === 'Rain'){
                  icon.classList.add('rain')
                } else if(condition[0] === 'Clouds'){
                  icon.classList.add('cloudy')
                } else if(condition[0] === 'Clear'){
                  icon.classList.add('sunny')
                } 
            }
  
            //day two//
            if(index === 1){
              if(condition[1] === 'Rain'){
                  icon.classList.add('rain')
                } else if(condition[1] === 'Clouds'){
                  icon.classList.add('cloudy')
                } else if(condition[1] === 'Clear'){
                  icon.classList.add('sunny')
                } 
            }
  
            //day three //
  
            if(index === 2){
              if(condition[2] === 'Rain'){
                  icon.classList.add('rain')
                 } else if(condition[2] === 'Clouds'){
                  icon.classList.add('cloudy')
                } else if(condition[2] === 'Clear'){
                  icon.classList.add('sunny')
                } 
            }
  
             //day four //
  
             if(index === 3){
              if(condition[3] === 'Rain'){
                  icon.classList.add('rain')
                } else if(condition[3] === 'Clouds'){
                  icon.classList.add('cloudy')
                } else if(condition[3] === 'Clear'){
                  icon.classList.add('sunny')
                } 
            }

              //day five //
  
             if(index === 4){
              if(condition[4] === 'Rain'){
                  icon.classList.add('rain')
                 } else if(condition[4] === 'Clouds'){
                  icon.classList.add('cloudy')
                } else if(condition[4] === 'Clear'){
                  icon.classList.add('sunny')
                } 
            }
  
             //day six //
  
             if(index === 5){
              if(condition[5] === 'Rain'){
                  icon.classList.add('rain')
                } else if(condition[5] === 'Clouds'){
                  icon.classList.add('cloudy')
                } else if(condition[5] === 'Clear'){
                  icon.classList.add('sunny')
                } 
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
    let weekday = ['','Monday','Tuesday','Wednesday','Thursday','Friday','Saturday'];
    const daysOfWeek = document.querySelectorAll('#determine_day')
    daysOfWeek.forEach((day, index) =>{
       switch(index){
          case 0:
            day.innerHTML = weekday[d.getDay()+1]
          break;
          case 1:
            day.innerHTML = weekday[d.getDay()+2]
          break;
          case 2:
            day.innerHTML = weekday[d.getDay()+3]
          break; 
          case 3:
            day.innerHTML = weekday[d.getDay()+3]
          break; 
          case 4:
            day.innerHTML = weekday[d.getDay()-2]
          break; 
          case 5:
            day.innerHTML = weekday[d.getDay()-1]
          break; 
       }
    })
  }

 

  