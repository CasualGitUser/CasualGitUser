let canvas = document.getElementById("Canvas") as HTMLCanvasElement ;
let context = canvas.getContext("2d")!;

//overthink life, why didn't i use customevent
// why didn't i read this comment before finishing this?

export class Object {

    private eventTypes: string[] = [];
    
    constructor() {
    }

    public addEventListener(eventType: string, listenerFunction: Function) {
        if (!(eventType in this.eventTypes)) {
            let event = new CustomEvent(eventType, {
                detail: {
                    object: this
                }
            })
        }
        else if (eventType in this.eventTypes) {
        }
    }
}

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