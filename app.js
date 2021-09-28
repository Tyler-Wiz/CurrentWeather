// form.addEventListener('submit', (e) => {
//   e.preventDefault()
//   let lat;
//   let lon;
//   const inputLocation = document.getElementById('location_input')
//   const pasteError = document.getElementById('error')

//   if (navigator.geolocation) {
//     navigator.geolocation.watchPosition(position => {
//         lat = position.coords.latitude
//         lon = position.coords.longitude
//         const apiCall = 'https://api.openweathermap.org/data/2.5/weather/?q=london&units=metric&appid=b6ea019473b1df46a1fa1dac301537dd'
//         fetch(apiCall)
//         .then(res => {
//           if(res.ok){
//             return res.json()
//         } else {
//             throw new Error("location is not available")
//         }})
//         .then(data => {
//            const result = document.getElementById('results')
//             let html=""
//             let temperature = data.main
//             const {temp} = temperature
//              html = `
//                <h3 class="temp">The current Temperature in ${lon} ${lat} is</h3>
//                <h2>${temp} C</h2>
//              `
//              result.innerHTML = html
//         }).catch(error => {
//             pasteError.textContent = error
//         });
//     });
//   } 
// })

fetch('https://api.openweathermap.org/data/2.5/forecast/daily?q=abuja&units=metric&appid=b6ea019473b1df46a1fa1dac301537dd')
    .then(res => {
      if(res.ok){
        return res.json()
      } else {
        throw new Err
      }
    }).then(data => {
      const listDays = data.list
      const fiveDays = listDays.slice(1,7)
      const [one, two, three, four, five, six] = fiveDays
      let condition = []

      let dayOne = listDays[0]
      let todayTemp = dayOne.temp.day
      let todayWeather = dayOne

   console.log(dayOne)

     document.querySelector('#tempOne').textContent = todayTemp


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

       })
    })

 

  function dayOfWeek() {
    let d = new Date();
    let weekday = ['Sunday','Monday','Tuesday','Wednesday','Thursday','Friday','Saturday'];
    const daysOfWeek = document.querySelectorAll('#determine_day')
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
            day.innerHTML = weekday[d.getDay()+3]
          break; 
          case 4:
            day.innerHTML = weekday[d.getDay()+4]
          break; 
          case 5:
            day.innerHTML = weekday[d.getDay()-2]
          break; 
       }
    })
  }

 dayOfWeek()