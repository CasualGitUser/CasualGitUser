import { gameStats } from '../Logic/gameStats.js';
const canvas = document.getElementById("Canvas");
const context = canvas.getContext("2d");
export function showWinScreen(winner) {
    context.clearRect(0, 0, canvas.width, canvas.height);
    context.font = "50px Arial";
    context.fillStyle = "black";
    context.fillText(winner + " wins", canvas.width / 2 - 120, canvas.height / 2 - 50);
}
export function getObjectFromName(name) {
    return gameStats.clickableObjects[name];
}
export function numberIsEven(number) {
    return number % 2 === 0;
}
export function checkForWin(field, board) {
    // from top to bottom
    const firstRow = board[0];
    const secondRow = board[1];
    const thirdRow = board[2];
    //i is supposed to be the key of each row
    keyLoop: for (let i = 0; i < 3; i++) {
        for (const row of board) {
            // check for the rows
            if (row[0].occupiedBy === "Cross" && row[1].occupiedBy === "Cross" && row[2].occupiedBy === "Cross") {
                field.drawWinLine(row[0].bottomLeftCorner[0], row[0].Center[1], row[2].bottomRightCorner[0], row[2].Center[1], "Cross");
                break keyLoop;
            }
            else if (row[0].occupiedBy === "Circle" && row[1].occupiedBy === "Circle" && row[2].occupiedBy === "Circle") {
                field.drawWinLine(row[0].bottomLeftCorner[0], row[0].Center[1], row[2].bottomRightCorner[0], row[2].Center[1], "Circle");
                break keyLoop;
            }
        }
        // check for the columns
        if (firstRow[i].occupiedBy === "Cross" && secondRow[i].occupiedBy === "Cross" && thirdRow[i].occupiedBy === "Cross") {
            field.drawWinLine(firstRow[i].Center[0], firstRow[i].topLeftCorner[1], thirdRow[i].Center[0], thirdRow[i].bottomLeftCorner[1], "Cross");
            break keyLoop;
        }
        else if (firstRow[i].occupiedBy === "Circle" && secondRow[i].occupiedBy === "Circle" && thirdRow[i].occupiedBy === "Circle") {
            field.drawWinLine(firstRow[i].Center[0], firstRow[i].topLeftCorner[1], thirdRow[i].Center[0], thirdRow[i].bottomLeftCorner[1], "Circle");
            break keyLoop;
        }
    }
    //check for the diagonals
    if (firstRow[0].occupiedBy === "Cross" && secondRow[1].occupiedBy === "Cross" && thirdRow[2].occupiedBy === "Cross") {
        field.drawWinLine(firstRow[0].topLeftCorner[0], firstRow[0].topLeftCorner[1], thirdRow[2].bottomRightCorner[0], thirdRow[2].bottomRightCorner[1], "Cross");
    }
    else if (firstRow[0].occupiedBy === "Circle" && secondRow[1].occupiedBy === "Circle" && thirdRow[2].occupiedBy === "Circle") {
        field.drawWinLine(firstRow[0].topLeftCorner[0], firstRow[0].topLeftCorner[1], thirdRow[2].bottomRightCorner[0], thirdRow[2].bottomRightCorner[1], "Circle");
    }
    else if (firstRow[2].occupiedBy === "Cross" && secondRow[1].occupiedBy === "Cross" && thirdRow[0].occupiedBy === "Cross") {
        field.drawWinLine(thirdRow[0].bottomLeftCorner[0], thirdRow[0].bottomLeftCorner[1], firstRow[2].topRightCorner[0], firstRow[2].topRightCorner[1], "Cross");
    }
    else if (firstRow[2].occupiedBy === "Circle" && secondRow[1].occupiedBy === "Circle" && thirdRow[0].occupiedBy === "Circle") {
        field.drawWinLine(thirdRow[0].bottomLeftCorner[0], thirdRow[0].bottomLeftCorner[1], firstRow[2].topRightCorner[0], firstRow[2].topRightCorner[1], "Circle");
    }
}
/*let board2: string[][] = [
    ["p", "p", "p"],
    ["p", "p", "p"],
    ["p", "p", "p"]
]*/ 
