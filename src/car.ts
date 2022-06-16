import { Vehicle } from './Vehicle.js';

class Car extends Vehicle{
    public readonly doors: number;

    constructor(doors: number, make: string){
        super(make);
        this.doors = doors;
        
    }

    public printMake(): void{
        console.log("Make of Car is: " + this.make);
    }
}

class Motorbike extends Vehicle{
    constructor(make: String){
        super(make);
    }
}

class Bus extends Vehicle{
    public readonly doors: number;
    
    constructor(doors: number, make: string){
        super(make);
        this.doors = doors;
    }
}

const myCar = new Car(4, "BMW");
console.log("Object of Car Class")
myCar.printMake();

const myMotorbike = new Motorbike("Honda");
console.log("Object of Motorbike Class")
myMotorbike.printMake();

const myBus = new Bus(4, "Volvo");
console.log("Object of Bus Class")
myBus.printMake();

//Inheritance



// myCar.doors = 5;
// myCar.engineSize = 2;