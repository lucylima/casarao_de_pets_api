import { randomUUID } from "crypto";

class Pet {
  constructor(name, age, species){
    this.id = randomUUID();
    this.name = name;
    this.age = age;
    this.species = species;
  }
}

export { Pet }