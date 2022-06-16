export class Vehicle{
    public make: String;
    constructor(make: String){
        this.make = make;
    }

    public printMake(): void{
        console.log("Make of the Vehicle is: " + this.make);
    }
}