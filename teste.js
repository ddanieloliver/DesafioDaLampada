const power = document.getElementById('power');
const lamp = document.getElementById('lamp');

let isLight = false;

function isLampBroken() {
    return lamp.src.indexOf('quebrada') > -1;
}

function lampOn() {
    if (!isLampBroken()) {
        lamp.src = './img/acesa.png'
        isLight = true
        power.textContent = "Desligar"
    }
}

function lampOff() {
    if (!isLampBroken()) {
        lamp.src = './img/apagada.png'
        isLight = false
        power.textContent = "Ligar"
    }
}


function toggleLight() {
    if (isLight) {
        lampOff()
    } else { lampOn() }
}

function lampBroken() {
    lamp.src = './img/quebrada.png'
}

power.addEventListener('click', toggleLight);

lamp.addEventListener('mouseover', lampOn)
lamp.addEventListener('mouseleave', lampOff)
lamp.addEventListener('dblclick', lampBroken)