/* Grid size: 
x: 1800 
y: 950 */

let canvas: HTMLCanvasElement = document.getElementById("Canvas") as HTMLCanvasElement;
let context = canvas.getContext("2d")!;

import { Field, Cross, Circle } from "./Classes/Classes";

if (context) {

    context.lineWidth = 10

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
    
    TestCross.DrawCross([200, 200], 150);
    TestCircle.DrawCircle([800, 500], 200, 360);

}

else {
    console.log("No context available");
}