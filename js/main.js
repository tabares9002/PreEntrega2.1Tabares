var productos = [
    { nombre: "Teclado", precio: 10 },
    { nombre: "Mouse", precio: 8 },
    { nombre: "Parlantes", precio: 5 },
    { nombre: "Monitor", precio: 150 },
    { nombre: "Torre", precio: 150 }
];

var nombreProducto = prompt("Ingrese el nombre del producto:");
nombreProducto = nombreProducto.toLowerCase();

var productoEncontrado = productos.find

(function (producto) {
    return producto.nombre.toLowerCase() === nombreProducto;
});

if (productoEncontrado) {
    alert("El precio del producto" + " " + productoEncontrado.nombre + " es de: " + "U$S" + " " + productoEncontrado.precio);
} else {
    alert("Lo siento, actualmente no tenemos el producto:" + " " + nombreProducto + " " + "en stock o escribió incorrectamente el nombre del producto.");
}