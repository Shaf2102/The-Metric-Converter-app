function convertVolume() {
    let liters = document.getElementById('volume').value;
    let gallons = liters * 0.264;
    gallons = Math.floor(gallons * 1000) / 1000;
    document.getElementById('volumeResult').innerText = `${liters} liters = ${gallons} gallons`;
}

function convertLength() {
    let meters = document.getElementById('length').value;
    let feet = meters * 3.281;
    feet = Math.floor(feet * 1000) / 1000;
    document.getElementById('lengthResult').innerText = `${meters} meters = ${feet} feet`;
}

function convertMass() {
    let kilograms = document.getElementById('mass').value;
    let pounds = kilograms * 2.204;
    pounds = Math.floor(pounds * 1000) / 1000;
    document.getElementById('massResult').innerText = `${kilograms} kilograms = ${pounds} pounds`;
}
