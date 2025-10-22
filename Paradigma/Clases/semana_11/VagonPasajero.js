const Vagon = require('./Vagon.js');

class VagonPasajeros extends Vagon {
  constructor(largo, ancho, ordenado, baño) {
    super(largo, ancho);
    this.ordenado = ordenado;
    this.baño = baño;
  }
  cantPasajeros() {
    const baseAncho = this.ancho > 3 ? 10 : 8;
    const baseLargo = this.ordenado ? 0 : -15;
    return this.largo * baseAncho + baseLargo;
  }
  cargaMax() {
    return this.baño ? 300 : 800;
  }
  cantPeso() {
    const pesoBase = 2000;
    const cantPersonasCarga = this.cantPasajeros() * 80;
    return pesoBase + cantPersonasCarga + this.cargaMax();
  }
  mantenimiento() {
    this.ordenado = true;
  }
  get popular() {
    return this.cantPasajeros() > 50;
  }
}
module.exports = VagonPasajeros;
