import * as Brush from "../API/Brush.js"
import { numberIsEven, showWinScreen } from "../API/TicTacToe.js";
import { Shape } from './Abstract.js';

let canvas: HTMLCanvasElement = document.getElementById("Canvas") as HTMLCanvasElement;
let context = canvas.getContext("2d")!;
let canvasCoordinates = canvas.getBoundingClientRect();

export class Field {

    private fieldSize: number;

    public board: Rectangle[][];

    public fields: {[key: string]: Rectangle} = {}

    private fieldKeys = Object.keys(this.fields);
    private fieldKeysLength = this.fieldKeys.length;

    private leftX: number = 25;
    private middleX: number;
    private rightX: number;
    
    private topY: number = 25;
    private middleY: number;
    private bottomY: number;

    constructor(fieldSize: number) {
        this.fieldSize = fieldSize;
        this.middleX = this.leftX + this.fieldSize;
        this.rightX = this.middleX + this.fieldSize;
        this.middleY = this.topY + this.fieldSize;
        this.bottomY = this.middleY + this.fieldSize;
        this.fields["topLeft"] = new Rectangle("topLeft", this.leftX, this.topY, this.fieldSize, this.fieldSize, ["Right", "Bottom"], true);
        this.fields["topMiddle"] = new Rectangle("topMiddle", this.middleX, this.topY, this.fieldSize, this.fieldSize, ["Right", "Bottom", "Left"], true);
        this.fields["topRight"] = new Rectangle("topRight", this.rightX, this.topY, this.fieldSize, this.fieldSize, ["Bottom", "Left"], true);
        this.fields["middleLeft"] = new Rectangle("middleLeft", this.leftX, this.middleY, this.fieldSize, this.fieldSize, ["Top", "Right", "Bottom"], true);
        this.fields["middleMiddle"] = new Rectangle("middleMiddle", this.middleX, this.middleY, this.fieldSize, this.fieldSize, ["Top", "Right", "Bottom", "Left"], true);
        this.fields["middleRight"] = new Rectangle("middleRight", this.rightX, this.middleY, this.fieldSize, this.fieldSize, ["Top", "Bottom", "Left"], true);
        this.fields["bottomLeft"] = new Rectangle("bottomLeft", this.leftX, this.bottomY, this.fieldSize, this.fieldSize, ["Top", "Right"], true);
        this.fields["bottomMiddle"] = new Rectangle("bottomMiddle", this.middleX, this.bottomY, this.fieldSize, this.fieldSize, ["Top", "Right", "Left"], true);
        this.fields["bottomRight"] = new Rectangle("bottomRight", this.rightX, this.bottomY, this.fieldSize, this.fieldSize, ["Top", "Left"], true);
        this.board = [
            [this.fields["topLeft"], this.fields["topMiddle"], this.fields["topRight"]],
            [this.fields["middleLeft"], this.fields["middleMiddle"], this.fields["middleRight"]],
            [this.fields["bottomLeft"], this.fields["bottomMiddle"], this.fields["bottomRight"]]
        ]
    }

    public DrawField(): void {
        for (const row of this.board) {
            for (const field of row) {
                field.draw();
            }
        }
    }

    private start: DOMHighResTimeStamp = 0;

    public drawWinLine(startPointX: number, startPointY: number, endPointX: number, endPointY: number, winner: string): void {
        let distance: number = Math.sqrt((startPointX - endPointX)**2 + (startPointY - endPointY)**2)

        requestAnimationFrame((timeStamp: DOMHighResTimeStamp) => this.render(timeStamp, startPointX, startPointY, endPointX, endPointY, distance, winner))
    }

    private render(timeStamp: DOMHighResTimeStamp, startPointX: number, startPointY: number, endPointX: number, endPointY: number, distance: number, winner: string) {
        if (this.start === 0) {
            this.start = timeStamp;
        }

        let elapsedTime: DOMHighResTimeStamp = timeStamp - this.start;
        let lineCompletion: number = elapsedTime/2500

        let nextXCoordinate = startPointX + lineCompletion * (endPointX - startPointX);
        let nextYCoordinate = startPointY + lineCompletion * (endPointY - startPointY);

        context.strokeStyle = "yellow";
        context.beginPath();
        context.lineWidth = 20;
        context.moveTo(startPointX, startPointY);
        context.lineTo(nextXCoordinate, nextYCoordinate);
        context.stroke();
        Brush.ResetBrush(context);

        if (elapsedTime < 2500) {
            requestAnimationFrame((timeStamp2: DOMHighResTimeStamp) => this.render(timeStamp2, startPointX, startPointY, endPointX, endPointY, distance, winner));
        }
        else {
            showWinScreen(winner);
        }
    }
}

export class Cross {

    xCoordinate: number;
    yCoordinate: number;

    constructor(upperLeftCornerX: number, upperLeftCornerY: number) {
        this.xCoordinate = upperLeftCornerX;
        this.yCoordinate = upperLeftCornerY;
    }

    public DrawCross(Diameter: number): void {
        context.beginPath();
        context.strokeStyle = "red";
        context.moveTo(this.xCoordinate, this.yCoordinate);
        context.lineTo(this.xCoordinate + Diameter, this.yCoordinate + Diameter);
        context.moveTo(this.xCoordinate + Diameter, this.yCoordinate);
        context.lineTo(this.xCoordinate, this.yCoordinate + Diameter);
        context.stroke();
        Brush.ResetBrush(context);
    }
}

export class Circle {

    public xCoordinate: number;
    public yCoordinate: number;

    constructor(xCoordinate: number, yCoordinate: number) {
        this.xCoordinate = xCoordinate;
        this.yCoordinate = yCoordinate;
    }
    
    public DrawCircle(Radius: number): void {
        context.strokeStyle = "blue";
        context.beginPath();
        context.arc(this.xCoordinate, this.yCoordinate, Radius, 0, 200)
        context.stroke();
        Brush.ResetBrush(context);
    }
}

export class Rectangle extends Shape {

    public xCoordinate: number;
    public yCoordinate: number;
    public width: number;
    public height: number; 
    public Center: [X: number, Y: number];
    public topLeftCorner: [X: number, Y: number];
    public bottomLeftCorner: [X: number, Y: number];
    public topRightCorner: [X: number, Y: number];
    public bottomRightCorner: [X: number, Y: number];
    private strokeStyle: string;

    private drawnSides: string[] = [];

    private occupiedBySymbol: string | null = null;

    private occupied: boolean = false;

    constructor(name: string, xCoordinate: number, yCoordinate: number, width: number, height: number, drawnSides: string[] = ["Top", "Right", "Bottom", "Left"], stroked: boolean = false, strokeStyle: string = "black") {
        super(name);
        this.xCoordinate = xCoordinate;
        this.yCoordinate = yCoordinate;
        this.width = width;
        this.height = height;
        this.strokeStyle = strokeStyle;
        this.drawnSides = drawnSides;
        this.topLeftCorner = [this.xCoordinate, this.yCoordinate];
        this.bottomLeftCorner = [this.xCoordinate, this.yCoordinate + this.height];
        this.topRightCorner = [this.xCoordinate + this.width, this.yCoordinate];
        this.bottomRightCorner = [this.xCoordinate + this.width, this.yCoordinate + this.height];
        this.Center = [this.xCoordinate + this.width/2, this.yCoordinate + this.height/2];
        canvas.addEventListener("click", (eventArgs: MouseEvent) => this.checkIfClicked(eventArgs));
    }

    public selectRectangle(symbol: Cross | Circle) {
        if (this.occupied === false) {
            if (symbol instanceof Cross) {
                symbol.DrawCross(this.height);
                this.occupiedBySymbol = "Cross";
            }
            else if (symbol instanceof Circle) {
                symbol.DrawCircle(this.height/2);
                this.occupiedBySymbol = "Circle";
            }
            this.occupied = true;
        }
    }

    public get occupiedBy() {
        if (typeof this.occupiedBySymbol === "string") {return this.occupiedBySymbol}
        //else {alert("this rectangle is not occupied");}
    }

    public get occupiedStatus() {
        return this.occupied;
    }

    public draw(): void {
        context.strokeStyle = this.strokeStyle;
        context.beginPath();
        context.moveTo(this.xCoordinate, this.yCoordinate);
        if (this.drawnSides.includes("Top")) {context.lineTo(this.xCoordinate + this.width, this.yCoordinate);}
        else {context.moveTo(this.xCoordinate + this.width, this.yCoordinate);}
        if (this.drawnSides.includes("Right")) {context.lineTo(this.xCoordinate + this.width, this.yCoordinate + this.height);}
        else {context.moveTo(this.xCoordinate + this.width, this.yCoordinate + this.height);}
        if (this.drawnSides.includes("Bottom")) {context.lineTo(this.xCoordinate, this.yCoordinate + this.height);}
        else {context.moveTo(this.xCoordinate, this.yCoordinate + this.height);}
        if (this.drawnSides.includes("Left")) {context.lineTo(this.xCoordinate, this.yCoordinate);}
        context.stroke();
    }

    private checkIfClicked = (eventArgs: MouseEvent): boolean => {
        if ((eventArgs.clientX - canvasCoordinates.left > this.xCoordinate && eventArgs.clientX - canvasCoordinates.left < this.xCoordinate + this.width) &&
            (eventArgs.clientY - canvasCoordinates.top > this.yCoordinate && eventArgs.clientY - canvasCoordinates.top < this.yCoordinate + this.height)){
                this.Clicked();

                return true;
            }
        else {
            return false;
            }
    }
}