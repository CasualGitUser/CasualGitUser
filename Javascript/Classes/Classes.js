import * as Brush from "../API/Brush.js";
let canvas = document.getElementById("Canvas");
let context = canvas.getContext("2d");
export class Field {
    constructor() {
    }
    DrawField() {
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
        Brush.ResetBrush(context);
        console.log("Field Drawn");
    }
}
export class Cross {
    constructor() {
    }
    DrawCross(BottomLeftCorner, Diameter) {
        let xCoordinate = BottomLeftCorner[0];
        let yCoordinate = BottomLeftCorner[1];
        context.beginPath();
        context.strokeStyle = "red";
        context.moveTo(xCoordinate, yCoordinate);
        context.lineTo(xCoordinate + Diameter, yCoordinate + Diameter);
        context.moveTo(xCoordinate + Diameter, yCoordinate);
        context.lineTo(xCoordinate, yCoordinate + Diameter);
        context.stroke();
        Brush.ResetBrush(context);
        console.log("Cross Drawn");
    }
}
export class Circle {
    constructor() {
    }
    DrawCircle(MiddlePoint, Radius, Degrees) {
        let xCoordinate = MiddlePoint[0];
        let yCoordinate = MiddlePoint[1];
        context.strokeStyle = "blue";
        context.beginPath();
        context.arc(xCoordinate, yCoordinate, Radius, 0, 200);
        context.stroke();
        Brush.ResetBrush(context);
        console.log("Circle Drawn");
    }
}
