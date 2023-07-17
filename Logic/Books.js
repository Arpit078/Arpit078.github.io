async function getWeather(url){
    const res = await fetch(url)
    // console.log(res)
    const data = res.json()
    return data

}

getWeather('https://api.open-meteo.com/v1/forecast?latitude=52.52&longitude=13.41&hourly=temperature_2m').then((res)=>{
    console.log(res) 
})
// export default getWeather