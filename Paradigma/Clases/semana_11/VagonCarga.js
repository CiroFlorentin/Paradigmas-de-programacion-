const Vagon = require('./Vagon.js');
class VagonCarga extends Vagon {
  constructor(cargaMaxIdeal, maderasSueltas) {
    super();
    this.cargaMaxIdeal = cargaMaxIdeal;
    this.maderasSueltas = maderasSueltas;
  }
  cantPasajeros() {
    return 0;
  }
  cargaMax() {
    return this.cargaMaxIdeal - 400 * this.maderasSueltas;
  }
  cantPeso() {
    return this.cargaMax() + 1500;
  }
  mantenimiento() {
    this.maderasSueltas = Math.max(0, this.maderasSueltas - 2);
  }
}
module.exports = VagonCarga;
