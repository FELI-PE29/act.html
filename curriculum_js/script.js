// Mensaje en consola
console.log("Curriculum cargado correctamente");

// Bienvenida
window.addEventListener("load", function () {
    alert("Bienvenido al curriculum de Andrés Plazas");
});

// ==============================
// CAMBIAR COLOR DEL ENCABEZADO
// ==============================
const encabezado = document.querySelector(".encabezado");

encabezado.addEventListener("click", function () {
    encabezado.style.backgroundColor = "#1a4f7a";
});

// ==============================
// RESALTAR HABILIDADES
// ==============================
const habilidades = document.querySelectorAll(".columna2 ul li");

habilidades.forEach(function (item) {
    item.addEventListener("mouseover", function () {
        item.style.color = "blue";
        item.style.fontWeight = "bold";
    });

    item.addEventListener("mouseout", function () {
        item.style.color = "black";
        item.style.fontWeight = "normal";
    });
});

// ==============================
// MOSTRAR MENSAJE EN EXPERIENCIA
// ==============================
const experiencia = document.querySelector(".columna1");

experiencia.addEventListener("click", function () {
    alert("Tienes experiencia en soporte técnico 💻");
});

// ==============================
// EFECTO EN LA FOTO
// ==============================
const foto = document.querySelector(".foto img");

foto.addEventListener("mouseover", function () {
    foto.style.transform = "scale(1.1)";
});

foto.addEventListener("mouseout", function () {
    foto.style.transform = "scale(1)";
});
