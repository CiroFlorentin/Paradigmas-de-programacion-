const Vagon = require('./Vagon.js');

class VagonDormitorio extends Vagon {
  constructor(cantCompartimientos, cantCamas) {
    super();
    this.cantCompartimientos = cantCompartimientos;
    this.cantCamas = cantCamas;
    this.baño = true;
  }
  cantPasajeros() {
    return this.cantCompartimientos * this.cantCamas;
  }
  cargaMax() {
    return 1200;
  }
  cantPeso() {
    return 4000 + 80 * this.cantPasajeros() + this.cargaMax();
  }
  get popular() {
    return this.cantPasajeros() > 50;
  }
}
module.exports = VagonDormitorio;
