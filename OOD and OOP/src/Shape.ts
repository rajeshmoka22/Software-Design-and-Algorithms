import { Point } from "./Point";

export abstract class Shape {
    abstract getType(): string;
    protected filled: boolean;
    protected color: string;
    points: Point[];

    constructor(points: Point[])
    constructor(points: Point[], color:string, filled:boolean);
    constructor(points: Point[], color?:string, filled?:boolean){
        this.color = color || 'green';
        this.filled = filled !== undefined ? filled : true;
        if(points.length >2) this.points = points;
        else throw new Error('shape should atleast have 3 points');
    }

    toString(): string {
        let pointsStringArr: Array<String> = [];
        this.points.forEach(point => {
            pointsStringArr.push(` (${point.x}, ${point.y})`);
        });
        return `A Shape with color of ${this.color} and ${this.filled? 'filled' : 'not filled'}. Points:${pointsStringArr.join(',')}.`
    }

    getPerimeter(): number {
        let perimeter = 0;
        const pointsLen = this.points.length;
        if(pointsLen >=3) {
            for(let i=0; i<pointsLen-1; i++) {
                perimeter += this.points[i].distance(this.points[i+1]);
            }
            perimeter += this.points[0].distance(this.points[pointsLen-1]);
        }
        return perimeter;
    }
}
