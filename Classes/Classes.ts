let canvas: HTMLCanvasElement = document.getElementById("Canvas") as HTMLCanvasElement;
let context = canvas.getContext("2d")!;

export class Field {
    constructor() {

    }
    public DrawField() {
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

export class Cross {
    constructor() {

    }
    public DrawCross(BottomLeftCorner: [number, number], Diameter: number) {
        let xCoordinate: number = BottomLeftCorner[0];
        let yCoordinate: number = BottomLeftCorner[1];
        context.beginPath();
        context.moveTo(xCoordinate, yCoordinate);
        context.lineTo(xCoordinate + Diameter, yCoordinate + Diameter);
        context.moveTo(xCoordinate + Diameter, yCoordinate);
        context.lineTo(xCoordinate, yCoordinate + Diameter);
        context.stroke();
        console.log("Cross Drawn");
    }
}

export class Circle {
    constructor() {

    }
    public DrawCircle(MiddlePoint: [number, number], Radius: number, Degrees: number = 360) {
        let xCoordinate: number = MiddlePoint[0];
        let yCoordinate: number = MiddlePoint[1];
        context.beginPath();
        context.arc(xCoordinate, yCoordinate, Radius, Degrees * (Math.PI/180), Degrees * (Math.PI/180))
        context.stroke();
        console.log("Circle Drawn");
    }
}