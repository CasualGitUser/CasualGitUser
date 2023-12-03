/* Grid size:
x: 1800
y: 950 */
var canvas = document.getElementById("Canvas");
var context = canvas.getContext("2d");
var map = /** @class */ (function () {
    function map() {
        context.beginPath();
        context.moveTo(200, 150);
        context.lineTo(1600, 150);
        context.stroke();
    }
    return map;
}());
var cross = /** @class */ (function () {
    function cross() {
        context.lineTo;
    }
    return cross;
}());
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
