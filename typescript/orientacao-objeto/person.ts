export default class Pessoa {
  public name: String;
  public age: Number;

  constructor(name: String, age:Number) {
    this.name = name;
    this.age = age;
  }
}

const personOne = new Pessoa("Luiz", 34);

console.log(`User name: ${personOne.name} \n User age: ${personOne.age}`);