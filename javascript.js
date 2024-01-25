function temperatura(){

    const temperaturaCelsius = prompt("Ingrese una temperatura en grados Celsius: ")
    if (isNaN(temperaturaCelsius)){
    
        alert("Porfavor, ingresa un valor numérico.");
        temperatura();
        return;
    }
        
        let temperaturaFahrenheit = (Number(temperaturaCelsius) * 9/5) + 32;
        let temperaturaKelvin = Number(temperaturaCelsius) + 273;
        
        console.log(`Temperatura en Fahrenheit: ` + temperaturaFahrenheit + `°F`);
        console.log(`Temperatura en Kelvin: ` + temperaturaKelvin + `K`);
    
    }
    temperatura();

