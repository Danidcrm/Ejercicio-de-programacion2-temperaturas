function convertirTemperatura(){

    const temperaturaCelsius = prompt("Ingrese una temperatura en grados Celsius: ")//pedir la temperatura en °C
    
    if (isNaN(temperaturaCelsius)){//Comprueba si el prompt corresponde a número
    
        alert("Porfavor, ingresa un valor numérico.");
        convertirTemperatura();
        return;
    }
        //Convertir a fahrenheit y kelvin
        let temperaturaFahrenheit = (Number(temperaturaCelsius) * 9/5) + 32;
        let temperaturaKelvin = Number(temperaturaCelsius) + 273;
        
        console.log(`Temperatura en Fahrenheit: ` + temperaturaFahrenheit + `°F`);
        console.log(`Temperatura en Kelvin: ` + temperaturaKelvin + `K`);
    
    }
    convertirTemperatura();