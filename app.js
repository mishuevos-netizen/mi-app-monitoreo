function saludar() {
    document.getElementById('resultado').textContent = '¡Hola desde CI/CD! ◆◆';
    console.log("✔️Saludar ejecutado correctamente.");
}

function error() {
    document.getElementById('error').textContent = '¡Ups! Algo salió mal. ◆◆';
    console.error("✔️Error forzado.");
    // Simular error para monitoreo
    try {
        throw new Error("Error forzado para probar el monitoreo.");
    } catch (err) {
        console.error("🔍️Alerta: Error en la aplicación:", err);
    }
}

// Función para sumar (con un error oculto)
function sumar(a, b) {
    if (a < 0 || b < 0) {
        throw new Error("✔️No se pueden sumar números negativos.");
    }
    return a + b;
}
