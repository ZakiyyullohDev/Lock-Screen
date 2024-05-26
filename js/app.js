const bgImagesBlurred = ['/img/bg1blurred.jpg','/img/bg2blurred.jpg','/img/bg3blurred.jpg','/img/bg4blurred.jpg']
const days = ['Sunday', 'Monday', 'Tuesday', 'Wednesday', 'Thursday', 'Friday', 'Saturday']
const bgImages = ['/img/bg1.jpg', '/img/bg2.jpg','/img/bg3.jpg','/img/bg4.jpg']
const secretPasswordText = document.getElementById('secretPasswordText')
const weatherInfoWrapper = document.getElementById('weatherInfoWrapper')
const unlockScreenBtn = document.getElementById('unlockScreenBtn')
const passwordWrapper = document.getElementById('passwordWrapper')
const welcomeWrapper = document.getElementById('welcomeWrapper')
const randomIndex = Math.floor(Math.random() * bgImages.length)
const passwordInput = document.getElementById('passwordInput')
const inputsWrapper = document.getElementById('inputsWrapper')
const lockScreenBtn = document.getElementById('lockScreenBtn')
const openingSound = document.getElementById('openingSound')
const unlockScreen = document.getElementById('unlockScreen')
const userWrapper = document.getElementById('userWrapper')
const timeWrapper = document.getElementById('timeWrapper')
const cloudInfoHtml = document.getElementById('cloudInfo')
const windSpeedHtml = document.getElementById('windSpeed')
const humidityHtml = document.getElementById('humidity')
const cityNameHtml = document.getElementById('cityName')
const cityTempHtml = document.getElementById('cityTemp')
const todayDate = document.getElementById('todayDate')
const blurringDiv = document.getElementById('blurrer')
const userInfo = document.getElementById('userInfo')
const userName = document.getElementById('userName')
const userImg = document.getElementById('userImg')
const editBtn = document.getElementById('editBtn')
const time = document.getElementById('time')
const body = document.querySelector('body')
let userPasswordArray = []
let userNameArray = []
let date = new Date()

const apiKey =  '913dfb1df5fd26ad1747ebdad2f4c841'

async function fetchWeather() {
    try {
        // const response = await fetch(`https://api.openweathermap.org/data/2.5/weather?q=${'Kokand'}&appid=${apiKey}`)
        const response = await fetch(`https://api.openweathermap.org/data/2.5/weather?units=metric&q=kokand&appid=${apiKey}`)
        const data = await response.json()
        const cityName = data.name;// thi is city name info
        const cloud = data.weather[0].main;// this is weather cloud info
        const temp = `${Math.round(data.main.feels_like)}°C`;// this is weather temp info
        const windSpeed =`${Math.round(data.wind.speed)} km/h`;// this is wind speed info
        const humidity =`Humidity ${Math.round(data.main.humidity)}%`;// this is weather humidity info
        windSpeedHtml.textContent = windSpeed
        cloudInfoHtml.textContent = cloud
        humidityHtml.textContent = humidity
        cityNameHtml.textContent = cityName
        cityTempHtml.textContent = temp
        
    } catch (error) {
        console.error(error)
    }
}

fetchWeather()

const test = () => {
    if (!localStorage.getItem('UserName:') || !localStorage.getItem('Password:')) {
        localStorage.setItem('UserName:', 'ZakiyDev')
        localStorage.setItem('Password:', '1571515z')
    }
}
test()

// console.log(localStorage.getItem('UserName:'))


window.addEventListener('DOMContentLoaded', () => {
    document.body.style.backgroundImage = `url('${bgImages[randomIndex]}')`
})

const getNameFromStorage = () => {
    userName.textContent = localStorage.getItem('UserName:')
}

const getPasswordFromStorage = () => {
    secretPasswordText.textContent = localStorage.getItem('Password:')
}

getNameFromStorage()

getPasswordFromStorage()

const setNameToStorage = ()=> {
    localStorage.setItem('UserName:', userNameArray)
}

const setPasswordToStorage = ()=> {
    localStorage.setItem('Password:', userPasswordArray)
}

unlockScreenBtn.addEventListener('click', ()=> {
    if (passwordInput.value == `${localStorage.getItem('Password:')}`) {
        inputsWrapper.style.display = 'none'
        welcomeWrapper.style.display = 'flex'
        passwordWrapper.style.display = 'none'
        passwordInput.value = ''
        openingSound.play()
        
        setTimeout(() => {
            userInfo.style.display = 'none'
            timeWrapper.style.display = 'flex'
            unlockScreen.style.display = 'none'
            welcomeWrapper.style.display = 'none'
            weatherInfoWrapper.style.display = 'flex'
            secretPasswordText.style.display = 'none'
            document.body.style.backgroundImage = `url('${bgImages[randomIndex]}')`
            
        }, 3000)
        return ''
    } else {
        
        const errorText = document.createElement('p')
        errorText.classList.add('error')
        errorText.textContent = 'Password xato kiritildi!'
        passwordInput.value = ''
        userWrapper.appendChild(errorText)
        setTimeout(() => {
            errorText.classList.add('display-none')
        }, 3000)
    }
})

lockScreenBtn.addEventListener('click', () => {
    userInfo.style.display = 'flex'
    timeWrapper.style.display = 'none'
    unlockScreen.style.display = 'flex'
    inputsWrapper.style.display = 'flex'
    passwordWrapper.style.display = 'flex'
    secretPasswordText.style.display = 'flex'
    weatherInfoWrapper.style.display = 'none'
    
    body.style.backgroundImage = `url('${bgImagesBlurred[randomIndex]}')`
})

setInterval(() => {
    date = new Date()
    let minutes = date.getMinutes() < 10 ? '0' + date.getMinutes() : date.getMinutes()
    time.textContent = `${date.getHours()}:${minutes}`
    const dayOfWeek = days[date.getDay()]
    
    todayDate.textContent = `${date.getFullYear()} Year, ${date.getDate()} ${date.toLocaleString('default', { month: 'long' })} ${dayOfWeek}`
}, 1000)

passwordInput.addEventListener('keydown', (e)=> {
    if (e.key === "Enter") {
        if (passwordInput.value == `${localStorage.getItem('Password:')}`) {
            inputsWrapper.style.display = "none"
            welcomeWrapper.style.display = "flex"
            
            openingSound.play()
            passwordInput.value = ''
            
            setTimeout(() => {
                userInfo.style.display = "none"
                timeWrapper.style.display = "flex"
                unlockScreen.style.display = "none"
                welcomeWrapper.style.display = "none"
                passwordWrapper.style.display = "none"
                secretPasswordText.style.display = 'none'
                weatherInfoWrapper.style.display = 'flex'
                document.body.style.backgroundImage = `url('${bgImages[randomIndex]}')`
            }, 3000)
        }
    }
})


const editUserName = () => {
    userName.addEventListener('click', () => {
        userName.setAttribute('contenteditable', 'true')
    })
    userName.addEventListener('keydown', (e)=> {
        if (e.keyCode === 13) {
            userName.setAttribute('contenteditable', 'false')
            userNameArray.push(userName.textContent)
            console.log(userNameArray)
            setNameToStorage()
        }
    })
}

const editPassword = () => {
    secretPasswordText.addEventListener('click', () => {
        secretPasswordText.setAttribute('contenteditable', 'true')
    })
    secretPasswordText.addEventListener('keydown', (e)=> {
        if (e.key === 'Enter') {
            secretPasswordText.setAttribute('contenteditable', 'false')
            userPasswordArray.push(secretPasswordText.textContent)
            console.log(userPasswordArray)
            setPasswordToStorage()
        }
    })
}

editUserName()
editPassword()