"use strict";
/* Grid size:
x: 1800
y: 950 */
Object.defineProperty(exports, "__esModule", { value: true });
let canvas = document.getElementById("Canvas");
let context = canvas.getContext("2d");
const Classes_1 = require("./Classes/Classes");
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
    let TestCross = new Classes_1.Cross();
    let TestCircle = new Classes_1.Circle();
    TestCross.DrawCross([200, 200], 150);
    TestCircle.DrawCircle([800, 500], 200, 360);
}
else {
    console.log("No context available");
}
