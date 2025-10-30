const Aparato = require('./Aparato');
class Bicicleta extends Aparato {
  constructor() {
    super();
  }
  puedeUsar(paciente) {
    return paciente.edad > 8;
  }
  usar(paciente) {
    if (this.puedeUsar(paciente)) {
      paciente.nivelDolor -= 4;
      paciente.fortalezaMuscular += 3;
      console.log(`El paciente esta usando la bicicleta`);
    } else {
      console.log(`El paciente no puede usar la bicicleta`);
    }
  }
}
module.exports = Bicicleta;
