const form = document.getElementById('form')

form.addEventListener('submit', (e) => {
const inputLocation = document.getElementById('location_input')
const apiCall = 'https://api.openweathermap.org/data/2.5/weather/?q='+inputLocation.value+'&units=metric&appid=b6ea019473b1df46a1fa1dac301537dd'
const pasteError = document.getElementById('error')
    e.preventDefault()
    fetch(apiCall)
    .then(res => {
      if(res.ok){
        return res.json()
    } else {
        throw new Error("location is not available")
    }})
    .then(data => {
       const result = document.getElementById('results')
        let html=""
        let temperature = data.main
        const {temp} = temperature
         html = `
           <h3 class="temp">The current Temperature in ${inputLocation.value} is</h3>
           <h2>${temp} C</h2>
         `
         result.innerHTML = html
    }).catch(error => {
        pasteError.textContent = error
    });
})
