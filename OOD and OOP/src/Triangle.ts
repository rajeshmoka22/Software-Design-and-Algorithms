import { Shape } from './Shape';
import { Point } from './Point';

export class Triangle extends Shape {

    constructor(point1: Point, point2: Point, point3: Point)
    constructor(point1: Point, point2: Point, point3: Point, color: string, filled: boolean)
    constructor(point1: Point, point2: Point, point3: Point, color?: string, filled?: boolean) {
        if(color && filled) {
            super([point1, point2, point3], color, filled);
        } else super([point1, point2, point3]);
    }

    getType(): string {
        const side1 = this.points[0].distance(this.points[1]).toFixed(1);
        const side2 = this.points[1].distance(this.points[2]).toFixed(1);
        const side3 = this.points[2].distance(this.points[0]).toFixed(1);
        let triangleType: string;
        if(side1 === side2 && side2 === side3){
            triangleType = 'equilateral triangle';
        } else if(side1 === side2 || side2 === side3 || side3 === side1) {
            triangleType = 'isosceles triangle';
        } else triangleType = 'scalene triangle';
        return triangleType;
    }
    
    toString(): string {
        let pointsArr: Array<String> = [];
        this.points.forEach((point, index) => {
            pointsArr.push(`v${index+1}=(${point.x}, ${point.y})`);
        });
        return `Triangle[${pointsArr.toString()}]`;
    }
}

