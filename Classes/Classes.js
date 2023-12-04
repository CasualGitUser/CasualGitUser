"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.Circle = exports.Cross = exports.Field = void 0;
let canvas = document.getElementById("Canvas");
let context = canvas.getContext("2d");
class Field {
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
    }
}
exports.Field = Field;
class Cross {
    constructor() {
    }
    DrawCross(BottomLeftCorner, Diameter) {
        let xCoordinate = BottomLeftCorner[0];
        let yCoordinate = BottomLeftCorner[1];
        context.beginPath();
        context.moveTo(xCoordinate, yCoordinate);
        context.lineTo(xCoordinate + Diameter, yCoordinate + Diameter);
        context.moveTo(xCoordinate + Diameter, yCoordinate);
        context.lineTo(xCoordinate, yCoordinate + Diameter);
        context.stroke();
        console.log("Cross Drawn");
    }
}
exports.Cross = Cross;
class Circle {
    constructor() {
    }
    DrawCircle(MiddlePoint, Radius, Degrees = 360) {
        let xCoordinate = MiddlePoint[0];
        let yCoordinate = MiddlePoint[1];
        context.beginPath();
        context.arc(xCoordinate, yCoordinate, Radius, Degrees * (Math.PI / 180), Degrees * (Math.PI / 180));
        context.stroke();
        console.log("Circle Drawn");
    }
}
exports.Circle = Circle;
