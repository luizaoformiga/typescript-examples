class Car {
    private color: string;
    private age: number;
    private value: number;

    constructor(color: string, age: number, value: number) {
        this.color = color;
        this.age = age;
        this.value = value; 
    }

    public get getValue() {
        return this.value;
    }  

    public getLog() {
        console.log("follow the log of this information");
        this.getInfo();
    }
 
    public getInfo() {
        console.log(`${this.color}\n ${this.age}\n ${this.getValue}`);
    }
}

const car = new Car("Black", 2020, 5000);
car.getInfo();