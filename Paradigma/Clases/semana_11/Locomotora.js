class Locomotora {
  constructor(peso, arrastreMax, velocidad) {
    this.peso = peso;
    this.arrastreMax = arrastreMax;
    this.velocidad = velocidad;
  }
  eficiente() {
    return this.arrastreMax >= this.peso * 5;
  }
  velocidadMax() {
    return this.velocidad;
  }
}

module.exports = Locomotora;
