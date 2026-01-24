const producto = {
    nombre: "tacos", // Quizás aquí quisiste poner el nombre de un artículo
    precio: 20,
    cantidad: 2
};

// Debes llamar al objeto para obtener sus valores
const total = producto.precio * producto.cantidad;

console.log("Subtotal= ", total);
console.log("IVA= ", total * 0.16);
console.log("Total= ", total + (total * 0.16));