export class Field {
    private canvas: HTMLCanvasElement;
    private context: CanvasRenderingContext2D;
    constructor(canvas: HTMLCanvasElement) {
        this.canvas = canvas
        this.context = canvas.getContext("2d")!;
    }

    public DrawField() {
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
    canvas: HTMLCanvasElement;
    context: CanvasRenderingContext2D;
    constructor(canvas: HTMLCanvasElement) {
        this.canvas = canvas
        this.context = canvas.getContext("2d")!;
    }
    
    public DrawCross(BottomLeftCorner: [number, number], Diameter: number) {
        let xCoordinate: number = BottomLeftCorner[0];
        let yCoordinate: number = BottomLeftCorner[1];
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
    canvas: HTMLCanvasElement;
    context: CanvasRenderingContext2D;
    constructor(canvas: HTMLCanvasElement) {
        this.canvas = canvas
        this.context = canvas.getContext("2d")!;
    }

    public DrawCircle(MiddlePoint: [number, number], Radius: number, Degrees: number = 360) {
        let xCoordinate: number = MiddlePoint[0];
        let yCoordinate: number = MiddlePoint[1];
        this.context.beginPath();
        this.context.arc(xCoordinate, yCoordinate, Radius, Degrees * (Math.PI/180), Degrees * (Math.PI/180))
        this.context.stroke();
        console.log("Circle Drawn");
    }
}