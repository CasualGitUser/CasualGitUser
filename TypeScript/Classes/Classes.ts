import * as Brush from "../API/Brush.js"
import { Shape } from './Abstract.js';

let canvas: HTMLCanvasElement = document.getElementById("Canvas") as HTMLCanvasElement;
let context = canvas.getContext("2d")!;

export class Field {
    constructor() {
    }

    public DrawField(): void {
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

    public DrawCross(BottomLeftCorner: [number, number], Diameter: number): void {
        let xCoordinate: number = BottomLeftCorner[0];
        let yCoordinate: number = BottomLeftCorner[1];
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
    
    public DrawCircle(MiddlePoint: [number, number], Radius: number, Degrees: number): void {
        let xCoordinate: number = MiddlePoint[0];
        let yCoordinate: number = MiddlePoint[1];
        context.strokeStyle = "blue";
        context.beginPath();
        context.arc(xCoordinate, yCoordinate, Radius, 0, 200)
        context.stroke();
        Brush.ResetBrush(context);
        console.log("Circle Drawn");
    }
}

export class Rectangle extends Shape {

    private xCoordinate: number;
    private yCoordinate: number;
    private width: number;
    private height: number;
    private strokeStyle: string;
    private fillStyle: string;
    private filled: boolean;

    /*private clickEvent: CustomEvent = new CustomEvent("click", {
        detail: {
            object: this
        }
    })*/

    constructor(name: string = "rectangle", xCoordinate: number, yCoordinate: number, width: number, height: number, stroked: boolean = false, filled: boolean = false, strokeStyle: string = "black", fillStyle: string = "black") {
        super(name);
        this.xCoordinate = xCoordinate;
        this.yCoordinate = yCoordinate;
        this.width = width;
        this.height = height;
        this.strokeStyle = strokeStyle;
        this.fillStyle = fillStyle;
        this.filled = filled;
        canvas.addEventListener("click", (eventArgs: MouseEvent) => this.checkIfClicked(eventArgs));
    }

    public draw(): void {
        context.strokeStyle = this.strokeStyle;
        context.fillStyle = this.fillStyle;
        context.beginPath();
        context.moveTo(this.xCoordinate, this.yCoordinate);
        context.lineTo(this.xCoordinate + this.width, this.yCoordinate);
        context.lineTo(this.xCoordinate + this.width, this.yCoordinate + this.height);
        context.lineTo(this.xCoordinate, this.yCoordinate + this.height);
        context.closePath();
        if (this.filled === true) {context.fill();}
        context.stroke();
        console.log("Rectangle Drawn");
    }

    private checkIfClicked = (eventArgs: MouseEvent): boolean => {
        if ((eventArgs.clientX > this.xCoordinate && eventArgs.clientX < this.xCoordinate + this.width) &&
            (eventArgs.clientY > this.yCoordinate && eventArgs.clientY < this.yCoordinate + this.height)){
                this.Clicked();
                return true}
        else {return false}
    }
}