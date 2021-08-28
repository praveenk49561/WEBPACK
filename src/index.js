let x = 0;
let interval;
let rootElement = document.getElementById('root');
let numElement = document.createElement('div');
rootElement.appendChild(numElement);

function onClickOn() {
    interval = setInterval(() => {
        x += 1;
        numElement.innerText = x;
    }, 1000);
}

function onClickOff() {
    clearInterval(interval);
}

let buttonElementOn = document.createElement('button');
buttonElementOn.innerHTML = 'ON';
buttonElementOn.onclick = onClickOn;

let buttonElementOff = document.createElement('button');
buttonElementOff.innerHTML = 'OFF';
buttonElementOff.onclick = onClickOff;

rootElement.appendChild(buttonElementOn);
rootElement.appendChild(buttonElementOff);

