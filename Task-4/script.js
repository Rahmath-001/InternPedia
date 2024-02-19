const temperatureInput = document.getElementById('temperature');
const convertButton = document.getElementById('convert-button');
const result = document.getElementById('result');

convertButton.addEventListener('click', function() {
    const temperature = parseFloat(temperatureInput.value);
    const unit = document.querySelector('input[name="unit"]:checked').value;

    let convertedTemperature;

    if (unit === 'celsius') {
        convertedTemperature = (temperature * 9 / 5) + 32;
        result.textContent = `${temperature}°C is equal to ${convertedTemperature.toFixed(2)}°F`;
    } else if (unit === 'fahrenheit') {
        convertedTemperature = (temperature - 32) * 5 / 9;
        result.textContent = `${temperature}°F is equal to ${convertedTemperature.toFixed(2)}°C`;
    } else {
        result.textContent = 'Please select a unit.';
    }

    setTimeout(()=> {
        result.textContent=''
    }, 4000);
});
