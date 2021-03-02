export default class Car {
    public model?: string;
    public age?: number;
    public value?: number;

    constructor(model: string, age: number, value: number) {
       this.model = model;
       this.age = age;
       this.value = value; 
    }

    // Model
    public getModel() {
       return this.model; 
    }

    public setModel(model: string) {
       return this.model = model; 
    }
    
    // Age
    public getAge() {
        return this.age;
    }

    public setAge(age: number) {
        return this.age = age;
    }

    // Value
    public getValue() {
        return this.value;
    }

    public setValue(value: number) {
        return this.value = value;
    }
}