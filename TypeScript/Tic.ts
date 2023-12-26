import { Field, Cross, Circle, Rectangle } from "./Classes/Classes.js";
import * as Brush from "./API/Brush.js";
import * as TTT from "./API/TicTacToe.js";
import { gameStats } from "./Logic/gameStats.js";
import { Shape } from "./Classes/Abstract.js";
import { numberIsEven } from './API/TicTacToe';

/* Grid size: 
x: 1800 
y: 950 */

const canvas: HTMLCanvasElement = document.getElementById("Canvas") as HTMLCanvasElement;
const context = canvas.getContext("2d")!;

if (context) {

    context.lineWidth = 10

    var currentTurn = 1;

    let NewField: Field = new Field(300);
    let board = NewField.board;
    NewField.DrawField();

    for (const row of board) {
        for (const key of row) {
            key.addEventListener("click", (e) => {
                if (key.occupiedStatus === false) {currentTurn++}
                if (TTT.numberIsEven(currentTurn)) {
                    key.selectRectangle(new Cross(key.xCoordinate, key.yCoordinate));
                }
                else {
                    key.selectRectangle(new Circle(key.xCoordinate + key.width - key.width/2, key.yCoordinate + key.height - key.height/2));
                }
                TTT.checkForWin(NewField, board);
            })
        }
    }
}

else {
    console.log("No context available");
}