//Creacion de elementos img de html
let sun = new Image();
let moon = new Image();
let earth = new Image();

const ctx = document.getElementById("canvasSolarSystem").getContext("2d");

function init() {
    sun.src = "canvas_sun.png";
    moon.src = "canvas_moon.png";
    earth.src = "canvas_earth.png";
    window.requestAnimationFrame(draw);
}

function draw() {

    //Especifica que cada imagen se sibuja encima de la siguiente
    ctx.globalCompositeOperation = "destination-over";
    //Limpia el canvas completo
    ctx.clearRect(0, 0, 300, 300); // clear canvas

    ctx.fillStyle = "rgba(0, 0, 0, 0.4)";
    ctx.strokeStyle = "rgba(0, 153, 255, 0.4)";
    //Guarda el estado del dibujo
    ctx.save();
    ctx.translate(150, 150);

    // Earth
    let time = new Date();
    ctx.rotate(
        ((2 * Math.PI) / 60) * time.getSeconds() +
        ((2 * Math.PI) / 60000) * time.getMilliseconds(),
    );
    ctx.translate(105, 0);
    ctx.fillRect(0, -12, 40, 24); // Shadow
    ctx.drawImage(earth, -12, -12);

    // Moon
    ctx.save();
    ctx.rotate(
        ((2 * Math.PI) / 6) * time.getSeconds() +
        ((2 * Math.PI) / 6000) * time.getMilliseconds(),
    );
    ctx.translate(0, 28.5);
    ctx.drawImage(moon, -3.5, -3.5);
    ctx.restore();

    ctx.restore();

    ctx.beginPath();
    ctx.arc(150, 150, 105, 0, Math.PI * 2, false); // Earth orbit
    ctx.stroke();

    ctx.drawImage(sun, 0, 0, 300, 300);

    window.requestAnimationFrame(draw);
}

init();
