import { Cross, Circle } from "./Classes/Classes.js";
/* Grid size:
x: 1800
y: 950 */
let canvas = document.getElementById("Canvas");
let context = canvas.getContext("2d");
if (context) {
    context.lineWidth = 10;
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
    let TestCross = new Cross();
    let TestCircle = new Circle();
    /*TestCross.DrawCross([300, 200], 200);
    TestCircle.DrawCircle([800, 500], 100, 20);*/
    context.beginPath();
    context.stroke();
}
else {
    console.log("No context available");
}
