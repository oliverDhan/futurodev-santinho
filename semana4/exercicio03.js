//Classe com metodo estatico
class Carro {
  constructor(car, style) {
    this.car = car;
    this.style = style;
  }

  static speak() {
    console.log("Carro envenenado!");
  }
}

const carro = new Carro("TOYOTA SUPRA MK4", "JDM CAR");

console.log(carro);

Carro.speak;
