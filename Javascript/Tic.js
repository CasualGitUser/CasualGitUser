import { Field, Cross, Circle } from "./Classes/Classes.js";
import * as TTT from "./API/TicTacToe.js";
/* Grid size:
x: 1800
y: 950 */
const canvas = document.getElementById("Canvas");
const context = canvas.getContext("2d");
if (context) {
    context.lineWidth = 10;
    var currentTurn = 1;
    let NewField = new Field(300);
    let board = NewField.board;
    NewField.DrawField();
    for (const row of board) {
        for (const key of row) {
            key.addEventListener("click", (e) => {
                if (key.occupiedStatus === false) {
                    currentTurn++;
                }
                if (TTT.numberIsEven(currentTurn)) {
                    key.selectRectangle(new Cross(key.xCoordinate, key.yCoordinate));
                }
                else {
                    key.selectRectangle(new Circle(key.xCoordinate + key.width - key.width / 2, key.yCoordinate + key.height - key.height / 2));
                }
                TTT.checkForWin(NewField, board);
            });
        }
    }
}
else {
    console.log("No context available");
}
