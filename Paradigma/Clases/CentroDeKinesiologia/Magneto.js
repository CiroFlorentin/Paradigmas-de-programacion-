const Aparato = require('./Aparato');

class Magneto extends Aparato {
  constructor() {
    super();
  }
  puedeUsar() {
    return true;
  }
  usar(paciente) {
    paciente.nivelDolor -= paciente.nivelDolor * 0.1;
    console.log(`El paciente esta usando el magneto`);
  }
}
module.exports = Magneto;
