export class Field {
    constructor(canvas) {
        this.canvas = canvas;
        this.context = canvas.getContext("2d");
    }
    DrawField() {
        this.context.beginPath();
        this.context.moveTo(300, 250);
        this.context.lineTo(1500, 250);
        this.context.moveTo(600, 50);
        this.context.lineTo(600, 900);
        this.context.moveTo(1200, 50);
        this.context.lineTo(1200, 900);
        this.context.moveTo(300, 700);
        this.context.lineTo(1500, 700);
        this.context.stroke();
        console.log("Field Drawn");
    }
}
export class Cross {
    constructor(canvas) {
        this.canvas = canvas;
        this.context = canvas.getContext("2d");
    }
    DrawCross(BottomLeftCorner, Diameter) {
        let xCoordinate = BottomLeftCorner[0];
        let yCoordinate = BottomLeftCorner[1];
        this.context.beginPath();
        this.context.moveTo(xCoordinate, yCoordinate);
        this.context.lineTo(xCoordinate + Diameter, yCoordinate + Diameter);
        this.context.moveTo(xCoordinate + Diameter, yCoordinate);
        this.context.lineTo(xCoordinate, yCoordinate + Diameter);
        this.context.stroke();
        console.log("Cross Drawn");
    }
}
export class Circle {
    constructor(canvas) {
        this.canvas = canvas;
        this.context = canvas.getContext("2d");
    }
    DrawCircle(MiddlePoint, Radius, Degrees = 360) {
        let xCoordinate = MiddlePoint[0];
        let yCoordinate = MiddlePoint[1];
        this.context.beginPath();
        this.context.arc(xCoordinate, yCoordinate, Radius, Degrees * (Math.PI / 180), Degrees * (Math.PI / 180));
        this.context.stroke();
        console.log("Circle Drawn");
    }
}
