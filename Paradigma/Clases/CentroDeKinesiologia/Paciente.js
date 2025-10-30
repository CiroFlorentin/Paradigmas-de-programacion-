class Paciente {
  constructor(edad, nivelDolor, fortalezaMuscular) {
    this.edad = edad;
    this.fortalezaMuscular = fortalezaMuscular;
    this.nivelDolor = nivelDolor;
    this.rutina = [];
  }
  usarAparato(aparato) {
    aparato.usar(this);
  }
  puedeUsarAparatos() {
    if (this.rutina.length === 0) return false;
    return this.rutina.every((aparato) => aparato.puedeUsar(this));
  }
  usarAparatos() {
    if (!this.puedeUsarAparatos()) {
      console.log('El paciente no puede usar los aparatos');
      return;
    }
    this.rutina.forEach((aparato) => aparato.usar(this));
  }
  agregarAparatoARutina(aparatos) {
    this.rutina.push(...aparatos);
  }
}

module.exports = Paciente;
