import { Cross, Circle, } from "./Classes/Classes.js";
/* Grid size:
x: 1800
y: 950 */
let canvas = document.getElementById("Canvas");
let context = canvas.getContext("2d");
if (context) {
    context.lineWidth = 10;
    //let NewField: Field = new Field();
    //NewField.DrawField();
    let TestCross = new Cross();
    let TestCircle = new Circle();
    TestCross.DrawCross([300, 200], 200);
    TestCircle.DrawCircle([800, 500], 100, 20);
}
else {
    console.log("No context available");
}
