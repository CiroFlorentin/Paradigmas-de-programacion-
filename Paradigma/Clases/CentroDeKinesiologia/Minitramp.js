const Aparato = require('./Aparato.js');

class Minitramp extends Aparato {
  constructor() {
    super();
  }
  puedeUsar(paciente) {
    return paciente.nivelDolor < 20;
  }
  usar(paciente) {
    if (this.puedeUsar(paciente)) {
      paciente.fortalezaMuscular += paciente.edad * 0.1;
      console.log(`El paciente esta usando el minitramp`);
    } else {
      console.log(`El paciente no puede usar el minitramp`);
    }
  }
}
module.exports = Minitramp;
