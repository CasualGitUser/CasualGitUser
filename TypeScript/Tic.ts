import { Field, Cross, Circle, Rectangle } from "./Classes/Classes.js";
import * as Brush from "./API/Brush.js";
import * as TTT from "./API/TicTacToe.js";

/* Grid size: 
x: 1800 
y: 950 */

let canvas: HTMLCanvasElement = document.getElementById("Canvas") as HTMLCanvasElement;
let context = canvas.getContext("2d")!;

if (context) {

    context.lineWidth = 10

    let NewField: Field = new Field();
    NewField.DrawField();
    
    let TestCross = new Cross();
    let TestCircle = new Circle();
    
    TestCross.DrawCross([500, 200], 400);
    TestCircle.DrawCircle([800, 500], 100, 20);

    const Rect = new Rectangle("recty", 200, 200, 400, 400, "green", false);
    Rect.draw();
    console.log(Rect.name)
}

else {
    console.log("No context available");
}