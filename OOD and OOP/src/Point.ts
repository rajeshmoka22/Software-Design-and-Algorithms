export class Point {
    x: number;
    y: number;

    constructor()
    constructor(x: number, y: number)
    constructor(x?:number, y?:number){
        this.x = x || 0;
        this.y = y || 0;
    }
    
    toString(): string {
        return `(${this.x}, ${this.y})`;
    }

    distance():number;
    distance(instance: Point):number;
    distance(x: number, y:number):number;
    distance(xOrInstance?: number | Point, y?:number):number {
        if(arguments.length === 0) {
            return this.getDistance();
        } else if(typeof xOrInstance === 'number'){
            return this.getDistance(xOrInstance,y);
        } else {
            return this.getDistance(xOrInstance.x, xOrInstance.y)
        }
    }

    getDistance(x: number = 0, y: number = 0) : number {
        const xDist = this.x - x;
        const yDist = this.y - y;
        return Math.sqrt(xDist*xDist + yDist*yDist);
    }
}
