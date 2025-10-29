const VagonDormitorio = require('./VagonDormitorio.js');
const VagonPasajero = require('./VagonPasajero.js');
const VagonCarga = require('./VagonCarga.js');

class FormacionFerroviaria {
  constructor() {
    this.vagones = [];
  }

  agregarVagon(vagon) {
    this.vagones.push(vagon);
  }

  dispersionPeso() {
    if (this.vagones.length === 0) return 0;

    const vagonMasPesado = Math.max(...this.vagones.map((v) => v.cantPeso()));
    const vagonMenosPesado = Math.min(...this.vagones.map((v) => v.cantPeso()));
    return vagonMasPesado - vagonMenosPesado;
  }

  cantBaños() {
    if (this.vagones.length === 0) return 0;
    const vagonesConBaño = this.vagones.filter(
      (v) =>
        (v instanceof VagonPasajero || v instanceof VagonDormitorio) &&
        v.baño === true
    );
    return vagonesConBaño.length;
  }

  mantenimiento() {
    this.vagones.forEach((vagon) => {
      if (vagon instanceof VagonPasajero) {
        vagon.mantenimiento();
      }
      if (vagon instanceof VagonCarga) {
        vagon.mantenimiento();
      }
    });
  }

  equilibradaPasajeros() {
    const vagonesPasajeros = this.vagones.filter(
      (v) => v instanceof VagonPasajero
    );
    if (vagonesPasajeros.length === 0) return 0;
    const maxPasajeros = Math.max(
      ...vagonesPasajeros.map((v) => v.cantPasajeros())
    );
    const minPasajeros = Math.min(
      ...vagonesPasajeros.map((v) => v.cantPasajeros())
    );
    return maxPasajeros - minPasajeros <= 20;
  }

  cantPasajerosTotal() {
    return this.vagones.reduce((total, vagon) => {
      if (vagon instanceof VagonPasajero || vagon instanceof VagonDormitorio) {
        total = total + vagon.cantPasajeros();
      }
      return total;
    }, 0);
  }
  
  cantPopulares() {
    return this.vagones.filter(
      (v) =>
        (v instanceof VagonPasajero || v instanceof VagonDormitorio) &&
        v.popular
    ).length;
  }

  esCarguero() {
    return this.vagones.every((v) => v.cargaMax() > 1000);
  }
}
module.exports = FormacionFerroviaria;
