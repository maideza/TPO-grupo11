// script.js
document.addEventListener("DOMContentLoaded", function () {
    const zoomImage = document.querySelector(".palillos");
    const container = document.querySelector(".container");

    zoomImage.addEventListener("mouseenter", () => {
        container.style.transform = "scale(1.1)"; /* Hace un zoom al 120% cuando el cursor entra en la imagen */
    });

    zoomImage.addEventListener("mouseleave", () => {
        container.style.transform = "scale(1)"; /* Restablece el zoom cuando el cursor sale de la imagen */
    });
});


// Boton de redireccionamiento
document.addEventListener("DOMContentLoaded", function () {
    const explorarButton = document.getElementById("explorarbutton");

    explorarButton.addEventListener("click", function () {
        // Redirige al usuario a la página "explorar.html"
        window.location.href ="main.html";
    });
});