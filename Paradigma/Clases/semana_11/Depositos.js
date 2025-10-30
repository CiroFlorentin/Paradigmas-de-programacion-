class Depositos {
  constructor() {
    this.formaciones = [];
    this.locomotora = [];
  }
  agregarFormacion(formacion) {
    this.formaciones.push(formacion);
  }
  agregarLocomotora(locomotora) {
    this.locomotora.push(locomotora);
  }
  vagonMasPesadoDeCadaFormacion() {
    return this.formaciones.map((formacion) => {
      return formacion.vagonMasPesado();
    });
  }
  unidadesFormacion() {
    return this.formaciones.map((formacion) => {
      return formacion.locomotora.length + formacion.vagones.length;
    });
  }
  formacionCompleja() {
    let unidades = this.unidadesFormacion();
    if (unidades.some((u) => u > 8)) {
      return true;
    }
    if (this.formaciones.some((formacion) => formacion.pesoMax() > 80000)) {
      return true;
    }
    return false;
  }
  moverLocomotora(formacionMover) {
    if (formacionMover.puedeMoverse()) return 'Puede Moverse';
    let locoMover = this.locomotora.find((l) => {
      return formacionMover.kilosEmpuje() < l.arrastreMax;
    });
    if (!locoMover) return 'No hay locomotora';

    let locomotora = this.locomotora.find((l) => l === locoMover);
    this.locomotora.splice(this.locomotora.indexOf(locomotora), 1);
    this.formaciones
      .find((f) => f === formacionMover)
      .locomotora.push(locomotora);
    return 'locomotora Movida';
  }
}

module.exports = Depositos;
