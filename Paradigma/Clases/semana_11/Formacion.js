const VagonDormitorio = require('./VagonDormitorio.js');
const VagonPasajero = require('./VagonPasajero.js');
const VagonCarga = require('./VagonCarga.js');

class FormacionFerroviaria {
  constructor() {
    this.vagones = [];
    this.locomotora = [];
  }

  agregarVagon(vagon) {
    this.vagones.push(vagon);
  }

  agregarLocomotora(locomotora) {
    this.locomotora.push(locomotora);
  }

  //! LOCOMOTORAS

  velocidadMaxLocomotora() {
    return this.locomotora.reduce((min, locomotora) => {
      return Math.min(min, locomotora.velocidadMax());
    }, this.locomotora[0].velocidadMax());
  }

  esEficienteLocomotora() {
    return this.locomotora.every((l) => l.eficiente());
  }
  pesoMax() {
    let pesoVagon = this.vagones.reduce((pesoVagon, vagon) => {
      return pesoVagon + vagon.cantPeso();
    }, 0);
    let pesoLocomotora = this.locomotora.reduce(
      (pesoLocomotora, locomotora) => {
        return pesoLocomotora + locomotora.peso;
      },
      0
    );
    return pesoVagon + pesoLocomotora;
  }

  arrastreMax() {
    let arrastre = this.locomotora.reduce((arrastre, locomotora) => {
      return arrastre + locomotora.arrastreMax;
    }, 0);
    return arrastre;
  }

  puedeMoverse() {
    return this.arrastreMax() >= this.pesoMax();
  }

  kilosEmpuje() {
    if (this.puedeMoverse()) return 0;
    return this.pesoMax() - this.arrastreMax();
  }

  //! VAGONES

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
    const umbral = 20;

    const cantidad = this.vagones
      .map((v) => v.cantPasajeros())
      .filter((v) => v > 0);
    const max = Math.max(...cantidad);
    const min = Math.min(...cantidad);

    if (cantidad.length < 2) return true;

    return max - min <= umbral;
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

  vagonMasPesado() {
    return this.vagones.reduce((max, vagon) => {
      return Math.max(max, vagon.cantPeso());
    }, 0);
  }
}
module.exports = FormacionFerroviaria;
