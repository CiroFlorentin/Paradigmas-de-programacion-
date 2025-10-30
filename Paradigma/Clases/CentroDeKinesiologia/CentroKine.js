const Paciente = require('./Paciente.js');
const Magneto = require('./Magneto.js');
const Bicicleta = require('./Bicicleta.js');
const Minitramp = require('./Minitramp.js');

const leonardo = new Paciente(40, 10, 20);
const milena = new Paciente(3, 30, 50);

const magneto = new Magneto();
const bicicleta = new Bicicleta();
const minitramp = new Minitramp();

// console.log('Leonardo');
// leonardo.usarAparato(magneto);
// leonardo.usarAparato(bicicleta);
// leonardo.usarAparato(minitramp);

// console.log('Milena');
// milena.usarAparato(magneto);
// milena.usarAparato(bicicleta);
// milena.usarAparato(minitramp);

console.log('======= RUTINAS =======');
leonardo.agregarAparatoARutina([bicicleta, minitramp, bicicleta, magneto]);
console.log({
  nombre: 'leonardo',
  edad: leonardo.edad,
  fortalezaMuscular: leonardo.fortalezaMuscular,
  nivelDolor: leonardo.nivelDolor,
});
console.log('----------------');
leonardo.usarAparatos();
console.log('----------------');
console.log({
  nombre: 'leonardo',
  edad: leonardo.edad,
  fortalezaMuscular: leonardo.fortalezaMuscular,
  nivelDolor: leonardo.nivelDolor,
});

milena.agregarAparatoARutina([bicicleta, magneto]);
console.log({
  nombre: 'milena',
  edad: milena.edad,
  fortalezaMuscular: milena.fortalezaMuscular,
  nivelDolor: milena.nivelDolor,
});
console.log('----------------');
milena.usarAparatos();
console.log('----------------');
console.log({
  nombre: 'milena',
  edad: milena.edad,
  fortalezaMuscular: milena.fortalezaMuscular,
  nivelDolor: milena.nivelDolor,
});
