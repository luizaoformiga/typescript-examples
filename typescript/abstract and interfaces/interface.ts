interface Rats {
    name: string;
    age: number;
    walk(): void; 
}

class Jerry implements Rats {
    name: string;
    age: number;
    
    constructor(name: string, age: number) {
       this.name = name;
       this.age = age; 
    }

    walk() {
        console.log("Run! here comes Tom!");
    }
}

const rats = new Jerry("Jerry", 3);
console.log(rats.name);
console.log(rats.age);
rats.walk();