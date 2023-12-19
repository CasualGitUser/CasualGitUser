import { gameStats } from '../Logic/gameStats.js';
let canvas = document.getElementById("Canvas");
let context = canvas.getContext("2d");
// EventTarget adds the various eventListener methods
export class Instance extends EventTarget {
    constructor(name) {
        super();
        this.name = name;
    }
}
export class Shape extends EventTarget {
    constructor(name = "shape") {
        super();
        this.ClickedEvent = new CustomEvent("Clicked", { detail: { object: this } });
        this.name = name;
        gameStats.clickableObjects.push(this);
    }
    Clicked() {
        this.dispatchEvent(this.ClickedEvent);
    }
    draw() { } //for polymorphism
}
//overthink life, why didn't i use customevent
// why didn't i read this comment before finishing this?
//  why didn't i just inherit from eventTarget?
//   am i dumb?
/*export class Object {

    //eventType is in brackets because of index signatures
    private eventListeners: {[eventType: string]: Function[]} = {}

    constructor() {
    }

    public addEventListener(eventType: string, listenerFunction: Function) {
        if (!(eventType in this.eventListeners)) {
            this.eventListeners[eventType] = [];
            this.eventListeners[eventType].push(listenerFunction);
        }

        else {
            this.eventListeners[eventType].push(listenerFunction);
        }
    }

    public removeEventListener(eventType: string, deleteFunction: Function) {
        if (deleteFunction as any in this.eventListeners[eventType]) {
            let index = this.eventListeners[eventType].indexOf(deleteFunction);
            this.eventListeners[eventType].splice(index, 1);
        }
        else {
            console.log(deleteFunction + "is not in the array");
        }
    }

    public dispatchEvent(eventType: string) {
        if (eventType in this.eventListeners.eventTypes) {
            this.eventListeners.listenerFunctions.forEach(function(currentFunction: Function, index: number, array: Function[]) {
            })
        }
    }
}*/ 
