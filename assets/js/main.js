//Obtencion de los lienzos canvas
const canvasOOP = document.getElementById("canvasOOP");
const canvasRandom = document.getElementById("canvasRandom");
const canvasMultiple = document.getElementById("canvasMultiple");
const canvasMultipleNoOut = document.getElementById("canvasMultipleNoOut");

//Definicion de los contextos del canvas
const ctx = canvasOOP.getContext("2d");
const ctxRandom = canvasRandom.getContext("2d");
const ctxMultiple = canvasMultiple.getContext("2d");
const ctxMultipleNoOut = canvasMultipleNoOut.getContext("2d");

//Coloreado de los lienzos
canvasOOP.style.background = "#FAA9D4";
canvasRandom.style.background = "#E3DD23";
canvasMultiple.style.background = "#26B682";
canvasMultipleNoOut.style.background = "#757372";

//Creación de la clase circulo
class Circle {

    constructor(x, y, radius, color, text, bgColor) {
        //Carga los valores predeterminados del objeto
        this.posX = x;
        this.posY = y;
        this.radius = radius;
        this.color = color;
        this.text = text;
        this.bgColor = bgColor;
    }

    draw(context) {
        //Metodo para renderizar
        //Dibujo y relleno del circulo
        context.beginPath();
        context.arc(this.posX, this.posY, this.radius, 0, Math.PI * 2, false);
        context.fillStyle = this.bgColor;
        context.fill();

        //Cambio de grosor de la linea de contorno y de color
        context.lineWidth = 2;
        context.strokeStyle = this.color;
        context.stroke();

        //Cambio de color de texto, fuente, tamaño y alineación
        context.fillStyle = "black";
        context.textAlign = "center"; //Alineación Horizontal
        context.textBaseline = "middle"; //Alineación Vertical
        context.font = "20px Arial";
        context.fillText(this.text, this.posX, this.posY);

        context.closePath();
    }
}

//Creación de circulo 
let miCirculo = new Circle(canvasOOP.width / 2, canvasOOP.height / 2, 50, 'red', 'Tec', 'lightblue');
miCirculo.draw(ctx);

//Generacion de números random para crear un circulo aleatorio
//Generacion de coordenadas random donde pueden ser de entre 0 y 199
let randomX = Math.random() * canvasRandom.width;
let randomY = Math.random() * canvasRandom.height;
//Generacion de radio random donde el valor puede ser entre 30 y 129
let randomRadius = Math.floor(Math.random() * 100 + 30);

//Creación de circulo random
let miCirculoRandom = new Circle(randomX, randomY, randomRadius, '#791BFC', 'Tec', 'orange');
miCirculoRandom.draw(ctxRandom);

//Creacion de multiples circulos random
let arrayCircle = [];
for (let i = 0; i < 10; i++) {

    let randomX = Math.random() * canvasMultiple.height;

    let randomY = Math.random() * canvasMultiple.width;

    let randomRadius = Math.floor(Math.random() * 10 + 20);

    let miCirculoMultiple = new Circle(randomX, randomY, randomRadius, "#EC5B00", i + 1, 'yellow');

    arrayCircle.push(miCirculoMultiple);

    arrayCircle[i].draw(ctxMultiple);
}

//Creacion de multiples circulos random que no se salgan del canvas
let arrayCircle2 = [];
for (let i = 0; i < 10; i++) {

    let randomX = Math.random() * canvasMultipleNoOut.height;

    let randomY = Math.random() * canvasMultipleNoOut.width;

    let randomRadius = Math.floor(Math.random() * 10 + 20);

    //Si al restar el radio de la posicion inicial de X da menor a 0 significa que esta afuera del canvas
    if ((randomX - randomRadius) < 0) {
        //Calculamos cual es la diferencia y la sumamos 
        let remaining = Math.abs(randomX - randomRadius);
        randomX = randomX + remaining;
    }

    //Si al sumar el radio de la posicion inicial de X da mayor a 200 significa que esta afuera del canvas
    if ((randomX + randomRadius) > 200) {
        //Calculamos cual es la diferencia y la restamos 
        let remaining = Math.abs(randomX - randomRadius);
        randomX = randomX - remaining;
    }

    //Si al sumar el radio de la posicion inicial de Y da menor a 0 significa que esta afuera del canvas
    if ((randomY - randomRadius) < 0) {
        //Calculamos cual es la diferencia y la sumamos 
        let remaining = Math.abs(randomY - randomRadius);
        randomY = randomY + remaining;
    }

    //Si al sumar el radio de la posicion inicial de Y da mayor a 200 significa que esta afuera del canvas
    if ((randomY + randomRadius) > 200) {
        //Calculamos cual es la diferencia y la restamos
        let remaining = Math.abs(randomY - randomRadius);
        randomY = randomY - remaining;
    }

    let miCirculoMultipleNoOut = new Circle(randomX, randomY, randomRadius, "black", i + 1, 'white');

    arrayCircle2.push(miCirculoMultipleNoOut);

    arrayCircle2[i].draw(ctxMultipleNoOut);
}