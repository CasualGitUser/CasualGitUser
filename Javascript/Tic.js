import { Field, Cross, Circle, Rectangle } from "./Classes/Classes.js";
/* Grid size:
x: 1800
y: 950 */
let canvas = document.getElementById("Canvas");
let context = canvas.getContext("2d");
if (context) {
    context.lineWidth = 10;
    let NewField = new Field();
    NewField.DrawField();
    let TestCross = new Cross();
    let TestCircle = new Circle();
    TestCross.DrawCross([500, 200], 400);
    TestCircle.DrawCircle([800, 500], 100, 20);
    const Rect = new Rectangle(200, 200, 400, 400);
}
else {
    console.log("No context available");
}
