const weekday = ["Pazar", "Pazartesi", "Salı", "Çarşamba", "Perşembe", "Cuma", "Cumartesi"];


let userName = prompt("Lütfen adınızı giriniz.")
let userInput = document.querySelector("#user-input")
let timeSelector = document.querySelector("#date-timer")



userInput.innerHTML = `Merhaba ${userName}! Hoşgeldiniz!`
    



function liveTime() {
    let getDate = new Date()
    let currentTime = getDate.getHours() + ":" + getDate.getMinutes() + ":" + getDate.getSeconds();
    let day = weekday[getDate.getDay()]
    timeSelector.innerHTML = `${currentTime} ${day}`
}

setInterval(liveTime,1000)