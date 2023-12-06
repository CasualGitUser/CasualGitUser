import { Field } from '../Classes/Classes.js';
let canvas = document.getElementById("Canvas");
let context = canvas.getContext("2d");
export function ClearField() {
    let NewField = new Field;
    context.clearRect(0, 0, canvas.width, canvas.height);
}
