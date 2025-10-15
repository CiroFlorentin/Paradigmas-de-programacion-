class Persona {
  constructor(name, age) {
    this.name = name;
    this.age = age;
  }
  saludo() {
    return `hola, soy ${this.name}`;
  }
  sosMayor() {
    return this.age >= 18;
  }
  birthday() {
    this.age++;
  }
}
