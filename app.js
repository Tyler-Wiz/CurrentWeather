
  let lat;
  let lon;
  const pasteError = document.getElementById('error')
  const form = document.querySelector('#form')

 form.addEventListener('submit', (e) => {
       const inputLocation = document.querySelector('#input_Location')
       e.preventDefault()
      fetch('https://api.openweathermap.org/data/2.5/forecast/daily?q='+inputLocation.value+'&units=metric&appid=b6ea019473b1df46a1fa1dac301537dd')
      .then(res => {
        if(res.ok){
          return res.json()
        } else {
          throw new Error("Your Location Is Not Recognized")
        }
      }).then(data => {
        const listDays = data.list
        const fiveDays = listDays.slice(1,7)
        const [one, two, three, four, five, six] = fiveDays
        let condition = []
        
        document.querySelector('#today_date').innerHTML = ` In ${inputLocation.value}`

        const forecast = document.querySelectorAll('#temp')
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
         
        let dayOne = listDays[0]
        let todayTemp = dayOne.temp.day
        let todayWeather = dayOne.weather[0].description
  
        const dayWeather = document.querySelector('#weather_today')
        document.querySelector('#tempOne').textContent = `${todayTemp} C`
        
       if(todayWeather === 'moderate rain'){
             dayWeather.classList.add('rain')
            } else if(todayWeather === 'light rain'){
              dayWeather.classList.add('rain')
            } else if(todayWeather === 'broken clouds'){
              dayWeather.classList.add('cloudy')
            } else if(todayWeather === 'overcast clouds'){
              dayWeather.classList.add('overcast')
            } else if(todayWeather === 'sky is clear'){
              dayWeather.classList.add('sunny')
            } else if(todayWeather === 'scattered clouds'){
              dayWeather.classList.add('scattered')
            } 
   
  
       
  
        for(let five of fiveDays){
          let weather = five.weather
          for(let weathers of weather) {
            condition.push(weathers.description)
         }
        }
  
        const icons = document.querySelectorAll('#icon')  
        
        icons.forEach((icon, index) => {
            //day one //
            if(index === 0){
              if(condition[0] === 'moderate rain'){
                  icon.classList.add('rain')
                 } else if(condition[0] === 'light rain'){
                  icon.classList.add('rain')
                } else if(condition[0] === 'broken clouds'){
                  icon.classList.add('cloudy')
                } else if(condition[0] === 'overcast clouds'){
                  icon.classList.add('overcast')
                } else if(condition[0] === 'sky is clear'){
                  icon.classList.add('sunny')
                } else if(condition[0] === 'scattered clouds'){
                  icon.classList.add('scattered')
                } 
            }
  
            //day two//
            if(index === 1){
              if(condition[1] === 'moderate rain'){
                  icon.classList.add('rain')
                 } else if(condition[1] === 'light rain'){
                  icon.classList.add('rain')
                } else if(condition[1] === 'broken clouds'){
                  icon.classList.add('cloudy')
                } else if(condition[1] === 'overcast clouds'){
                  icon.classList.add('overcast')
                } else if(condition[1] === 'sky is clear'){
                  icon.classList.add('sunny')
                } else if(condition[1] === 'scattered clouds'){
                  icon.classList.add('scattered')
                } 
            }
  
            //day three //
  
            if(index === 2){
              if(condition[2] === 'moderate rain'){
                  icon.classList.add('rain')
                 } else if(condition[2] === 'light rain'){
                  icon.classList.add('rain')
                } else if(condition[2] === 'broken clouds'){
                  icon.classList.add('cloudy')
                } else if(condition[2] === 'overcast clouds'){
                  icon.classList.add('overcast')
                } else if(condition[2] === 'sky is clear'){
                  icon.classList.add('sunny')
                } else if(condition[2] === 'scattered clouds'){
                  icon.classList.add('scattered')
                } 
            }
  
             //day four //
  
             if(index === 3){
              if(condition[3] === 'moderate rain'){
                  icon.classList.add('rain')
                 } else if(condition[3] === 'light rain'){
                  icon.classList.add('rain')
                } else if(condition[3] === 'broken clouds'){
                  icon.classList.add('cloudy')
                } else if(condition[3] === 'overcast clouds'){
                  icon.classList.add('overcast')
                } else if(condition[3] === 'sky is clear'){
                  icon.classList.add('sunny')
                } else if(condition[3] === 'scattered clouds'){
                  icon.classList.add('scattered')
                } 
            }
              //day five //
  
             if(index === 4){
              if(condition[4] === 'moderate rain'){
                  icon.classList.add('rain')
                 } else if(condition[4] === 'light rain'){
                  icon.classList.add('rain')
                } else if(condition[4] === 'broken clouds'){
                  icon.classList.add('cloudy')
                } else if(condition[4] === 'overcast clouds'){
                  icon.classList.add('overcast')
                } else if(condition[4] === 'sky is clear'){
                  icon.classList.add('sunny')
                } else if(condition[4] === 'scattered clouds'){
                  icon.classList.add('scattered')
                } 
            }
  
             //day six //
  
             if(index === 5){
              if(condition[5] === 'moderate rain'){
                  icon.classList.add('rain')
                 } else if(condition[5] === 'light rain'){
                  icon.classList.add('rain')
                } else if(condition[5] === 'broken clouds'){
                  icon.classList.add('cloudy')
                } else if(condition[5] === 'overcast clouds'){
                  icon.classList.add('overcast')
                } else if(condition[5] === 'sky is clear'){
                  icon.classList.add('sunny')
                } else if(condition[5] === 'scattered clouds'){
                  icon.classList.add('scattered')
                } 
            }
            
            dayOfWeek()
         })
         inputLocation.value = ''
        
      }).catch(error => {
        pasteError.textContent = error
        });
    }) 
  




 

  function dayOfWeek() {
    let d = new Date();
    let weekday = ['Sunday','Monday','Tuesday','Wednesday','Thursday','Friday','Saturday'];
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
            day.innerHTML = weekday[d.getDay()+4]
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

