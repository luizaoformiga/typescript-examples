export default class Animal {
    public type: string;
    public name: string;
    public age: number;

    constructor(type: string, name: string, age: number) {
        this.type = type;
        this.name = name;
        this.age = age;
    }

    public comunication(): void {
        console.log("Hello!, I am method the mother class!");
    }
}

class Dog extends Animal {
    public breed: string;
    
    constructor(type: string, name: string, age: number, breed: string) {
        super(type, name, age);
        this.breed = breed;
    }

    public comunication() {
        console.log("Hello!, I am a adaptation the mother class Animal!, Dog!");
    }
}

class Person extends Animal {
    public color: string;

    constructor(type: string, name: string, age: number, color: string) {
       super(type, name, age);
       this.color = color;
    }

    public comunication(): void {
        console.log("Hello!, I am method the mother class!, Person!");
    }
}

const dog = new Dog("Dog", "Bob", 2, "Poodle");
console.log(dog.type);
console.log(dog.name);
console.log(dog.age);
console.log(dog.breed);

const person = new Person("Human", "James", 34, "White");
console.log(person.type);
console.log(person.name);
console.log(person.age);
console.log(person.color);