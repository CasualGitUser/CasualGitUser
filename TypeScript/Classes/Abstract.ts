import { gameStats } from '../Logic/gameStats.js';

let canvas = document.getElementById("Canvas") as HTMLCanvasElement ;
let context = canvas.getContext("2d")!;

// EventTarget adds the various eventListener methods

export class Instance extends EventTarget {

    public name: string;

    constructor(name: string) {
        super();
        this.name = name;
    }
}

export class Shape extends EventTarget {

    public name: string;

    protected ClickedEvent: CustomEvent;

    //protected ClickedEvent = new CustomEvent("click", {detail: {object: this.getObjectFromName(this.name)} })

    protected get getObjectName() {
        return this.name
    }
    
    constructor(name: string) {
        super();
        this.name = name;
        this.ClickedEvent = new CustomEvent("click", {detail: {object: this.name}})
        gameStats.clickableObjects[this.name] = this;
    }

    public Clicked() {
        this.dispatchEvent(this.ClickedEvent);
    }

    public draw() {} //for polymorphism
}





//overthink life, why didn't i use customevent
// why didn't i read this comment before finishing this?
//  why didn't i just inherit from eventTarget?
//   am i dumb?
//    trial and error moment

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