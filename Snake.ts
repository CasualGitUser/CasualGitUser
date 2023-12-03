/* Grid size: 
x: 1800 
y: 950 */

let canvas: HTMLCanvasElement = document.getElementById("Canvas") as HTMLCanvasElement;
let context = canvas.getContext("2d")!;

class map {
    constructor() {
        context.beginPath();
        context.moveTo(200, 150);
        context.lineTo(1600, 150);
        context.stroke();
    }
}

class cross {
    constructor() {
        context.lineTo
    }
}

context.beginPath();
context.moveTo(300, 250);
context.lineTo(1500, 250);
context.moveTo(600, 50);
context.lineTo(600, 900);
context.moveTo(1200, 50);
context.lineTo(1200, 900);
context.moveTo(300, 700);
context.lineTo(1500, 700);
context.stroke();