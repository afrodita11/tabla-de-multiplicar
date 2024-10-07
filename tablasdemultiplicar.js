

function generarTablaMultiplicar(...numerosParametro) {
    // Iteramos sobre cada número pasado como parámetro
    for (let numero of numerosParametro) {
        console.log('Tabla de multiplicar del ' + numero + ':');
        
        // Generamos la tabla de multiplicar para cada número
        for (let i = 1; i <= 10; i++) {
            console.log(`${numero} x ${i} = ${numero * i}`);
        }
        
        // Imprimimos una línea en blanco para separar las tablas
        console.log('');
    }
}

// Llamada a la función para generar las tablas de multiplicar del 2, 3 y 5
generarTablaMultiplicar(2, 3, 5);

