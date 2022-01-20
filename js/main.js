let loc=document.querySelector('.location')
let climate=document.querySelector('.climate')
let value=document.querySelector('.temp-value')
window.addEventListener('load',()=>{
    let lat;
    let long;
    let key='6585564637c5a310b3e1d72b3f988549';
    if(navigator.geolocation){
        navigator.geolocation.getCurrentPosition(position=>{
         lat=position.coords.latitude
         long=position.coords.longitude
         const api=`https://api.openweathermap.org/data/2.5/weather?lat=${lat}&lon=${long}&appid=${key}`
         fetch(api).then(res=>res.json()).then(data=>{
             console.log(data)
             const {name}=data
             const {feels_like}=data.main
             const {main}=data.weather[0]
             loc.textContent=name
             value.textContent=Math.floor(feels_like -273)
             climate.textContent=main
         })
        })
    }
})