import MONTHS from './months.js'
import {getCities, getCitiesNew} from './weather.js'

const input = document.querySelector('.spotlight-input')
const citiesList = document.querySelector('.spotlight-cities-list')
const smbButton = document.querySelector('.spotlight-button')
const dubaiButton = document.querySelector('.button-dubai')
const londonButton = document.querySelector('.button-london')
const newYorkButton = document.querySelector('.button-new-york')
const parisButton = document.querySelector('.button-paris')
const questionItemContent = document.querySelectorAll('.question-item-content')
const questionTab = document.querySelectorAll('.question-tab')
const itemCity = document.querySelectorAll('.item-city')
let searchTimeout;

input.addEventListener('input', () => {
  clearTimeout(searchTimeout)
  searchTimeout = setTimeout(() => searchStates(input.value), 800)
})

function listenCityItem() {
  const selectCityButtonsList = document.querySelectorAll('.button-cities-item')
  selectCityButtonsList.forEach(function(el){
    el.addEventListener('click', () => {
      input.value = el.value
      citiesList.classList.remove('display-block')
    })
  });
}

const pushCitiesContenttoList = cities => {
  if (cities.data.length > 0) {
    const html = cities.data
    .map( city =>
          `
        <li class="spotlight-cities-item">
          <button class="button-cities-item" value="${city.city}, ${city.countryCode}" type="button">
            ${city.city}, ${city.countryCode}
          </button> 
        </li>
        `
    ).join('')
    citiesList.innerHTML = html
    listenCityItem()
  } else {
    citiesList.innerHTML = `
    <div class="city-not-found">City not found, please try to change your search query</div>
    `
  }
}

input.addEventListener('input', () => {
  if(input.value === '') {
    citiesList.classList.remove('display-block')
  }
  else if (input.value !== ''){
    citiesList.classList.add('display-block')
  }
})

document.addEventListener('DOMContentLoaded', () => { 
  window.addEventListener('click', e => {
    const target = e.target 
    if (!target.closest('.spotlight-cities-list') && !target.closest('.spotlight-cities-item')) { 
      citiesList.classList.remove('display-block')
    }
  })
})

function capitalizeFirstLetter(string) {
  return string.charAt(0).toUpperCase() + string.slice(1);
}

async function showWeatherData() {
  // let cityData = input.value
  // let getReturnCitiesFunction = getCitiesNew(cityData)

  // getReturnCitiesFunction.then(function(cityData) {
  //   const weatherIcon = document.querySelector('.weather-icon')
  //   const weatherIconWrapper = document.querySelector('.weather-icon-wrapper')
  //   const cityNameTitle = document.querySelector('.city-name-title')
  //   const weaterTemperature  = document.querySelector('.weater-temperature')
  //   const weatherName  = document.querySelector('.weather-name')
  //   const weatherDescription  = document.querySelector('.weather-description')
  //   const currentDate = document.querySelector('.current-date')
  //   const minDegree  = document.querySelector('.min-degree')
  //   const maxDegree = document.querySelector('.max-degree')
    

  //   weatherIconWrapper.innerHTML = `<img src="http://openweathermap.org/img/wn/${cityData.weather[0]['icon']}@2x.png">`
  //   weaterTemperature.innerHTML = Math.round((cityData.main.temp - 32) / 1.8000) + '°C'   
  //   cityNameTitle.textContent = `${cityData.name}, ${cityData.sys.country}`
  //   weatherName.textContent = cityData.weather[0].main
  //   weatherDescription.textContent = cityData.weather[0].description
  //   currentDate.textContent = getDate()
  //   minDegree.textContent = Math.round((cityData.main.temp_min - 32) / 1.8000) + '°C'
  //   maxDegree.textContent = Math.round((cityData.main.temp_max - 32) / 1.8000) + '°C'

  //   weatherDescription.textContent = capitalizeFirstLetter(weatherDescription.textContent)
  // })

  let cityData = input.value
  let getReturnCitiesFunction = getCitiesNew(cityData)

  console.log('getReturnCitiesFunction',getReturnCitiesFunction);

  getReturnCitiesFunction.then(function(citydata) {
    const weatherIcon = document.querySelector('.weather-icon')
    const weatherIconWrapper = document.querySelector('.weather-icon-wrapper')
    const cityNameTitle = document.querySelector('.city-name-title')
    const weaterTemperature  = document.querySelector('.weater-temperature')
    const weatherName  = document.querySelector('.weather-name')
    const weatherDescription  = document.querySelector('.weather-description')
    const currentDate = document.querySelector('.current-date')
    const minDegree  = document.querySelector('.min-degree')
    const maxDegree = document.querySelector('.max-degree')
    
    // console.log('citydata.weather[0]', citydata.weather[0]);
    weatherIconWrapper.innerHTML = `<img src="http://openweathermap.org/img/wn/${citydata.weather[0]['icon']}@2x.png">`
    weaterTemperature.innerHTML = Math.round((citydata.main.temp - 32) / 1.8000) + '°C'   
    cityNameTitle.textContent = `${citydata.name}, ${citydata.sys.country}`
    weatherName.textContent = citydata.weather[0].main
    weatherDescription.textContent = citydata.weather[0].description
    currentDate.textContent = getDate()
    minDegree.textContent = Math.round((citydata.main.temp_min - 32) / 1.8000) + '°C'
    maxDegree.textContent = Math.round((citydata.main.temp_max - 32) / 1.8000) + '°C'

    weatherDescription.textContent = capitalizeFirstLetter(weatherDescription.textContent)
  })

  // console.log('klkmlkl----30293012309');
  // console.log('sakdna', getCitiesNew(cityName)[0]);
  // const city = getCitiesNew(cityName)[0]
  // console.log(getCitiesNew(cityName)[0]);
  // console.log('klkmlkl', city);
  // const weatherIcon = document.querySelector('.weather-icon')
  // const weatherIconWrapper = document.querySelector('.weather-icon-wrapper')
  // const cityNameTitle = document.querySelector('.city-name-title')
  // const weaterTemperature  = document.querySelector('.weater-temperature')
  // const weatherName  = document.querySelector('.weather-name')
  // const weatherDescription  = document.querySelector('.weather-description')
  // const currentDate = document.querySelector('.current-date')
  // const minDegree  = document.querySelector('.min-degree')
  // const maxDegree = document.querySelector('.max-degree')
  

  // weatherIconWrapper.innerHTML = `<img src="http://openweathermap.org/img/wn/${city.weather[0]['icon']}@2x.png">`
  // weaterTemperature.innerHTML = Math.round(city.main.temp - 273) + '°C'    
  // cityNameTitle.textContent = `${city.name}, ${city.sys.country}`
  // weatherName.textContent = city.weather[0].main
  // weatherDescription.textContent = city.weather[0].description
  // currentDate.textContent = getDate() 
  // minDegree.textContent = Math.round(city.main.temp_min - 273) + '°C'
  // maxDegree.textContent = Math.round(city.main.temp_max - 273) + '°C'

  // weatherDescription.textContent = capitalizeFirstLetter(weatherDescription.textContent)
}

function getDate() {
  const time = new Date()
  const year = time.getFullYear()
  const month = time.getMonth() 
  const day = time.getDate()
  
  return `${day} ${MONTHS[month]} ${year}`
  
}

smbButton.addEventListener('click', (event) => {
  event.preventDefault();
  showWeatherData()
  input.value = ''
  citiesList.classList.remove('display-block')
});
  
function windowScrollToSpotlightSection() {
  window.scroll({
    left: 0,
    top: 0,
    behavior: 'smooth'
  })
}

dubaiButton.addEventListener('click', () => {
  let getReturnCitiesFunction = getCitiesNew("dubai")
  let cityData;

  getReturnCitiesFunction.then(function(result) {
    cityData = result

    const weatherIcon = document.querySelector('.weather-icon')
    const weatherIconWrapper = document.querySelector('.weather-icon-wrapper')
    const cityNameTitle = document.querySelector('.city-name-title')
    const weaterTemperature  = document.querySelector('.weater-temperature')
    const weatherName  = document.querySelector('.weather-name')
    const weatherDescription  = document.querySelector('.weather-description')
    const currentDate = document.querySelector('.current-date')
    const minDegree  = document.querySelector('.min-degree')
    const maxDegree = document.querySelector('.max-degree')

    weatherIconWrapper.innerHTML = `<img src="http://openweathermap.org/img/wn/${cityData.weather[0]['icon']}@2x.png">`
    weaterTemperature.innerHTML = Math.round((cityData.main.temp - 32) / 1.8000) + '°C'   
    cityNameTitle.textContent = `${cityData.name}, ${cityData.sys.country}`
    weatherName.textContent = cityData.weather[0].main
    weatherDescription.textContent = cityData.weather[0].description
    currentDate.textContent = getDate()
    minDegree.textContent = Math.round((cityData.main.temp_min - 32) / 1.8000) + '°C'
    maxDegree.textContent = Math.round((cityData.main.temp_max - 32) / 1.8000) + '°C'

    weatherDescription.textContent = capitalizeFirstLetter(weatherDescription.textContent)
  })

  windowScrollToSpotlightSection()
})

londonButton.addEventListener('click', () => {
  let getReturnCitiesFunction = getCitiesNew("london")
  let cityData;

  getReturnCitiesFunction.then(function(result) {
    cityData = result

    const weatherIcon = document.querySelector('.weather-icon')
    const weatherIconWrapper = document.querySelector('.weather-icon-wrapper')
    const cityNameTitle = document.querySelector('.city-name-title')
    const weaterTemperature  = document.querySelector('.weater-temperature')
    const weatherName  = document.querySelector('.weather-name')
    const weatherDescription  = document.querySelector('.weather-description')
    const currentDate = document.querySelector('.current-date')
    const minDegree  = document.querySelector('.min-degree')
    const maxDegree = document.querySelector('.max-degree')
    
    weatherIconWrapper.innerHTML = `<img src="http://openweathermap.org/img/wn/${cityData.weather[0]['icon']}@2x.png">`
    weaterTemperature.innerHTML = Math.round((cityData.main.temp - 32) / 1.8000) + '°C'   
    cityNameTitle.textContent = `${cityData.name}, ${cityData.sys.country}`
    weatherName.textContent = cityData.weather[0].main
    weatherDescription.textContent = cityData.weather[0].description
    currentDate.textContent = getDate()
    minDegree.textContent = Math.round((cityData.main.temp_min - 32) / 1.8000) + '°C'
    maxDegree.textContent = Math.round((cityData.main.temp_max - 32) / 1.8000) + '°C'

    weatherDescription.textContent = capitalizeFirstLetter(weatherDescription.textContent)
  })

  windowScrollToSpotlightSection()
})

newYorkButton.addEventListener('click', () => {
  let getReturnCitiesFunction = getCitiesNew("New York")
  let cityData;

  getReturnCitiesFunction.then(function(result) {
    cityData = result

    const weatherIcon = document.querySelector('.weather-icon')
    const weatherIconWrapper = document.querySelector('.weather-icon-wrapper')
    const cityNameTitle = document.querySelector('.city-name-title')
    const weaterTemperature  = document.querySelector('.weater-temperature')
    const weatherName  = document.querySelector('.weather-name')
    const weatherDescription  = document.querySelector('.weather-description')
    const currentDate = document.querySelector('.current-date')
    const minDegree  = document.querySelector('.min-degree')
    const maxDegree = document.querySelector('.max-degree')
    
    weatherIconWrapper.innerHTML = `<img src="http://openweathermap.org/img/wn/${cityData.weather[0]['icon']}@2x.png">`
    weaterTemperature.innerHTML = Math.round((cityData.main.temp - 32) / 1.8000) + '°C'   
    cityNameTitle.textContent = `${cityData.name}, ${cityData.sys.country}`
    weatherName.textContent = cityData.weather[0].main
    weatherDescription.textContent = cityData.weather[0].description
    currentDate.textContent = getDate()
    minDegree.textContent = Math.round((cityData.main.temp_min - 32) / 1.8000) + '°C'
    maxDegree.textContent = Math.round((cityData.main.temp_max - 32) / 1.8000) + '°C'

    weatherDescription.textContent = capitalizeFirstLetter(weatherDescription.textContent)
  })

  windowScrollToSpotlightSection()
})

parisButton.addEventListener('click', () => {
  let getReturnCitiesFunction = getCitiesNew("paris")
  let cityData;

  getReturnCitiesFunction.then(function(result) {
    cityData = result

    const weatherIcon = document.querySelector('.weather-icon')
    const weatherIconWrapper = document.querySelector('.weather-icon-wrapper')
    const cityNameTitle = document.querySelector('.city-name-title')
    const weaterTemperature  = document.querySelector('.weater-temperature')
    const weatherName  = document.querySelector('.weather-name')
    const weatherDescription  = document.querySelector('.weather-description')
    const currentDate = document.querySelector('.current-date')
    const minDegree  = document.querySelector('.min-degree')
    const maxDegree = document.querySelector('.max-degree')
    
    weatherIconWrapper.innerHTML = `<img src="http://openweathermap.org/img/wn/${cityData.weather[0]['icon']}@2x.png">`
    weaterTemperature.innerHTML = Math.round((cityData.main.temp - 32) / 1.8000) + '°C'   
    cityNameTitle.textContent = `${cityData.name}, ${cityData.sys.country}`
    weatherName.textContent = cityData.weather[0].main
    weatherDescription.textContent = cityData.weather[0].description
    currentDate.textContent = getDate()
    minDegree.textContent = Math.round((cityData.main.temp_min - 32) / 1.8000) + '°C'
    maxDegree.textContent = Math.round((cityData.main.temp_max - 32) / 1.8000) + '°C'

    weatherDescription.textContent = capitalizeFirstLetter(weatherDescription.textContent)
  })

  windowScrollToSpotlightSection()
})

function showQuectionTabContent () {
let questionIcons = document.querySelectorAll('.question-icon')

  questionTab.forEach( tab => {
    tab.addEventListener('click', (e) => {

      for(let i = 0; i <= questionIcons.length; i++) {

        if (!tab.nextElementSibling.classList.contains('display-block')) {
          tab.nextElementSibling.classList.add('display-block')
          tab.children[1].style.transform = 'rotate(-180deg)'
        } else {
          tab.nextElementSibling.classList.remove('display-block')
          tab.children[1].style.transform = 'rotate(0deg)'
        }

      }
    })
  })
}

const searchStates = async (searchText) => {
  getCities(searchText)
  .then((data) => {pushCitiesContenttoList(data)})
  listenCityItem()
}

showQuectionTabContent()
