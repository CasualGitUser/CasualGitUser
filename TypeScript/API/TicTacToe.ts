import { Field, Cross, Circle } from '../Classes/Classes.js';
import * as Brush from "../API/Brush.js"

let canvas: HTMLCanvasElement = document.getElementById("Canvas") as HTMLCanvasElement;
let context: CanvasRenderingContext2D = canvas.getContext("2d")!;

export function ClearField(): void {
    let NewField: Field = new Field;
    context.clearRect(0, 0, canvas.width, canvas.height)
}