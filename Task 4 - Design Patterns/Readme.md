Used the generic decorator pattern which is provided in the material in place of typescript decorator.

EXample:

interface Coffee {
    getCost();
    getDescription();
}

class SimpleCoffee implements Coffee {
    public getCost() {
        return 10;
    }
    public getDescription() {
        return 'Simple coffee'
    }
}

class CoffeeDecorator implements Coffee {
    protected wrappee: Coffee;

    constructor(coffee: Coffee) {
        this.wrappee = coffee;
    }

    public getCost() {
        return this.wrappee.getCost();
    }
    public getDescription() {
        return this.wrappee.getDescription();
    }
}
class MilkCoffeeDecorator extends CoffeeDecorator {
    public getCost(): any {
        return this.wrappee.getCost() + 2;
    }
    public getDescription(): any {
        return this.wrappee.getDescription() + 'with milk';
    }
}

class WhipCoffeeDecorator extends CoffeeDecorator {
    public getCost(): any {
        return this.wrappee.getCost() + 3;
    }
    public getDescription(): any {
        return this.wrappee.getDescription() + 'and with whip';
    }
}

let someCoffee = new SimpleCoffee();
someCoffee.getCost(); // 10
someCoffee.getDescription(); // Simple Coffee
someCoffee = new MilkCoffeeDecorator(someCoffee);
someCoffee.getCost(); // 12
someCoffee = new WhipCoffeeDecorator(someCoffee);
someCoffee.getDescription(); // Simple Coffee with milk and whip