import * as Brush from "../API/Brush.js";
import { showWinScreen } from "../API/TicTacToe.js";
import { Shape } from './Abstract.js';
let canvas = document.getElementById("Canvas");
let context = canvas.getContext("2d");
let canvasCoordinates = canvas.getBoundingClientRect();
export class Field {
    fieldSize;
    board;
    fields = {};
    fieldKeys = Object.keys(this.fields);
    fieldKeysLength = this.fieldKeys.length;
    leftX = 25;
    middleX;
    rightX;
    topY = 25;
    middleY;
    bottomY;
    constructor(fieldSize) {
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
        ];
    }
    DrawField() {
        for (const row of this.board) {
            for (const field of row) {
                field.draw();
            }
        }
    }
    start = 0;
    drawWinLine(startPointX, startPointY, endPointX, endPointY, winner) {
        let distance = Math.sqrt((startPointX - endPointX) ** 2 + (startPointY - endPointY) ** 2);
        requestAnimationFrame((timeStamp) => this.render(timeStamp, startPointX, startPointY, endPointX, endPointY, distance, winner));
    }
    render(timeStamp, startPointX, startPointY, endPointX, endPointY, distance, winner) {
        if (this.start === 0) {
            this.start = timeStamp;
        }
        let elapsedTime = timeStamp - this.start;
        let lineCompletion = elapsedTime / 2500;
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
            requestAnimationFrame((timeStamp2) => this.render(timeStamp2, startPointX, startPointY, endPointX, endPointY, distance, winner));
        }
        else {
            showWinScreen(winner);
        }
    }
}
export class Cross {
    xCoordinate;
    yCoordinate;
    constructor(upperLeftCornerX, upperLeftCornerY) {
        this.xCoordinate = upperLeftCornerX;
        this.yCoordinate = upperLeftCornerY;
    }
    DrawCross(Diameter) {
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
    xCoordinate;
    yCoordinate;
    constructor(xCoordinate, yCoordinate) {
        this.xCoordinate = xCoordinate;
        this.yCoordinate = yCoordinate;
    }
    DrawCircle(Radius) {
        context.strokeStyle = "blue";
        context.beginPath();
        context.arc(this.xCoordinate, this.yCoordinate, Radius, 0, 200);
        context.stroke();
        Brush.ResetBrush(context);
    }
}
export class Rectangle extends Shape {
    xCoordinate;
    yCoordinate;
    width;
    height;
    Center;
    topLeftCorner;
    bottomLeftCorner;
    topRightCorner;
    bottomRightCorner;
    strokeStyle;
    drawnSides = [];
    occupiedBySymbol = null;
    occupied = false;
    constructor(name, xCoordinate, yCoordinate, width, height, drawnSides = ["Top", "Right", "Bottom", "Left"], stroked = false, strokeStyle = "black") {
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
        this.Center = [this.xCoordinate + this.width / 2, this.yCoordinate + this.height / 2];
        canvas.addEventListener("click", (eventArgs) => this.checkIfClicked(eventArgs));
    }
    selectRectangle(symbol) {
        if (this.occupied === false) {
            if (symbol instanceof Cross) {
                symbol.DrawCross(this.height);
                this.occupiedBySymbol = "Cross";
            }
            else if (symbol instanceof Circle) {
                symbol.DrawCircle(this.height / 2);
                this.occupiedBySymbol = "Circle";
            }
            this.occupied = true;
        }
    }
    get occupiedBy() {
        if (typeof this.occupiedBySymbol === "string") {
            return this.occupiedBySymbol;
        }
        //else {alert("this rectangle is not occupied");}
    }
    get occupiedStatus() {
        return this.occupied;
    }
    draw() {
        context.strokeStyle = this.strokeStyle;
        context.beginPath();
        context.moveTo(this.xCoordinate, this.yCoordinate);
        if (this.drawnSides.includes("Top")) {
            context.lineTo(this.xCoordinate + this.width, this.yCoordinate);
        }
        else {
            context.moveTo(this.xCoordinate + this.width, this.yCoordinate);
        }
        if (this.drawnSides.includes("Right")) {
            context.lineTo(this.xCoordinate + this.width, this.yCoordinate + this.height);
        }
        else {
            context.moveTo(this.xCoordinate + this.width, this.yCoordinate + this.height);
        }
        if (this.drawnSides.includes("Bottom")) {
            context.lineTo(this.xCoordinate, this.yCoordinate + this.height);
        }
        else {
            context.moveTo(this.xCoordinate, this.yCoordinate + this.height);
        }
        if (this.drawnSides.includes("Left")) {
            context.lineTo(this.xCoordinate, this.yCoordinate);
        }
        context.stroke();
    }
    checkIfClicked = (eventArgs) => {
        if ((eventArgs.clientX - canvasCoordinates.left > this.xCoordinate && eventArgs.clientX - canvasCoordinates.left < this.xCoordinate + this.width) &&
            (eventArgs.clientY - canvasCoordinates.top > this.yCoordinate && eventArgs.clientY - canvasCoordinates.top < this.yCoordinate + this.height)) {
            this.Clicked();
            return true;
        }
        else {
            return false;
        }
    };
}
