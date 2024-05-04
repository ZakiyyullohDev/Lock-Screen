const bgImagesblurred = ['/img/bg1blurred.jpg','/img/bg2blurred.jpg','/img/bg3blurred.jpg','/img/bg4blurred.jpg']
const days = ['Sunday', 'Monday', 'Tuesday', 'Wednesday', 'Thursday', 'Friday', 'Saturday'];
const bgImages = ['/img/bg1.jpg', '/img/bg2.jpg','/img/bg3.jpg','/img/bg4.jpg'];
const unlockScreenBtn = document.getElementById('unlockScreenBtn');
const welcomeWrapper = document.getElementById('welcomeWrapper');
const passwordInput = document.getElementById('passwordInput');
const inputsWrapper = document.getElementById('inputsWrapper');
const lockScreenBtn = document.getElementById('lockSreenBtn');
const unlockScreen = document.getElementById('unlockScreen');
const userWrapper = document.getElementById('userWrapper');
const timeWrapper = document.getElementById('timeWrapper');
const blurringDiv = document.getElementById('blurrer');
const todayDate = document.getElementById('todayDate');
const userInfo = document.getElementById('userInfo');
const userName = document.getElementById('userName');
const userImg = document.getElementById('userImg');
const editBtn = document.getElementById('editBtn')
const time = document.getElementById('time');
const body = document.querySelector('body');
let userPasswordArray = []
let userNameArray = []
let date = new Date();

window.addEventListener('DOMContentLoaded', (event) => {
    const randomIndex = Math.floor(Math.random() * bgImages.length);
    
    document.body.style.backgroundImage = `url('${bgImages[randomIndex]}')`;
});

const getNameFromStorage = () => {
    // localStorage.getItem('UserName:')
    userName.textContent = localStorage.getItem('UserName:')
}

getNameFromStorage()

const setNameToStorage = ()=> {
    localStorage.setItem('UserName:', userNameArray)
}

unlockScreenBtn.addEventListener('click', ()=> {
    if (passwordInput.value == '1571515z') {
        welcomeWrapper.style.display = 'flex';
        inputsWrapper.style.display = 'none';
        passwordInput.value = ''
        
        setTimeout(() => {
            timeWrapper.style.display = 'flex';
            userInfo.style.display = 'none';
            unlockScreen.style.display = 'none';
            welcomeWrapper.style.display = 'none';
        }, 3000);
        return ''
    } else {
        
        const errorText = document.createElement('p')
        errorText.classList.add('error')
        errorText.textContent = 'Password xato kiritildi!'
        passwordInput.value = ''
        userWrapper.appendChild(errorText)
        setTimeout(() => {
            errorText.classList.add('display-none')
        }, 3000);
    }
})

lockScreenBtn.addEventListener('click', () => {
    timeWrapper.style.display = 'none';
    userInfo.style.display = 'flex';
    unlockScreen.style.display = 'flex';
    inputsWrapper.style.display = 'flex'
});

setInterval(() => {
    date = new Date();
    let minutes = date.getMinutes() < 10 ? '0' + date.getMinutes() : date.getMinutes();
    time.textContent = `${date.getHours()}:${minutes}`;
    const dayOfWeek = days[date.getDay()];
    
    todayDate.textContent = `${date.getFullYear()} Year, ${date.getDate()} ${date.toLocaleString('default', { month: 'long' })} ${dayOfWeek}`;
}, 1000);



passwordInput.addEventListener('keydown', (e)=> {
    if (e.keyCode === 13) {
        
        if (passwordInput.value == '1571515z') {
            welcomeWrapper.style.display = 'flex';
            inputsWrapper.style.display = 'none';
            passwordInput.value = ''
            
            setTimeout(() => {
                timeWrapper.style.display = 'flex';
                userInfo.style.display = 'none';
                unlockScreen.style.display = 'none';
                welcomeWrapper.style.display = 'none';
            }, 3000);
        } 
    }
})


const editUserName = () => {
    userName.addEventListener('click', () => {
        userName.setAttribute('contenteditable', 'true');
    });
    userName.addEventListener('keydown', (e)=> {
        if (e.keyCode === 13) {
            userName.setAttribute('contenteditable', 'false');
            userNameArray.push(userName.textContent)
            console.log(userNameArray)
            setNameToStorage()
        }
    })
};

editUserName()