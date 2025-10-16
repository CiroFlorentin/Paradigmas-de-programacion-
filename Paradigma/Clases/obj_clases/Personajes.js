class Floki {
  constructor(arma) {
    this.arma = arma;
  }
  encontrar(elemento) {
    if (this.arma.isLoaded()) {
      elemento.receiveAttack(this.arma.power);
      this.arma.use();
    } else {
      console.log(`La ${this.arma.constructor.name} no está cargada`);
    }
  }
}
class Mario {
  constructor() {
    this.valueCollected = 0;
    this.lastElemento = null;
  }
  encontrar(elemento) {
    this.valueCollected += elemento.valueCollected();
    elemento.work();
    this.lastElemento = elemento;
  }
  isHappy() {
    return (
      this.valueCollected >= 50 ||
      (this.lastElemento && this.lastElemento.height >= 10)
    );
  }
}

module.exports = { Floki, Mario };
