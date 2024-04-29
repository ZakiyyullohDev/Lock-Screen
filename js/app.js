const unlockScreenBtn = document.getElementById('unlockScreenBtn');
const passwordInput = document.getElementById('passwordInput');
const lockScreenBtn = document.getElementById('lockSreenBtn');
const unlockScreen = document.getElementById('unlockScreen');
const userWrapper = document.getElementById('userWrapper');
const timeWrapper = document.getElementById('timeWrapper');
const blurringDiv = document.getElementById('blurrer');
const todayDate = document.getElementById('todayDate');
const userInfo = document.getElementById('userInfo');
const userName = document.getElementById('userName');
const userImg = document.getElementById('userImg');
const time = document.getElementById('time');
const body = document.querySelector('body');
let date = new Date();

lockScreenBtn.addEventListener('click', () => {
    body.classList.add('blurredImg');
    timeWrapper.style.display = 'none';
    userInfo.style.display = 'flex';
    unlockScreen.style.display = 'flex';
});

setInterval(() => {
    date = new Date();
    let minutes = date.getMinutes() < 10 ? '0' + date.getMinutes() : date.getMinutes();
    time.textContent = `${date.getHours()}:${minutes}`;
    
    // Update today's date
    todayDate.textContent = `${date.getFullYear()} Year, ${date.getDate()} ${date.toLocaleString('default', { month: 'long' })}`;
}, 1000);

unlockScreenBtn.addEventListener('click', ()=> {
    if (passwordInput.value == '1571515z') {
        body.classList.remove('blurredImg');
        timeWrapper.style.display = 'flex';
        userInfo.style.display = 'none';
        unlockScreen.style.display = 'none';
        passwordInput.value = ''
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

passwordInput.addEventListener('keydown', (e)=> {
    if (e.keyCode === 13) {
        if (passwordInput.value == '1571515z') {
            body.classList.remove('blurredImg');
            timeWrapper.style.display = 'flex';
            userInfo.style.display = 'none';
            unlockScreen.style.display = 'none';
            passwordInput.value = ''
        }
    }
})
