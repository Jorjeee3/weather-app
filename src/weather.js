// import axios from 'axios';


export async function getCities (searchText) {
    const options = {
        method: 'GET',
        headers: {
            'X-RapidAPI-Key': '5ccc2923a5mshd8c96e49b12a18dp17b0f7jsn9deedd97ccf7',
            'X-RapidAPI-Host': 'wft-geo-db.p.rapidapi.com'
        }
        };
    if(!searchText.length) return []
    console.log(searchText);
    const response = await fetch(`https://wft-geo-db.p.rapidapi.com/v1/geo/cities?namePrefix=${searchText}&limit=10`, options)
    const states = await response.json()
    return states
}

export async function getCitiesNew (city) {
 let searchText = city
 let dataCity;

    // try {
    //     let response = await axios.get(`http://api.openweathermap.org/data/2.5/weather?q=${searchText}&appid=b39ee5e4e806355fcce52d45a1d0f946&units=imperial`)
    //     dataCity = response.data
    // } catch (error) {
    //     console.log(error);
    // }
    try {
        let response = await fetch(`http://api.openweathermap.org/data/2.5/weather?q=${searchText}&appid=b39ee5e4e806355fcce52d45a1d0f946&units=imperial`)
        let newData = response.json()
        dataCity = newData
    } catch (error) {
        console.log(error);
    }

    return dataCity
}

export async function getCitiesOpenWeather (city) {
 let searchText = city
 let dataCity;

    // try {
    //     let response = await axios.get(`http://api.openweathermap.org/data/2.5/weather?q=${searchText}&appid=b39ee5e4e806355fcce52d45a1d0f946&units=imperial`)
    //     dataCity = response.data
    // } catch (error) {
    //     console.log(error);
    // }
    try {
        let response = await fetch(`http://api.openweathermap.org/data/2.5/weather?q=${searchText}&appid=b39ee5e4e806355fcce52d45a1d0f946&units=imperial`)
        let newData = response.json()
        dataCity = newData
    } catch (error) {
        console.log(error);
    }
    
    return dataCity
}