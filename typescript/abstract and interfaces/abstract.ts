abstract class Cat {
    public name: string;
    public color: string;

    constructor(name: string, color: string) {
        this.name = name;
        this.color = color;
    }

    meow() {
        console.log("Meow");
    }
}

class Tom extends Cat {
    public age: number;

    constructor(name: string, color: string, age: number) {
       super(name, color);
       this.age = age;
    }
}

const cat = new Tom("Tom", "Grey", 3);
console.log(cat.name);
console.log(cat.color);
console.log(cat.age);
cat.meow();